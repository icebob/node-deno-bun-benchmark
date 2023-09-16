import Fastify from "fastify";
import { nanoid } from "nanoid";
const fastify = Fastify({ logger: false });

fastify.get("/", (request, reply) => {
  reply.header("x-req-id", nanoid(10));
  reply.send("Hello world!");
});

fastify.listen({ port: 3000 });