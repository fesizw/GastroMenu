"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { mockCardMenu, CardMenuType } from '@/mocks/mockCardMenu';
import SubCategorias from '@/components/subCategorias/subCategorias';

export default function CardMenu() {
    const [selectedCard, setSelectedCard] = useState<number | null>(1);
    const [currentCard, setCurrentCard] = useState<CardMenuType | null>(null);
    const [blueBarHeight, setBlueBarHeight] = useState(0);
    const blueBarRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const isTouchDevice = useRef(false);

    useEffect(() => {
        // Detecta se é um dispositivo de toque
        isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }, []);

    useEffect(() => {
        if (!blueBarRef.current) return;
    
        const observer = new ResizeObserver(() => {
            if (blueBarRef.current) {
                setBlueBarHeight(blueBarRef.current.offsetHeight);
            }
        });
    
        observer.observe(blueBarRef.current);
    
        return () => {
            observer.disconnect();
        };
    }, []);
    
    useEffect(() => {
        if (selectedCard) {
            const card = mockCardMenu.find(c => c.id === selectedCard) || null;
            setCurrentCard(card);
        }
    }, [selectedCard]);

    // Mouse drag scroll functionality
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollContainerRef.current) return;
        
        // Só previne o comportamento padrão em dispositivos não-touch
        if (!isTouchDevice.current) {
            e.preventDefault();
        }
        
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // Touch events para dispositivos móveis
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!scrollContainerRef.current || e.touches.length !== 1) return;
        isDragging.current = true;
        startX.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current || !scrollContainerRef.current || e.touches.length !== 1) return;
        
        // Não previne o comportamento padrão em dispositivos iOS para evitar problemas
        // com outros gestos nativos
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (!isIOS && Math.abs(scrollLeft.current - scrollContainerRef.current.scrollLeft) > 10) {
            e.preventDefault();
        }
        
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5; // Velocidade reduzida para touch
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        const handleMouseUpOutside = () => {
            if (isDragging.current) {
                handleMouseUp();
            }
        };

        document.addEventListener('mouseup', handleMouseUpOutside);
        document.addEventListener('touchend', handleTouchEnd);
        return () => {
            document.removeEventListener('mouseup', handleMouseUpOutside);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div ref={blueBarRef} className="px-4 sticky top-0 z-[5] bg-white py-2">
                <div 
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide py-2 -mx-1 px-1 cursor-grab select-none"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    <div className="flex gap-4 min-w-min">
                        {mockCardMenu.map((card: CardMenuType) => (
                            <div
                                key={card.id}
                                onClick={() => setSelectedCard(card.id)}
                                className={`
                                min-w-[150px] md:min-w-[200px] h-[50px] md:h-[70px] rounded-lg cursor-pointer
                                transition-all duration-300 relative overflow-hidden
                                ${selectedCard === card.id ? 'flex-1' : 'flex-none'}
                            `}
                                style={{
                                    backgroundColor: selectedCard === card.id ? card.cor : 'transparent'
                                }}
                            >
                                {selectedCard === card.id ? (
                                    <div className="flex items-center justify-center w-full h-full">
                                        <h2 className="text-white text-[15px] md:text-xl font-semibold">{card.nome}</h2>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={card.imagem}
                                            alt={card.nome}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <h2 className="text-white text-[15px] md:text-xl font-semibold">{card.nome}</h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {currentCard && (
                <div className="px-4">
                    <SubCategorias
                        subCategorias={currentCard.subCategorias}
                        corFundo={currentCard.cor}
                        blueBarHeight={blueBarHeight}
                    />
                </div>
            )}
        </div>
    );
}
