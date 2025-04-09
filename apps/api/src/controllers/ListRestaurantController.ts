import { FastifyRequest, FastifyReply } from "fastify";
import { ListRestaurantService } from "../services/ListRestaurantService";
import { RestaurantResponseDto } from "../dtos/restaurant.dto";

class ListRestaurantController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const rawBody = request.body;
    const restaurant: RestaurantResponseDto =
      typeof rawBody === "string" ? JSON.parse(rawBody) : rawBody;

    console.info("Received restaurant data:", restaurant);
    const listRestaurantService = new ListRestaurantService();
    const result = await listRestaurantService.execute();
    return reply.status(200).send(result);
  }
}

export { ListRestaurantController };
