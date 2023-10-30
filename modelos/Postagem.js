const knex = require('knex');
const configuration = require('../knexfile');
const connection = knex(configuration.development);

class Postagem {
  async create(postagem) {
    return await connection('Postagem').insert(postagem).returning('*');
  }

  async findById(id) {
    return await connection('Postagem').where('id', id).first();
  }

  async update(id, postagem) {
    return await connection('Postagem').where('id', id).update(postagem);
  }

  async delete(id) {
    return await connection('Postagem').where('id', id).delete();
  }

  async findByUsuarioId(usuarioId) {
    return await connection('Postagem').where('usuario_id', usuarioId);
  }
}

module.exports = Postagem;
