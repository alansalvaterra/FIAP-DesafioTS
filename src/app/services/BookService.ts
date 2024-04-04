import { FindOneOptions } from 'typeorm';
import { Book } from '../entities/Book';
import { bookRepository } from '../repositories/BookRepository';
import IBook from '../interfaces/IBook';
import { readAll, readById, createBook, updateBook, deleteBook } from '../repositories/BookRepository';

export class BookService {
    static async readAll(): Promise<IBook[]> {
        return bookRepository.find();
    }

    static async readById(id: number): Promise<IBook> {
        const options: FindOneOptions<Book> = { where: { id } };
        return bookRepository.findOne(options);
    }

    static async createBook(title: string, author: string, year: number, publisherId: number): Promise<IBook> {
        const newBook = bookRepository.create({ title, author, year, publisher: { id: publisherId } });
        return bookRepository.save(newBook);
    }

    static async updateBook(id: number, title?: string, author?: string, year?: number): Promise<IBook> {
        return updateBook(id, title, author, year);
    }

    static async deleteBook(id: number): Promise<void> {
        await deleteBook(id);
    }
}