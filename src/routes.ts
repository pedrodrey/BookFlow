import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateBookController } from './controllers/CreateBookController'
import { ListBooksController } from "./controllers/ListBooksController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply)=>{
        return{ok: true}
    })

    fastify.post("/book", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBookController().handle(request, reply)
    })

    fastify.get("/books", async(request: FastifyRequest, reply: FastifyReply) => {
    return new ListBooksController().handle(request, reply)
    })
}