"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { mockCardMenu, CardMenuType } from '@/mocks/mockCardMenu';
import ScrollableContainer from '@/utils/scrollableContainer/scrollableContainer';
import SubCategorias from '@/components/subCategorias/subCategorias';

export default function CardMenu() {
    const [selectedCard, setSelectedCard] = useState<number | null>(1);
    const [currentCard, setCurrentCard] = useState<CardMenuType | null>(null);
    const [blueBarHeight, setBlueBarHeight] = useState(0);
    const blueBarRef = useRef<HTMLDivElement>(null);

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

    return (
        <div className="flex flex-col w-full">
            <div ref={blueBarRef} className="px-4 sticky top-0 z-[5] bg-white py-2">
                <ScrollableContainer>
                    <div className="flex gap-4 py-2">
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
                </ScrollableContainer>
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
