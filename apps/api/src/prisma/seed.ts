import { PrismaClient } from "../generated/prisma";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const restaurant = await prisma.restaurant.create({
    data: {
      name: "Gourmet Bites",
      logo: "https://cdn.example.com/logo.png",
      address: "123 Flavor Street",
      mail: "contato@gourmet.com",
      phone: "+5511999999999",
      socials: ["@gourmetbites"],
      carouselPhotos: [
        "https://cdn.example.com/banner1.jpg",
        "https://cdn.example.com/banner2.jpg",
      ],
      description: "Fine dining with modern flair.",
    },
  });

  const user = await prisma.user.create({
    data: {
      name: "Admin",
      username: "admin",
      password: await hash("admin", 12),
      photo: "https://cdn.example.com/admin.jpg",
      active: true,
      restaurantId: restaurant.id,
    },
  });

  const categories = await prisma.category.createMany({
    data: [
      {
        name: "Starters",
        color: "#FFA500",
        image: "https://cdn.example.com/starters.jpg",
        order: 1,
        restaurantId: restaurant.id,
      },
      {
        name: "Main Courses",
        color: "#4CAF50",
        image: "https://cdn.example.com/mains.jpg",
        order: 2,
        restaurantId: restaurant.id,
      },
      {
        name: "Desserts",
        color: "#E91E63",
        image: "https://cdn.example.com/desserts.jpg",
        order: 3,
        restaurantId: restaurant.id,
      },
    ],
  });

  const [starters, mains, desserts] = await prisma.category.findMany({
    where: { restaurantId: restaurant.id },
  });

  const subcategories = await prisma.subcategory.createMany({
    data: [
      {
        name: "Vegetarian",
        order: 1,
        restaurantId: restaurant.id,
        categoryId: starters.id,
      },
      {
        name: "Non-Vegetarian",
        order: 2,
        restaurantId: restaurant.id,
        categoryId: starters.id,
      },
      {
        name: "Pasta",
        order: 1,
        restaurantId: restaurant.id,
        categoryId: mains.id,
      },
      {
        name: "Cakes",
        order: 1,
        restaurantId: restaurant.id,
        categoryId: desserts.id,
      },
    ],
  });

  const [veg, nonVeg, pasta, cakes] = await prisma.subcategory.findMany({
    where: { restaurantId: restaurant.id },
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Bruschetta",
        value: 18.5,
        description: "Tomato & basil toast",
        image: "https://cdn.example.com/bruschetta.jpg",
        order: 1,
        active: true,
        restaurantId: restaurant.id,
        categoryId: starters.id,
        subcategoryId: veg.id,
      },
      {
        name: "Wings",
        value: 24.0,
        description: "Spicy wings",
        image: "https://cdn.example.com/wings.jpg",
        order: 2,
        active: true,
        restaurantId: restaurant.id,
        categoryId: starters.id,
        subcategoryId: nonVeg.id,
      },
      {
        name: "Carbonara",
        value: 39.9,
        description: "Creamy pasta",
        image: "https://cdn.example.com/carbonara.jpg",
        order: 1,
        active: true,
        restaurantId: restaurant.id,
        categoryId: mains.id,
        subcategoryId: pasta.id,
      },
      {
        name: "Pesto Linguine",
        value: 36.5,
        description: "Basil pesto pasta",
        image: "https://cdn.example.com/pesto.jpg",
        order: 2,
        active: true,
        restaurantId: restaurant.id,
        categoryId: mains.id,
        subcategoryId: pasta.id,
      },
      {
        name: "Lava Cake",
        value: 22.0,
        description: "Molten chocolate cake",
        image: "https://cdn.example.com/lava.jpg",
        order: 1,
        active: true,
        restaurantId: restaurant.id,
        categoryId: desserts.id,
        subcategoryId: cakes.id,
      },
      {
        name: "Cheesecake",
        value: 20.0,
        description: "Classic vanilla",
        image: "https://cdn.example.com/cheesecake.jpg",
        order: 2,
        active: true,
        restaurantId: restaurant.id,
        categoryId: desserts.id,
        subcategoryId: cakes.id,
      },
      {
        name: "Tiramisu",
        value: 23.5,
        description: "Coffee Italian dessert",
        image: "https://cdn.example.com/tiramisu.jpg",
        order: 3,
        active: true,
        restaurantId: restaurant.id,
        categoryId: desserts.id,
        subcategoryId: cakes.id,
      },
      {
        name: "Red Velvet",
        value: 21.0,
        description: "Red velvet with cream",
        image: "https://cdn.example.com/redvelvet.jpg",
        order: 4,
        active: true,
        restaurantId: restaurant.id,
        categoryId: desserts.id,
        subcategoryId: cakes.id,
      },
    ],
  });

  console.log("✅ Seed complete!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
