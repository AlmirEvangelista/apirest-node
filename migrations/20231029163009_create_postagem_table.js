/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Postagem', (table) => {
    table.increments('id').primary();
    table.string('titulo').notNullable();
    table.text('conteudo').notNullable();
    table.timestamp('data_criacao').defaultTo(knex.fn.now());
    table.integer('id_usuario').unsigned().references('id').inTable('Usuario');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Postagem');
};
