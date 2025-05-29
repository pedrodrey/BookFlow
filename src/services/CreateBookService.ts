import prismaClient from "../prisma";

interface CreateBookProps {
  title: string;
  author: string;
  isbn: string;
  publishedAt: Date;
  publisherName: string;
}

class CreateBookService {
  async execute({ title, author, isbn, publishedAt, publisherName }: CreateBookProps) {
    if (!title || !author || !isbn || !publishedAt || !publisherName) {
      throw new Error("Preencha todos os campos");
    }

    // Verifica se a editora já existe
    let publisher = await prismaClient.publisher.findFirst({
      where: {
        publisherName: publisherName,
      },
    });

    // Se não existir, cria
    if (!publisher) {
      publisher = await prismaClient.publisher.create({
        data: {
            publisherName: publisherName,
        },
      });
    }

    // Cria o livro associado à editora
    const book = await prismaClient.book.create({
      data: {
        title,
        author,
        isbn,
        publishedAt,
        publisherId: publisher.id,
      },
    });

    return book;
  }
}

export { CreateBookService };
