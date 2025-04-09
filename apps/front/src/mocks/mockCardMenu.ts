export interface RestauranteStatusType {
  id: string;
  order: number;
  name: string;
  logo: string;
  address: string;
  socials: string[];
  mail: string;
  phone: string;
  carouselPhotos: string[];
  description: string;
  active: boolean;
  categories: CardMenuType[];
}

export interface CardMenuType {
  id: string;
  order: number;
  name: string;
  color: string;
  image: string;
  subcategories: SubCategoriesType[];
}

export interface SubCategoriesType {
  id: string;
  order: number;
  name: string;
  products?: ProductsType[];
}

export interface ProductsType {
  id: string;
  order: number;
  name: string;
  description: string;
  value: number;
  image: string;
  active: boolean;
  vegetariano?: boolean;
}

export const mockCardMenu: CardMenuType[] = [
  {
    id: "1",
    order: 1,
    name: "Menu Principal",
    color: "#8B6144",
    image: "https://img.cdndsgni.com/preview/11099453.jpg",
    subcategories: [
      {
        id: "101",
        order: 101,
        name: "Couvert",
        products: [
          {
            id: "1001",
            order: 1001,
            name: "COUVERT",
            description:
              "Pães artesanais, pastas, azeites aromatizados e manteiga",
            value: 40.0,
            image: "https://img.cdndsgni.com/preview/11099453.jpg",
            active: true,
          },
          {
            id: "1002",
            order: 1002,
            name: "COUVERT 2 TESTE",
            description:
              "Pães artesanais, pastas, azeites aromatizados e manteiga",
            value: 40.0,
            image: "https://img.cdndsgni.com/preview/11099453.jpg",
            active: true,
          },
        ],
      },
      {
        id: "102",
        order: 102,
        name: "Tapas",
        products: [
          {
            id: "1021",
            order: 1021,
            name: "HARUMAKI DE CAMARÃO",
            description: "Ao forno com cogumelos, alho poró e cream cheese",
            value: 27.0,
            image: "https://example.com/harumaki.jpg",
            active: true,
          },
          {
            id: "1022",
            order: 1022,
            name: "MINI BATATAS ASSADAS",
            description:
              "Com raspa de limão siciliano, flor de sal e azeite de trufas",
            value: 27.0,
            image: "https://example.com/batatas.jpg",
            vegetariano: true,
            active: true,
          },
          {
            id: "1023",
            order: 1023,
            name: "CROQUETE DE CARNE ASSADA",
            description: "Com molho de mostarda Dijon e mel",
            value: 30.0,
            image: "https://example.com/croquete.jpg",
            active: true,
          },
          {
            id: "1024",
            order: 1024,
            name: "BAO PORK",
            description:
              "Pão no vapor com porco desfiado ao barbecue e chutney de abacaxi",
            value: 32.0,
            image: "https://example.com/bao.jpg",
            active: true,
          },
        ],
      },
      {
        id: "103",
        order: 103,
        name: "Crúdos",
        products: [
          {
            id: "1031",
            order: 1031,
            name: "CEVICHE DE PEIXE BRANCO",
            description: "Com leite de tigre, milho e batata doce",
            value: 38.0,
            image: "https://example.com/ceviche.jpg",
            active: true,
          },
          {
            id: "1032",
            order: 1032,
            name: "TARTAR DE ATUM",
            description: "Com abacate, manga e molho ponzu",
            value: 42.0,
            image: "https://example.com/tartar.jpg",
            active: true,
          },
        ],
      },
      {
        id: "104",
        order: 104,
        name: "Guioza",
        products: [
          {
            id: "1041",
            order: 1041,
            name: "CAMARÃO COM ABÓBORA",
            description:
              "Trouxinha ao vapor recheada com camarões e mousse de abóbora",
            value: 45.0,
            image: "https://example.com/camarao-abobora.jpg",
            active: true,
          },
          {
            id: "1042",
            order: 1042,
            name: "SIRI THAI",
            description:
              "Trouxinha ao vapor recheada com carne de siri e temperos thai",
            value: 45.0,
            image: "https://example.com/siri-thai.jpg",
            active: true,
          },
          {
            id: "1043",
            order: 1043,
            name: "PORCO COM NIRÁ",
            description:
              "Trouxinha ao vapor recheada com carne de porco temperada com nirá",
            value: 45.0,
            image: "https://example.com/porco-nira.jpg",
            active: true,
          },
        ],
      },
      {
        id: "105",
        order: 105,
        name: "Principais",
        products: [
          {
            id: "1051",
            order: 1051,
            name: "PENNE SALTEADO",
            description: "Com legumes, cogumelos, gratinado e azeite de trufas",
            value: 82.0,
            image: "https://example.com/penne.jpg",
            vegetariano: true,
            active: true,
          },
          {
            id: "1052",
            order: 1052,
            name: "SALADA DE SASHIMI DE ATUM SEMI GRELHADO",
            description: "Com folhas verdes mistas e molho de gengibre",
            value: 83.0,
            image: "https://example.com/salada-atum.jpg",
            active: true,
          },
          {
            id: "1053",
            order: 1053,
            name: "SALADA CAESAR",
            description: "Com camarão crocante",
            value: 85.0,
            image: "https://example.com/salada-caesar.jpg",
            active: true,
          },
          {
            id: "1054",
            order: 1054,
            name: "PICADINHO DE ANCHO",
            description:
              "Com cogumelos e molho de vinho tinto, arroz cremoso de açafrão e mix de legumes",
            value: 94.0,
            image: "https://example.com/picadinho.jpg",
            active: true,
          },
        ],
      },
      {
        id: "106",
        order: 106,
        name: "Sobremesa",
        products: [
          {
            id: "1061",
            order: 1061,
            name: "CHEESECAKE DE FRUTAS VERMELHAS",
            description: "Com calda de frutas vermelhas e sorvete de creme",
            value: 32.0,
            image: "https://example.com/cheesecake.jpg",
            active: true,
          },
          {
            id: "1062",
            order: 1062,
            name: "PETIT GATEAU",
            description: "Com sorvete de creme e calda de chocolate",
            value: 34.0,
            image: "https://example.com/petit-gateau.jpg",
            active: true,
          },
        ],
      },
      {
        id: "107",
        order: 107,
        name: "Café",
        products: [
          {
            id: "1071",
            order: 1071,
            name: "ESPRESSO",
            description: "Café espresso tradicional",
            value: 8.0,
            image: "https://example.com/espresso.jpg",
            active: true,
          },
          {
            id: "1072",
            order: 1072,
            name: "CAPPUCCINO",
            description: "Café espresso com leite vaporizado e espuma de leite",
            value: 12.0,
            image: "https://example.com/cappuccino.jpg",
            active: true,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    order: 2,
    name: "Sushibar",
    color: "#A64B2A",
    image:
      "https://www.zapimoveis.com.br/blog/wp-content/uploads/2024/01/dia-do-sushi-no-brasil.jpg",
    subcategories: [
      { id: "201", order: 201, name: "Sashimi", products: [] },
      { id: "202", order: 202, name: "Nigiri", products: [] },
      { id: "203", order: 203, name: "Uramaki", products: [] },
      { id: "204", order: 204, name: "Temaki", products: [] },
    ],
  },
  {
    id: "3",
    order: 3,
    name: "Carta de Vinhos",
    color: "#722F37",
    image:
      "https://www.divvino.com.br/blog/wp-content/uploads/2020/03/garrafas-de-vinho.jpg",
    subcategories: [
      { id: "301", order: 301, name: "Tintos" },
      { id: "302", order: 302, name: "Brancos" },
      { id: "303", order: 303, name: "Rosés" },
      { id: "304", order: 304, name: "Espumantes" },
    ],
  },
  {
    id: "4",
    order: 4,
    name: "Carta de Sake",
    color: "#C0C0C0",
    image:
      "https://www.guiadasemana.com.br/contentFiles/system/pictures/2011/9/25280/original/garrafas-saque.jpg",
    subcategories: [
      { id: "401", order: 401, name: "Junmai" },
      { id: "402", order: 402, name: "Ginjo" },
      { id: "403", order: 403, name: "Daiginjo" },
      { id: "404", order: 404, name: "Especiais" },
    ],
  },
  {
    id: "5",
    order: 5,
    name: "Bebidas",
    color: "#2E8B57",
    image:
      "https://img.freepik.com/fotos-premium/bebidas-refrigeradas-mezcla-sabores-experiencia-refrescante-concept-mocktail-recetas-bebidas-verano-bebidas-refrescantes-cocteles-refrigerados-bebidas-sabrosas_864588-54183.jpg",
    subcategories: [
      { id: "501", order: 501, name: "Refrigerantes" },
      { id: "502", order: 502, name: "Sucos" },
      { id: "503", order: 503, name: "Coquetéis" },
      { id: "504", order: 504, name: "Cervejas" },
    ],
  },
  {
    id: "6",
    order: 6,
    name: "Teste",
    color: "orange",
    image:
      "https://swiftbr.vteximg.com.br/arquivos/churrasco-completo-de-dia-dos-pais.jpg",
    subcategories: [
      { id: "601", order: 601, name: "Opção 1" },
      { id: "602", order: 602, name: "Opção 2" },
      { id: "603", order: 603, name: "Opção 3" },
    ],
  },
];
