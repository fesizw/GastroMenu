import { RestaurantResponseDto } from "../dtos/restaurant.dto";
import { PrismaClient } from "../generated/prisma";

class ListRestaurantService {
  async execute() {
    const prismaClient = new PrismaClient();
    const restaurants: RestaurantResponseDto[] =
      await prismaClient.restaurant.findMany({
        include: {
          products: true,
          categories: true,
          subcategories: true,
        },
      });
    return { ok: true, value: restaurants };
  }
}

export { ListRestaurantService };
