import express from 'express';
import router from './app/Routes/routes'
import { AppDataSource } from './database/data-source';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(router);

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

AppDataSource.initialize().then(async () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
}).catch(error => {
    console.error('Erro ao conectar ao banco de dados:', error);
});