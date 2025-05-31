import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateBookController } from './controllers/CreateBookController'
import { ListBooksController } from "./controllers/ListBooksController";
import { DeleteBookController } from "./controllers/DeleteBookController";
import { UpdateBookController } from "./controllers/UpdateBookController";

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

    fastify.delete("/book", async(request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteBookController().handle(request, reply)
    })

    fastify.patch("/book", async(request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateBookController().handle(request, reply)
    })
}