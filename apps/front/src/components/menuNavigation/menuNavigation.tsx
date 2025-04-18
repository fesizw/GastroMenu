"use client";
import { useState } from 'react';
import Image from 'next/image';
import { mockCardMenu } from '@/mocks/mockCardMenu';
import Products from '@/components/products/products';

export default function MenuNavigation() {
    const [selectedCard, setSelectedCard] = useState<number>(mockCardMenu[0]?.order || 1);
    const [selectedSubCategoria, setSelectedSubCategoria] = useState<number | null>(
        mockCardMenu[0]?.subcategories[0]?.order || null
    );

    const currentCard = mockCardMenu.find(card => card.order === selectedCard);

    const handleCardClick = (cardOrder: number) => {
        setSelectedCard(cardOrder);
        const newCard = mockCardMenu.find(card => card.order === cardOrder);
        setSelectedSubCategoria(newCard?.subcategories[0]?.order || null);
    };

    const handleSubCategoriaClick = (Order: number) => {
        setSelectedSubCategoria(Order);
        const element = document.getElementById(`produtos-${Order}`);
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
                                key={card.order}
                                onClick={() => handleCardClick(card.order)}
                                className={`
                                    min-w-[150px] md:min-w-[200px] h-[60px] md:h-[70px] rounded-lg 
                                    transition-all duration-300 relative overflow-hidden
                                    ${selectedCard === card.order ? 'flex-1' : 'flex-none'}
                                `}
                                style={{
                                    backgroundColor: selectedCard === card.order ? card.color : 'transparent'
                                }}
                            >
                                {selectedCard === card.order ? (
                                    <div className="flex items-center justify-center w-full h-full">
                                        <h2 className="text-white text-[15px] md:text-xl font-semibold">
                                            {card.name}
                                        </h2>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={card.image}
                                            alt={card.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <h2 className="text-white text-[15px] md:text-xl font-semibold">
                                                {card.name}
                                            </h2>
                                        </div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* SubCategorias Section */}
                {currentCard && currentCard.subcategories.length > 0 && (
                    <div className="flex items-center gap-2 px-4 overflow-x-auto scrollbar-hide py-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]">
                        {currentCard.subcategories.map((subCategoria) => (
                            <button
                                key={subCategoria.order}
                                onClick={() => handleSubCategoriaClick(subCategoria.order)}
                                className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap h-[50px] ${selectedSubCategoria === subCategoria.order
                                    ? 'text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                style={{
                                    backgroundColor: selectedSubCategoria === subCategoria.order
                                        ? currentCard.color
                                        : 'transparent'
                                }}
                            >
                                {subCategoria.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Products Section */}
            {currentCard && (
                <div className="mt-4 space-y-8 px-4">
                    {currentCard.subcategories.map((subCategoria) => (
                        <Products
                            key={subCategoria.order}
                            produtos={subCategoria.products}
                            titulo={subCategoria.name}
                            id={`produtos-${subCategoria.order}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}