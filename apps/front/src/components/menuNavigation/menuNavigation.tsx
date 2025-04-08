"use client";
import { useState } from 'react';
import Image from 'next/image';
import { mockCardMenu } from '@/mocks/mockCardMenu';
import Products from '@/components/products/products';

export default function MenuNavigation() {
    const [selectedCard, setSelectedCard] = useState<number>(mockCardMenu[0]?.id || 1);
    const [selectedSubCategoria, setSelectedSubCategoria] = useState<number | null>(
        mockCardMenu[0]?.subCategorias[0]?.id || null
    );

    const currentCard = mockCardMenu.find(card => card.id === selectedCard);

    const handleCardClick = (cardId: number) => {
        setSelectedCard(cardId);
        const newCard = mockCardMenu.find(card => card.id === cardId);
        setSelectedSubCategoria(newCard?.subCategorias[0]?.id || null);
    };

    const handleSubCategoriaClick = (id: number) => {
        setSelectedSubCategoria(id);
        const element = document.getElementById(`produtos-${id}`);
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full">
            {/* Cards Menu Section */}
            <div className="sticky top-0 z-5 bg-white">
                <div className="px-4 overflow-x-auto scrollbar-hide py-2">
                    <div className="flex gap-4 min-w-min">
                        {mockCardMenu.map((card) => (
                            <button
                                key={card.id}
                                onClick={() => handleCardClick(card.id)}
                                className={`
                                    min-w-[150px] md:min-w-[200px] h-[60px] md:h-[70px] rounded-lg 
                                    transition-all duration-300 relative overflow-hidden
                                    ${selectedCard === card.id ? 'flex-1' : 'flex-none'}
                                `}
                                style={{
                                    backgroundColor: selectedCard === card.id ? card.cor : 'transparent'
                                }}
                            >
                                {selectedCard === card.id ? (
                                    <div className="flex items-center justify-center w-full h-full">
                                        <h2 className="text-white text-[15px] md:text-xl font-semibold">
                                            {card.nome}
                                        </h2>
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
                                            <h2 className="text-white text-[15px] md:text-xl font-semibold">
                                                {card.nome}
                                            </h2>
                                        </div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* SubCategorias Section */}
                {currentCard && currentCard.subCategorias.length > 0 && (
                    <div className="flex items-center gap-2 px-4 overflow-x-auto scrollbar-hide py-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]">
                        {currentCard.subCategorias.map((subCategoria) => (
                            <button
                                key={subCategoria.id}
                                onClick={() => handleSubCategoriaClick(subCategoria.id)}
                                className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap h-[50px] ${
                                    selectedSubCategoria === subCategoria.id
                                        ? 'text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                                style={{
                                    backgroundColor: selectedSubCategoria === subCategoria.id 
                                        ? currentCard.cor 
                                        : 'transparent'
                                }}
                            >
                                {subCategoria.nome}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Products Section */}
            {currentCard && (
                <div className="mt-4 space-y-8 px-4">
                    {currentCard.subCategorias.map((subCategoria) => (
                        <Products
                            key={subCategoria.id}
                            produtos={subCategoria.produtos}
                            titulo={subCategoria.nome}
                            id={`produtos-${subCategoria.id}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}