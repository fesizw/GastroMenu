export interface CardMenuType {
    id: number;
    nome: string;
    cor: string;
    imagem: string;
}

export const mockCardMenu: CardMenuType[] = [
    {
        id: 1,
        nome: "Menu Principal",
        cor: "#8B6144",
        imagem: "/menu-principal.jpg"
    },
    {
        id: 2,
        nome: "Sushibar",
        cor: "#A64B2A",
        imagem: "/sushibar.jpg"
    },
    {
        id: 3,
        nome: "Carta de Vinhos",
        cor: "#722F37",
        imagem: "/vinhos.jpg"
    },
    {
        id: 4,
        nome: "Carta de Sake",
        cor: "#C0C0C0",
        imagem: "/sake.jpg"
    },
    {
        id: 5,
        nome: "Bebidas",
        cor: "#2E8B57",
        imagem: "/bebidas.jpg"
    },
    {
        id: 6,
        nome: "teste",
        cor: "#f1f",
        imagem: "/bebidas.jpg"
    }
];