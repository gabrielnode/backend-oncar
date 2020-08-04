import { Router } from 'express';
import vehicleRouter from './vehicle';

const routes = Router();

routes.use('/vehicle', vehicleRouter);
export default routes;
