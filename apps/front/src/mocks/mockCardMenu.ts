export interface CardMenuType {
  id: number;
  nome: string;
  cor: string;
  imagem: string;
  subCategorias: SubCategoriaType[];
}

export interface SubCategoriaType {
  id: number;
  nome: string;
  produtos?: ProdutoType[];
}

export interface ProdutoType {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  vegetariano?: boolean;
}

export const mockCardMenu: CardMenuType[] = [
  {
    id: 1,
    nome: "Menu Principal",
    cor: "#8B6144",
    imagem: "https://img.cdndsgni.com/preview/11099453.jpg",
    subCategorias: [
      {
        id: 101,
        nome: "Couvert",
        produtos: [
          {
            id: 1001,
            nome: "COUVERT",
            descricao:
              "Pães artesanais, pastas, azeites aromatizados e manteiga",
            preco: 40.0,
            imagem: "https://img.cdndsgni.com/preview/11099453.jpg",
          },
          {
            id: 1002,
            nome: "COUVERT 2 TESTE",
            descricao:
              "Pães artesanais, pastas, azeites aromatizados e manteiga",
            preco: 40.0,
            imagem: "https://img.cdndsgni.com/preview/11099453.jpg",
          },
        ],
      },
      {
        id: 102,
        nome: "Tapas",
        produtos: [
          {
            id: 1021,
            nome: "HARUMAKI DE CAMARÃO",
            descricao: "Ao forno com cogumelos, alho poró e cream cheese",
            preco: 27.0,
            imagem: "https://example.com/harumaki.jpg",
          },
          {
            id: 1022,
            nome: "MINI BATATAS ASSADAS",
            descricao:
              "Com raspa de limão siciliano, flor de sal e azeite de trufas",
            preco: 27.0,
            imagem: "https://example.com/batatas.jpg",
            vegetariano: true,
          },
          {
            id: 1023,
            nome: "CROQUETE DE CARNE ASSADA",
            descricao: "Com molho de mostarda Dijon e mel",
            preco: 30.0,
            imagem: "https://example.com/croquete.jpg",
          },
          {
            id: 1024,
            nome: "BAO PORK",
            descricao:
              "Pão no vapor com porco desfiado ao barbecue e chutney de abacaxi",
            preco: 32.0,
            imagem: "https://example.com/bao.jpg",
          },
        ],
      },
      {
        id: 103,
        nome: "Crúdos",
        produtos: [
          {
            id: 1031,
            nome: "CEVICHE DE PEIXE BRANCO",
            descricao: "Com leite de tigre, milho e batata doce",
            preco: 38.0,
            imagem: "https://example.com/ceviche.jpg",
          },
          {
            id: 1032,
            nome: "TARTAR DE ATUM",
            descricao: "Com abacate, manga e molho ponzu",
            preco: 42.0,
            imagem: "https://example.com/tartar.jpg",
          },
        ],
      },
      {
        id: 104,
        nome: "Guioza",
        produtos: [
          {
            id: 1041,
            nome: "CAMARÃO COM ABÓBORA",
            descricao:
              "Trouxinha ao vapor recheada com camarões e mousse de abóbora",
            preco: 45.0,
            imagem: "https://example.com/camarao-abobora.jpg",
          },
          {
            id: 1042,
            nome: "SIRI THAI",
            descricao:
              "Trouxinha ao vapor recheada com carne de siri e temperos thai",
            preco: 45.0,
            imagem: "https://example.com/siri-thai.jpg",
          },
          {
            id: 1043,
            nome: "PORCO COM NIRÁ",
            descricao:
              "Trouxinha ao vapor recheada com carne de porco temperada com nirá",
            preco: 45.0,
            imagem: "https://example.com/porco-nira.jpg",
          },
        ],
      },
      {
        id: 105,
        nome: "Principais",
        produtos: [
          {
            id: 1051,
            nome: "PENNE SALTEADO",
            descricao: "Com legumes, cogumelos, gratinado e azeite de trufas",
            preco: 82.0,
            imagem: "https://example.com/penne.jpg",
            vegetariano: true,
          },
          {
            id: 1052,
            nome: "SALADA DE SASHIMI DE ATUM SEMI GRELHADO",
            descricao: "Com folhas verdes mistas e molho de gengibre",
            preco: 83.0,
            imagem: "https://example.com/salada-atum.jpg",
          },
          {
            id: 1053,
            nome: "SALADA CAESAR",
            descricao: "Com camarão crocante",
            preco: 85.0,
            imagem: "https://example.com/salada-caesar.jpg",
          },
          {
            id: 1054,
            nome: "PICADINHO DE ANCHO",
            descricao:
              "Com cogumelos e molho de vinho tinto, arroz cremoso de açafrão e mix de legumes",
            preco: 94.0,
            imagem: "https://example.com/picadinho.jpg",
          },
        ],
      },
      {
        id: 106,
        nome: "Sobremesa",
        produtos: [
          {
            id: 1061,
            nome: "CHEESECAKE DE FRUTAS VERMELHAS",
            descricao: "Com calda de frutas vermelhas e sorvete de creme",
            preco: 32.0,
            imagem: "https://example.com/cheesecake.jpg",
          },
          {
            id: 1062,
            nome: "PETIT GATEAU",
            descricao: "Com sorvete de creme e calda de chocolate",
            preco: 34.0,
            imagem: "https://example.com/petit-gateau.jpg",
          },
        ],
      },
      {
        id: 107,
        nome: "Café",
        produtos: [
          {
            id: 1071,
            nome: "ESPRESSO",
            descricao: "Café espresso tradicional",
            preco: 8.0,
            imagem: "https://example.com/espresso.jpg",
          },
          {
            id: 1072,
            nome: "CAPPUCCINO",
            descricao: "Café espresso com leite vaporizado e espuma de leite",
            preco: 12.0,
            imagem: "https://example.com/cappuccino.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    nome: "Sushibar",
    cor: "#A64B2A",
    imagem:
      "https://www.zapimoveis.com.br/blog/wp-content/uploads/2024/01/dia-do-sushi-no-brasil.jpg",
    subCategorias: [
      { id: 201, nome: "Sashimi", produtos: [] },
      { id: 202, nome: "Nigiri", produtos: [] },
      { id: 203, nome: "Uramaki", produtos: [] },
      { id: 204, nome: "Temaki", produtos: [] },
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
