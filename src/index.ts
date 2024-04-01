import { AppDataSource } from './data-source';
import './server';

AppDataSource.initialize().then(async () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
}).catch(error => {
    console.error('Erro ao conectar ao banco de dados:', error);
});
