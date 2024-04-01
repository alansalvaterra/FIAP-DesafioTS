import express from 'express';
import { AppDataSource } from './data-source';
import bookRoutes from './Routes/books'

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota de boas-vindas
app.get('/', (req, res) => {
    res.send('Bem-vindo à API de gerenciamento de livros!');
});

// Rotas relacionadas aos livros (./Routes/books.ts)
app.use('/books', bookRoutes);

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
