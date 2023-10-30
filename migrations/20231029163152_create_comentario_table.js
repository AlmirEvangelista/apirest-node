/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Comentario', (table) => {
    table.increments('id').primary();
    table.text('texto').notNullable();
    table.timestamp('data_comentario').defaultTo(knex.fn.now());
    table.integer('id_usuario').unsigned().references('id').inTable('Usuario');
    table.integer('id_postagem').unsigned().references('id').inTable('Postagem');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Comentario');
};
