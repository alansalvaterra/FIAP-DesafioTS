import express from 'express';
import { PublisherController } from '../controllers/PublisherController';

const publisherRoutes = express.Router();

publisherRoutes.post('/', PublisherController.create);
publisherRoutes.get('/', PublisherController.readAll);
publisherRoutes.get('/:id', PublisherController.readById);
publisherRoutes.put('/:id', PublisherController.update);
publisherRoutes.delete('/:id', PublisherController.delete);

export default publisherRoutes;