import { FastifyRequest, FastifyReply } from "fastify";
import { CreateRestaurantService } from "../services/CreateRestaurantService";
import { CreateRestaurantDto } from "../dtos/restaurant.dto";

class CreateRestaurantController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const rawBody = request.body;
    const restaurant: CreateRestaurantDto =
      typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
    
    console.info("Received restaurant data:", restaurant);
    const createRestaurantService = new CreateRestaurantService();
    const result = await createRestaurantService.execute(restaurant);
    return reply.status(200).send(result);
  }
}

export { CreateRestaurantController };
