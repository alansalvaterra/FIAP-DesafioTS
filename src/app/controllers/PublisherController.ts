import { Request, Response } from 'express';
import { PublisherService } from '../services/PublisherService';

export class PublisherController {
    static async create(req: Request, res: Response): Promise<void> {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: 'O nome da editora é obrigatório' });
            return;
        }

        try {
            const newPublisher = await PublisherService.createPublisher(name);
            res.status(201).json(newPublisher);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao adicionar editora', error });
        }
    }

    static async readAll(req: Request, res: Response): Promise<void> {
        try {
            const publishers = await PublisherService.readAll();
            res.json(publishers);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar editoras', error });
        }    
    }    

    static async readById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const publisher = await PublisherService.readById(parseInt(id));
            if (publisher) {
                res.json(publisher);
            } else {
                res.status(404).json({ message: 'Editora não encontrada' });
            }    
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar editora', error });
        }    
    }    

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { name } = req.body;

        try {
            const updatedPublisher = await PublisherService.updatePublisher(parseInt(id), name);
            if (updatedPublisher) {
                res.json(updatedPublisher);
            } else {
                res.status(404).json({ message: 'Editora não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar editora', error });
        }
    }

    static async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            await PublisherService.deletePublisher(parseInt(id));
            res.json({ message: 'Editora excluída com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao excluir editora', error });
        }
    }
}
