const knex = require('knex');
const configuration = require('../knexfile');

const connection = knex(configuration.development);

class Perfil {
  async create(perfil) {
    return await connection('Perfil').insert(perfil).returning('*');
  }

  async findById(id) {
    return await connection('Perfil').where('id', id).first();
  }

  async update(id, perfil) {
    return await connection('Perfil').where('id', id).update(perfil);
  }

  async delete(id) {
    return await connection('Perfil').where('id', id).delete();
  }
}

module.exports = Perfil;
