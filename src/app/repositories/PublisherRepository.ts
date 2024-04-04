import { FindOneOptions } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Publisher } from "../entities/Publisher";
import IPublisher from "../interfaces/IPublisher";

export const publisherRepository = AppDataSource.getRepository(Publisher);

export const createPublisher = (name: string): Promise<IPublisher> => {
    const newPublisher = new Publisher();
    newPublisher.name = name;

    return publisherRepository.save(newPublisher);
}

export const readAllPublishers = (): Promise<IPublisher[]> => {
    return publisherRepository.find();
}

export const readPublisherById = (id: number): Promise<IPublisher> => {
    const options: FindOneOptions<Publisher> = { where: { id } };
    return publisherRepository.findOne(options);
}

export const updatePublisher = async (id: number, name?: string): Promise<IPublisher | undefined> => {
    const publisher = await readPublisherById(id);
    if (!publisher) {
        return undefined;
    }

    if (name !== undefined) {
        publisher.name = name;
    }

    return publisherRepository.save(publisher);
}

export const deletePublisher = async (id: number): Promise<void> => {
    await publisherRepository.delete(id);
}
