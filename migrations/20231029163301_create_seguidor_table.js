/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Seguidor', (table) => {
    table.increments('id').primary();
    table.integer('id_usuario').unsigned().references('id').inTable('Usuario');
    table.integer('id_seguidor').unsigned().references('id').inTable('Usuario');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Seguidor');
};
