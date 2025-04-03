export interface SubCategoriaType {
  id: number;
  nome: string;
}

export interface CardMenuType {
  id: number;
  nome: string;
  cor: string;
  imagem: string;
  subCategorias: SubCategoriaType[];
}

export const mockCardMenu: CardMenuType[] = [
  {
    id: 1,
    nome: "Menu Principal",
    cor: "#8B6144",
    imagem: "https://img.cdndsgni.com/preview/11099453.jpg",
    subCategorias: [
      { id: 101, nome: "Couvert" },
      { id: 102, nome: "Tapas" },
      { id: 103, nome: "Crúdos" },
      { id: 104, nome: "Guioza" },
      { id: 105, nome: "Principais" },
      { id: 106, nome: "Sobremesa" },
      { id: 107, nome: "Café" },
    ],
  },
  {
    id: 2,
    nome: "Sushibar",
    cor: "#A64B2A",
    imagem:
      "https://www.zapimoveis.com.br/blog/wp-content/uploads/2024/01/dia-do-sushi-no-brasil.jpg",
    subCategorias: [
      { id: 201, nome: "Sashimi" },
      { id: 202, nome: "Nigiri" },
      { id: 203, nome: "Uramaki" },
      { id: 204, nome: "Temaki" },
    ],
  },
  {
    id: 3,
    nome: "Carta de Vinhos",
    cor: "#722F37",
    imagem:
      "https://www.divvino.com.br/blog/wp-content/uploads/2020/03/garrafas-de-vinho.jpg",
    subCategorias: [
      { id: 301, nome: "Tintos" },
      { id: 302, nome: "Brancos" },
      { id: 303, nome: "Rosés" },
      { id: 304, nome: "Espumantes" },
    ],
  },
  {
    id: 4,
    nome: "Carta de Sake",
    cor: "#C0C0C0",
    imagem:
      "https://www.guiadasemana.com.br/contentFiles/system/pictures/2011/9/25280/original/garrafas-saque.jpg",
    subCategorias: [
      { id: 401, nome: "Junmai" },
      { id: 402, nome: "Ginjo" },
      { id: 403, nome: "Daiginjo" },
      { id: 404, nome: "Especiais" },
    ],
  },
  {
    id: 5,
    nome: "Bebidas",
    cor: "#2E8B57",
    imagem:
      "https://img.freepik.com/fotos-premium/bebidas-refrigeradas-mezcla-sabores-experiencia-refrescante-concept-mocktail-recetas-bebidas-verano-bebidas-refrescantes-cocteles-refrigerados-bebidas-sabrosas_864588-54183.jpg",
    subCategorias: [
      { id: 501, nome: "Refrigerantes" },
      { id: 502, nome: "Sucos" },
      { id: 503, nome: "Coquetéis" },
      { id: 504, nome: "Cervejas" },
    ],
  },
  {
    id: 6,
    nome: "Teste",
    cor: "orange",
    imagem:
      "https://swiftbr.vteximg.com.br/arquivos/churrasco-completo-de-dia-dos-pais.jpg",
    subCategorias: [
      { id: 601, nome: "Opção 1" },
      { id: 602, nome: "Opção 2" },
      { id: 603, nome: "Opção 3" },
    ],
  },
];
