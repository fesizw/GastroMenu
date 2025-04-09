import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateRestaurantController } from "./controllers/CreateRestaurantController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world!" };
  });
  fastify.post(
    "/restaurant/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const createRestaurantController = new CreateRestaurantController();
      return createRestaurantController.handle(request, reply);
    }
  );
}
