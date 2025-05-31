import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateBookService } from "../services/UpdateBookService";



class UpdateBookController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {
            id,
            title,
            author,
            isbn,
            publishedAt,
            } = request.body as {
            id: string;
            title?: string;
            author?: string;
            isbn?: string;
            publishedAt?: Date;
        }
        
        const bookService = new UpdateBookService();
            const book = await bookService.execute({
                id,
                title,
                author,
                isbn,
                publishedAt,
            });

        reply.send(book);
    }
}

export{ UpdateBookController};