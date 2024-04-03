import { FindOneOptions } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Book } from "../entities/Book";
import IBook from "../interfaces/IBook";

export const bookRepository = AppDataSource.getRepository(Book);

export const createBook = (title: string, author: string, year: number): Promise<IBook> => {
    const newBook = new Book();
    newBook.title = title;
    newBook.author = author;
    newBook.year = year;

    return bookRepository.save(newBook);
}

export const readAll = (): Promise<IBook[]> => {
    return bookRepository.find();
}

export const readById = (id: number): Promise<IBook> => {
    const options: FindOneOptions<Book> = { where: { id } };
    return bookRepository.findOne(options);
}

export const updateBook = async (id: number, title?: string, author?: string, year?: number): Promise<Book | undefined> => {
    const book = await readById(id);
    if (!book) {
        return undefined;
    }

    if (title !== undefined) {
        book.title = title;
    }
    if (author !== undefined) {
        book.author = author;
    }
    if (year !== undefined) {
        book.year = year;
    }

    return bookRepository.save(book); 
}

export const deleteBook = async (id: number): Promise<void> => {
    await bookRepository.delete(id);
}



