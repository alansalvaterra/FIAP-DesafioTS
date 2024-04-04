import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Publisher } from "./Publisher"

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    year: number

    @ManyToOne(() => Publisher, publisher => publisher.books)
    publisher: Publisher; 
}