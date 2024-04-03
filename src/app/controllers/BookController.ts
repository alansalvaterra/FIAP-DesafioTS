import { Request, Response } from 'express';
import { BookService } from '../services/BookService';

export class BookController {
    static async create(req: Request, res: Response): Promise<void> {
        const { title, author, year } = req.body;
        if (!title || !author || !year) {
            res.status(400).json({ message: 'Todos os campos (título, autor e ano) são obrigatórios' });
            return;
        }

        try {
            const newBook = await BookService.createBook(title, author, year);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao adicionar livro', error });
        }
    }

    static async readAll(req: Request, res: Response): Promise<void> {
        try {
            const books = await BookService.readAll();
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar livros', error });
        }    
    }    

    static async readById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const book = await BookService.readById(parseInt(id));
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: 'Livro não encontrado' });
            }    
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar livro', error });
        }    
    }    

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { title, author, year } = req.body;

        try {
            const updatedBook = await BookService.updateBook(parseInt(id), title, author, year);
            if (updatedBook) {
                res.json(updatedBook);
            } else {
                res.status(404).json({ message: 'Livro não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar livro', error });
        }
    }

    static async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            await BookService.deleteBook(parseInt(id));
            res.json({ message: 'Livro excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao excluir livro', error });
        }
    }
}
