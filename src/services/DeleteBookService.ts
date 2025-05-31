import { Book } from './../generated/prisma/index.d';
import { PrismaClient } from '@prisma/client';
import prismaClient from "../prisma";

interface DeleteBookProps {
    id: string;
}

class DeleteBookService {
    async execute({ id }: DeleteBookProps){
        
        if(!id){
            throw new Error("Solicitação invalida.");
        }

        const findBook = await prismaClient.book.findFirst({
            where:{
                id: id
            }
        })

        if(!findBook){
            throw new Error("O livro não existe!")
        }

        await prismaClient.book.delete({
            where:{
                id: findBook.id
            }
        })
        return {message: "Deletado com sucesso!"}

    }
}

export { DeleteBookService };
