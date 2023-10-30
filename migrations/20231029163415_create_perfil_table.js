/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Perfil', (table) => {
    table.increments('id').primary();
    table.integer('id_usuario').unsigned().references('id').inTable('Usuario');
    table.text('descricao');
    table.string('foto_perfil');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Perfil');
};
