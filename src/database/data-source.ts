import "reflect-metadata"
import { DataSource } from "typeorm"
import { Book } from "../app/entities/Book"
import { Publisher } from "../app/entities/Publisher"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Book, Publisher],
    migrations: [],
    subscribers: [],
})

