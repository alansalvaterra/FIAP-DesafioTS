import { FindOneOptions } from 'typeorm';
import { Publisher } from '../entities/Publisher';
import { publisherRepository } from '../repositories/PublisherRepository';
import IPublisher from '../interfaces/IPublisher';

export class PublisherService {
    static async readAll(): Promise<IPublisher[]> {
        return publisherRepository.find();
    }

    static async readById(id: number): Promise<IPublisher> {
        const options: FindOneOptions<Publisher> = { where: { id } };
        return publisherRepository.findOne(options);
    }

    static async createPublisher(name: string): Promise<IPublisher> {
        const newPublisher = publisherRepository.create({ name });
        return publisherRepository.save(newPublisher);
    }

    static async updatePublisher(id: number, name?: string): Promise<IPublisher> {
        const publisherToUpdate = await publisherRepository.findOne({ where: { id } });
        if (!publisherToUpdate) {
            throw new Error('Editora não encontrada');
        }

        if (name) {
            publisherToUpdate.name = name;
        }

        return publisherRepository.save(publisherToUpdate);
    }

    static async deletePublisher(id: number): Promise<void> {
        const publisherToDelete = await publisherRepository.findOne({ where: { id } });
        if (!publisherToDelete) {
            throw new Error('Editora não encontrada');
        }

        await publisherRepository.remove(publisherToDelete);
    }
}
