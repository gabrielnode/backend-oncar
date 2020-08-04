import Knex from 'knex';

export async function seed(Knex: Knex) {
  await Knex('vehicle').insert([
    {
      vehicle: 'gol',
      brand: 'volkswagen',
      year: 2020,
      description: 'carro do ano',
      sold: false,
      created: new Date(),
      updated: new Date(),
    },
    {
      vehicle: 'golf',
      brand: 'volkswagen',
      year: 2014,
      description: 'carro usado',
      sold: false,
      created: new Date(),
      updated: new Date(),
    },
  ]);
}
