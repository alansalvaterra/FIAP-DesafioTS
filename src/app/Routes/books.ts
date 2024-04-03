import express from 'express';
import { BookController } from '../controllers/BookController';

const bookRoutes = express.Router();

bookRoutes.post('/', BookController.create);
bookRoutes.get('/', BookController.readAll);
bookRoutes.get('/:id', BookController.readById);
bookRoutes.put('/:id', BookController.update);
bookRoutes.delete('/:id', BookController.delete);

export default bookRoutes;
