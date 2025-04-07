"use client";
import { useState, useRef, useEffect } from 'react';
import { SubCategoriaType } from '@/mocks/mockCardMenu';
import Products from '@/components/products/products';

interface SubCategoriasProps {
    subCategorias: SubCategoriaType[];
    corFundo: string;
    blueBarHeight: number;
}

export default function SubCategorias({ subCategorias, corFundo, blueBarHeight }: SubCategoriasProps) {
    const [selectedSubCategoria, setSelectedSubCategoria] = useState<number | null>(
        subCategorias.length > 0 ? subCategorias[0].id : null
    );
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const isTouchDevice = useRef(false);

    useEffect(() => {
        isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }, []);

    const handleSubCategoriaClick = (id: number) => {
        if (!isDragging.current) {
            setSelectedSubCategoria(id);
            const element = document.getElementById(`produtos-${id}`);
            if (element) {
                const offset = blueBarHeight + 60;
                const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: topPosition, behavior: "smooth" });
            }
        }
    };

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
        
        if (!isTouchDevice.current) {
            e.preventDefault();
        }
        
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!scrollContainerRef.current || e.touches.length !== 1) return;
        isDragging.current = true;
        startX.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current || !scrollContainerRef.current || e.touches.length !== 1) return;
        
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isIOS) {
            // Reduz a velocidade do scroll no iOS para evitar flick
            const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
            const walk = (x - startX.current) * 0.8; // Velocidade mais suave para iOS
            requestAnimationFrame(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
                }
            });
        } else {
            const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
            const walk = (x - startX.current) * 1.5;
            scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
        }
    };

    const handleTouchEnd = () => {
        requestAnimationFrame(() => {
            isDragging.current = false;
        });
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
        <div className="w-full">
            <div
                className="sticky bg-white z-[5] h-[60px] flex items-center"
                style={{ top: `${blueBarHeight}px` }}
            >
                <div 
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide w-full -mx-1 px-1 cursor-grab select-none"
                    style={{ 
                        WebkitOverflowScrolling: 'touch',
                        WebkitBackfaceVisibility: 'hidden',
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: 'translate3d(0,0,0)',
                        msOverflowStyle: 'none',  // Para IE e Edge
                        scrollbarWidth: 'none'     // Para Firefox
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                >
                    <div className="flex gap-2 py-1 min-w-min">
                        {subCategorias.map((subCategoria) => (
                            <button
                                key={subCategoria.id}
                                onClick={() => handleSubCategoriaClick(subCategoria.id)}
                                className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${selectedSubCategoria === subCategoria.id
                                        ? 'bg-opacity-100 text-white font-medium border-b-2 border-white'
                                        : 'bg-opacity-50 text-white'
                                    }`}
                                style={{
                                    backgroundColor: selectedSubCategoria === subCategoria.id ? corFundo : 'transparent',
                                    color: selectedSubCategoria === subCategoria.id ? 'white' : '#333',
                                }}
                            >
                                {subCategoria.nome}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-2 w-full bg-gray-200 mt-5"></div>

            <div className="mt-4 space-y-8">
                {subCategorias.map((subCategoria) => (
                    <Products
                        key={subCategoria.id}
                        produtos={subCategoria.produtos}
                        titulo={subCategoria.nome}
                        id={`produtos-${subCategoria.id}`}
                    />
                ))}
            </div>
        </div>
    );
}
