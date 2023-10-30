/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Curtida', (table) => {
    table.increments('id').primary();
    table.integer('id_usuario').unsigned().references('id').inTable('Usuario');
    table.integer('id_postagem').unsigned().references('id').inTable('Postagem');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Curtida');
};
