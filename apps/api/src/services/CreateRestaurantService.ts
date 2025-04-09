import { CreateRestaurantDto } from "../dtos/restaurant.dto";
import { PrismaClient } from "../generated/prisma";

class CreateRestaurantService {
  async execute(createRestaurantDto: CreateRestaurantDto) {
    const prismaClient = new PrismaClient();
    const restaurant = await prismaClient.restaurant.create({
      data: createRestaurantDto,
    });
    return { ok: true, value: restaurant };
  }
}

export { CreateRestaurantService };
