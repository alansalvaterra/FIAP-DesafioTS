import bookRoutes from './books';
import { Router } from 'express';

const router = Router();

// Rota de boas-vindas
router.get('/', (req, res) => {
    res.send(`Bem-vindo à API de gerenciamento de livros do Desafio Pos Tech - TypeScript!<br><br>
    A API oferece as seguintes rotas:<br><br>

    - GET /books: Retorna todos os livros cadastrados.<br>
    - GET /books/:id: Retorna os detalhes de um livro específico pelo seu ID.<br>
    - POST /books: Adiciona um novo livro.<br>
    - PUT /books/:id: Atualiza os detalhes de um livro existente.<br>
    - DELETE /books/:id: Exclui um livro existente.<br>
    `);
});

// Rotas relacionadas aos livros (./Routes/books.ts)
router.use('/books', bookRoutes);

export default router;