import knex from 'knex';

export async function up(knex: knex) {
  return knex.schema.createTable('vehicle', table => {
    table.increments('id').primary();
    table.string('vehicle').notNullable();
    table.string('brand').notNullable();
    table.integer('year').notNullable();
    table.text('description').notNullable();
    table.boolean('sold').notNullable();
    table.dateTime('created').notNullable();
    table.dateTime('updated').notNullable();
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable('vehicle');
}
