import { Request, Response, NextFunction } from 'express';
import knex from '../database/connection';
interface Vehicles {
  id: number;
  vehicle: string;
  brand: string;
}

class VehiclesControllers {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const vehicles = await knex('vehicle').select('*');
      const vehicle_name = request.query.vehicle_name as string;
      const results = vehicle_name
        ? vehicles.filter((vehicle: Vehicles) =>
            vehicle.vehicle.toLowerCase().includes(vehicle_name.toLowerCase()),
          )
        : vehicles;
      const serializeVehicles = results;

      return response.status(200).json(serializeVehicles);
    } catch (error) {
      next(error);
      return response.status(400).json(error);
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const vehicles = await knex('vehicle').select('*');
      const { id } = request.params;
      const results = vehicles.filter(
        (vehicle: Vehicles) => vehicle.id === Number(id),
      );

      if (results.length === 0) {
        return response.status(400).json({ error: 'not found' });
      }

      return response.status(200).json(results);
    } catch (error) {
      next(error);
      return response.status(400).json(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const { vehicle, brand, year, description, sold } = request.body;
      const { id } = request.params;
      await knex('vehicle')
        .update({
          vehicle,
          brand,
          year,
          description,
          sold,
          updated: new Date(),
        })
        .where({ id });

      return response.status(200).json({ success: true });
    } catch (error) {
      next(error);
      return response.status(400).json(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { vehicle, brand, year, description, sold } = request.body;

      await knex('vehicle').insert({
        vehicle,
        brand,
        year,
        description,
        sold,
        created: new Date(),
        updated: new Date(),
      });
      return response.status(200).json({ success: true });
    } catch (error) {
      next(error);
      return response.status(400).json(error);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;

      await knex('vehicle').where({ id }).del();

      return response.status(200).json({ success: true });
    } catch (error) {
      next(error);
      return response.status(400).json(error);
    }
  }
}

export default VehiclesControllers;
