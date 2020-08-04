import { Router, request, response } from 'express';
import knex from '../database/connection';
import VehiclesControllers from '../controllers/VehiclesControllers';

const routes = Router();
const vehiclesController = new VehiclesControllers();
routes.get('/', vehiclesController.index);
routes.get('/:id', vehiclesController.show);
routes.post('/', vehiclesController.create);
routes.put('/:id', vehiclesController.update);
routes.delete('/:id', vehiclesController.delete);

export default routes;
