import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBookService } from "../services/CreateBookService";

class CreateBookController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      title,
      author,
      isbn,
      publishedAt,
      publisherName,
    } = request.body as {
      title: string;
      author: string;
      isbn: string;
      publishedAt: Date;
      publisherName: string;
    };

    const bookService = new CreateBookService();
    const book = await bookService.execute({
      title,
      author,
      isbn,
      publishedAt,
      publisherName,
    });

    reply.send(book);
  }
}

export { CreateBookController };
