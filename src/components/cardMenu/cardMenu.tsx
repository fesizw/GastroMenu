"use client";
import { useState } from 'react';
import Image from 'next/image';
import { mockCardMenu, CardMenuType } from '@/mocks/mockCardMenu';

export default function CardMenu() {
    const [selectedCard, setSelectedCard] = useState<number | null>(1);

    return (
        <div className="flex gap-4 p-4 overflow-x-auto">
            {mockCardMenu.map((card: CardMenuType) => (
                <div
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                    className={`
                        min-w-[200px] h-[70px] rounded-lg cursor-pointer
                        transition-all duration-300 relative overflow-hidden
                        ${selectedCard === card.id ? 'flex-1' : 'flex-none'}
                    `}
                    style={{
                        backgroundColor: selectedCard === card.id ? card.cor : 'transparent'
                    }}
                >
                    {selectedCard === card.id ? (
                        <div className="flex items-center justify-center w-full h-full">
                            <h2 className="text-white text-xl font-semibold">{card.nome}</h2>
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
                                <h2 className="text-white text-xl font-semibold">{card.nome}</h2>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}