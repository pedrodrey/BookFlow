import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBookService } from "../services/CreateBookService";
import { ListBooksService } from "../services/ListBooksService";

class ListBooksController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listBooksService = new ListBooksService();

        const books = await listBooksService.execute();

        reply.send(books)
    }
}

export {ListBooksController}