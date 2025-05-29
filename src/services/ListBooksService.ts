import prismaClient from "../prisma";


class ListBooksService {
    async execute(){
        const books = await prismaClient.book.findMany()
        
        return books;
    }
}
export { ListBooksService };
