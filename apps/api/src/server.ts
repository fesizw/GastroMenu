import Fastify from "fastify";
import cors from "@fastify/cors";
import * as dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config({ path: ".env.local" });

const port = process.env.PORT;
const app = Fastify({ logger: true });

const start = async () => {
  try {
    if (!port) {
      throw new Error("PORT não definida no ambiente");
    }

    await app.register(cors);
    await app.register(routes);
    await app.listen({ port: Number(port), host: "0.0.0.0" });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
