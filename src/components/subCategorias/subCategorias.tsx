"use client";
import { useState } from 'react';
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

    const handleSubCategoriaClick = (id: number) => {
        setSelectedSubCategoria(id);
        const element = document.getElementById(`produtos-${id}`);
        if (element) {
            const offset = blueBarHeight + 60;
            const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full">
            <div
                className="sticky bg-white z-[5] h-[60px] flex items-center"
                style={{ top: `${blueBarHeight}px` }}
            >
                {/* <ScrollableContainer> */}
                    <div className="flex gap-2 py-1">
                        {subCategorias.map((subCategoria) => (
                            <button
                                key={subCategoria.id}
                                onClick={() => handleSubCategoriaClick(subCategoria.id)}
                                className={`px-4 py-2 rounded-md transition-all duration-300 ${selectedSubCategoria === subCategoria.id
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
                {/* </ScrollableContainer> */}
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
