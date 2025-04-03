"use client";
import { useState } from 'react';
import { SubCategoriaType } from '@/mocks/mockCardMenu';

interface SubCategoriasProps {
    subCategorias: SubCategoriaType[];
    corFundo: string;
}

export default function SubCategorias({ subCategorias, corFundo }: SubCategoriasProps) {
    const [selectedSubCategoria, setSelectedSubCategoria] = useState<number | null>(
        subCategorias.length > 0 ? subCategorias[0].id : null
    );

    return (
        <div className="w-full mt-4">
            <div className="flex overflow-x-auto gap-2 pb-2">
                {subCategorias.map((subCategoria) => (
                    <button
                        key={subCategoria.id}
                        onClick={() => setSelectedSubCategoria(subCategoria.id)}
                        className={`px-4 py-2 whitespace-nowrap rounded-md transition-all duration-300 ${selectedSubCategoria === subCategoria.id
                            ? 'bg-opacity-100 text-white font-medium border-b-2 border-white'
                            : 'bg-opacity-50 text-black'
                            }`}
                        style={{ backgroundColor: selectedSubCategoria === subCategoria.id ? corFundo : 'transparent' }}
                    >
                        {subCategoria.nome}
                    </button>
                ))}
            </div>
            <div className="h-3 w-full bg-gray-200 mt-2"></div>
            <div className="mt-4">
                {/* Aqui você pode adicionar o conteúdo específico de cada subcategoria */}
                <h2 className="text-xl font-bold">
                    {subCategorias.find(sc => sc.id === selectedSubCategoria)?.nome}
                </h2>
                {/* Conteúdo da subcategoria selecionada */}
            </div>
        </div>
    );
}