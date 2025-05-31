import { Book } from './../generated/prisma/index.d';
import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteBookService } from "../services/DeleteBookService";


class DeleteBookController{
        async handle(request: FastifyRequest, reply: FastifyReply){
        const{ id } = request.query as { id: string }
        
        const bookService = new DeleteBookService();

        const book = await bookService.execute({ id })

        reply.send(book)
    }
}

export{DeleteBookController}
