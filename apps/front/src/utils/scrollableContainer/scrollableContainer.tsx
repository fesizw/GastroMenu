"use client";

import { useRef, useCallback, useEffect } from "react";

export default function ScrollableContainer({ children }: { children: React.ReactNode }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const moved = useRef(false);
    const touchIdentifier = useRef<number | null>(null);
    const isIOS = useRef(false);

    // Detecta se é iOS na montagem do componente
    useEffect(() => {
        isIOS.current = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    }, []);

    // Função que desativa temporariamente os cliques somente se não for mobile
    const disableClickTemporarily = () => {
        if (!scrollRef.current) return;
        // Se estivermos num dispositivo com touch, não desabilita os cliques
        if ("ontouchstart" in window) return;
        scrollRef.current.style.pointerEvents = "none";
        // Reativa os cliques depois de 100ms
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.style.pointerEvents = "auto";
            }
        }, 100);
    };

    // Limpa todos os estados de interação
    const resetInteraction = useCallback(() => {
        isDragging.current = false;
        moved.current = false;
        touchIdentifier.current = null;
    }, []);

    // Adiciona um listener global para garantir que o estado seja resetado
    useEffect(() => {
        const handleGlobalTouchEnd = () => {
            if (moved.current) {
                setTimeout(resetInteraction, isIOS.current ? 100 : 50);
            } else {
                resetInteraction();
            }
        };

        window.addEventListener('touchend', handleGlobalTouchEnd, { passive: true });
        return () => {
            window.removeEventListener('touchend', handleGlobalTouchEnd);
        };
    }, [resetInteraction]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5; // Reduzido para movimento mais suave
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
        moved.current = true;
    }, []);

    const handleMouseUp = useCallback(() => {
        if (moved.current) {
            disableClickTemporarily();
        }
        isDragging.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }, [handleMouseMove]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
        isDragging.current = true;
        moved.current = false;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!scrollRef.current || e.touches.length !== 1) return;
        
        // Armazena o identificador do toque para rastrear o mesmo dedo
        touchIdentifier.current = e.touches[0].identifier;
        isDragging.current = true;
        moved.current = false;
        startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        
        // No iOS, não previne o comportamento padrão no touchstart
        // pois isso pode quebrar outros gestos
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging.current || !scrollRef.current) return;
        
        // Encontra o toque correto usando o identificador
        let touchIndex = -1;
        for (let i = 0; i < e.touches.length; i++) {
            if (e.touches[i].identifier === touchIdentifier.current) {
                touchIndex = i;
                break;
            }
        }
        
        if (touchIndex === -1) return;
        
        const touch = e.touches[touchIndex];
        const x = touch.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * (isIOS.current ? 1 : 1.2); // Ajuste específico para iOS
        
        // Só considera como movimento se for maior que um limiar
        if (Math.abs(walk) > 5) {
            scrollRef.current.scrollLeft = scrollLeft.current - walk;
            moved.current = true;
            
            // Previne o comportamento padrão apenas se for um movimento horizontal significativo
            if (Math.abs(walk) > 10 && e.cancelable) {
                e.preventDefault();
            }
        }
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        // Verifica se este é o fim do toque que estamos rastreando
        let found = false;
        for (let i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === touchIdentifier.current) {
                found = true;
                break;
            }
        }
        
        if (!found) return;
        
        if (moved.current) {
            // Adiciona um pequeno atraso para garantir que o Safari não interprete como um clique
            // Atraso maior para iOS
            setTimeout(() => {
                resetInteraction();
            }, isIOS.current ? 100 : 50);
        } else {
            resetInteraction();
        }
    };

    return (
        <div
            ref={scrollRef}
            className="overflow-x-auto select-none scrollbar-hide"
            style={{
                WebkitOverflowScrolling: 'touch', // Melhora o scroll no iOS
                scrollBehavior: 'smooth',
                msOverflowStyle: 'none', // Para IE e Edge
                scrollbarWidth: 'none' // Para Firefox
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchCancel={resetInteraction}
        >
            {children}
        </div>
    );
}
