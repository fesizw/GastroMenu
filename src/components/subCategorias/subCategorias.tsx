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

        // descer para a seção de produtos correspondente
        const element = document.getElementById(`produtos-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="w-full">
            <div
                className="flex gap-2 pb-2 sticky bg-orange-500 z-[5] h-[60px]"
                style={{ top: `${blueBarHeight}px` }}
            >
                {subCategorias.map((subCategoria) => (
                    <button
                        key={subCategoria.id}
                        onClick={() => handleSubCategoriaClick(subCategoria.id)}
                        className={`px-4 py-2 whitespace-nowrap rounded-md transition-all duration-300 ${selectedSubCategoria === subCategoria.id
                            ? 'bg-opacity-100 text-white font-medium border-b-2 border-white'
                            : 'bg-opacity-50 text-white'
                            }`}
                        style={{ backgroundColor: selectedSubCategoria === subCategoria.id ? corFundo : 'transparent', color: selectedSubCategoria === subCategoria.id ? 'white' : '#333' }}
                    >
                        {subCategoria.nome}
                    </button>
                ))}
            </div>
            <div className="h-1 w-full bg-gray-200 mt-2"></div>

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
