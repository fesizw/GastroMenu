"use client";
import Image from 'next/image';
import { ProductsType } from '@/mocks/mockCardMenu';

interface ProductsProps {
    produtos?: ProductsType[] | undefined;
    titulo: string;
    id: string;
}

export default function Products({ produtos, titulo, id }: ProductsProps) {
    if (produtos?.length === 0) {
        return null;
    }

    return (
        <div id={id} className="py-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{titulo}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {produtos?.map((produto) => (
                    <div key={produto.id} className="flex flex-col justify-between items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="flex-1 w-full">
                            <h3 className="text-lg font-bold uppercase text-gray-800">{produto.name}</h3>
                            <p className="text-gray-600 mt-1">{produto.description}</p>
                            <div className="mt-2 flex items-center gap-2">
                                <p className="font-semibold text-gray-800">R$ {produto.value.toFixed(2)}</p>
                                <button className="text-blue-600 hover:underline text-sm">Saiba mais</button>
                                {produto.vegetariano && (
                                    <span className="text-green-600 text-sm flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                                        Vegetariano
                                    </span>
                                )}
                            </div>
                        </div>
                        {produto.image && (
                            <div className="w-full md:w-32 h-32 relative rounded-lg overflow-hidden">
                                <Image
                                    src={produto.image}
                                    alt={produto.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}