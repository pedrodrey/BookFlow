import prismaClient from "../prisma";

interface UpdateBookProps {
    id: string;
    title?: string;
    author?: string;
    isbn?: string;
    publishedAt?: Date;
}

class UpdateBookService {
    async execute({ id, title, author, isbn, publishedAt}: UpdateBookProps) {
        if (!id) {
            throw new Error("ID do livro não informado.");
        }

        const bookExists = await prismaClient.book.findUnique({
            where: { id },
        });

        if (!bookExists) {
            throw new Error("Livro não encontrado.");
        }

        const updatedBook = await prismaClient.book.update({
            where: { id },
            data: {
            title,
            author,
            isbn,
            publishedAt
            },
        });

        return updatedBook;

    }
}

export { UpdateBookService };
