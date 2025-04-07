import Fastify from "fastify";
import cors from "@fastify/cors";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const port = process.env.PORT;
const app = Fastify({ logger: true });

const start = async () => {
    try {
        await app.register(cors);

        app.get("/", async () => {
            return { hello: "world!" };
        });

        if (!port) {
            throw new Error("PORT não definida no ambiente");
        }

        await app.listen({ port: Number(port), host: '0.0.0.0' });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();