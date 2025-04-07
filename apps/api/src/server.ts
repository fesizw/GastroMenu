import Fastify from "fastify";
import cors from "@fastify/cors";
import * as dotenv from 'dotenv'


dotenv.config({ path: '.env.local' })

const port = Number(process.env.PORT) || 3000
const app = Fastify({ logger: true });

const start = async () => {
    try {
        app.get("/", async (request, reply) => {
            return { hello: "world!" };
        });

        await app.listen({ port: port });
    }
    catch (err) {
        process.exit(1);
    }
}

start();