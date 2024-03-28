import { AppDataSource } from './data-source';
import { BookService } from './BookService';

AppDataSource.initialize().then(async () => { //Inicializa conexão com o banco de dados
 
    const books = await BookService.findAll(AppDataSource.manager); //Lista todos os livros

    //CREATE BOOK
    console.log('Criando novo livro...');
    const book = await BookService.createBook(
        AppDataSource.manager, 
        'Livro 20 - Testando',   //TITLE
        'Alan Salvaterra',      //AUTHOR
        3000                    //YEAR
    );
    console.log(`Novo livro criado com o Id de número ${ book.id }`);
   
    //FIND ALL
    console.log('Carregando todos os livros...');
    console.log(books);
 
    //UPDATE
    const bookToUpdate = books[0];
    await BookService.updateBook(
        AppDataSource.manager, 
        bookToUpdate.id, //ID
        'Primeiro Livro', //TITLE
        'Alan', //AUTHOR
        100 //YEAR
        );
        const updatedBook = await BookService.findById(AppDataSource.manager, bookToUpdate.id);
        console.log('Livro atualizado: ', updatedBook);

    //DELETE
    const bookToDelete = books[1];
    await BookService.deleteBook(
        AppDataSource.manager, 
        bookToDelete.id);
    console.log(`O livro com o Id ${ bookToDelete.id } foi deletado`);
});
