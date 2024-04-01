import express from 'express';
import { AppDataSource } from './data-source';
import bookRoutes from './Routes/books'

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota de boas-vindas
app.get('/', (req, res) => {
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
app.use('/books', bookRoutes);

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
