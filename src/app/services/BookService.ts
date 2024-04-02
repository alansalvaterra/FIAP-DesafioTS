import { EntityManager } from 'typeorm';
import { Book } from '../entities/Book';

export class BookService {
    static async findAll(manager: EntityManager): Promise<Book[]> {
        return manager.find(Book);
    }
    
    static async findById(manager: EntityManager, id: number): Promise<Book | undefined> {
        return manager.findOne(Book, { where: { id } });
    }

    static async createBook(manager: EntityManager, title: string, author: string, year: number): Promise<Book> {
        const book = new Book();
        book.title = title;
        book.author = author;
        book.year = year;
        await manager.save(book);
        return book;
    }

    static async updateBook(manager: EntityManager, id: number, title?: string, author?: string, year?: number): Promise<Book | undefined> {
        const book = await manager.findOne(Book, { where: { id } });
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
        await manager.save(book);
        return book;
    }

    static async deleteBook(manager: EntityManager, id: number): Promise<void> {
        await manager.delete(Book, id);
    }
}
