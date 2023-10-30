const knex = require('knex');
const configuration = require('../knexfile');

const connection = knex(configuration.development);

class Seguidor {
  async create(seguidor) {
    return await connection('Seguidor').insert(seguidor).returning('*');
  }

  async findById(id) {
    return await connection('Seguidor').where('id', id).first();
  }

  async update(id, seguidor) {
    return await connection('Seguidor').where('id', id).update(seguidor);
  }

  async delete(id) {
    return await connection('Seguidor').where('id', id).delete();
  }
}

module.exports = Seguidor;
