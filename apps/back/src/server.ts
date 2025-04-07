import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

const start = async () => {
    try {
        app.get("/", async (request, reply) => {
            return { hello: "world" };
        });

        await app.listen({ port: 3000 });
    }
    catch (err) {
        process.exit(1);
    }
}

start();