const knex = require('knex');
const configuration = require('../knexfile');

const connection = knex(configuration.development);

class Curtida {
  async create(curtida) {
    return await connection('Curtida').insert(curtida).returning('*');
  }

  async findById(id) {
    return await connection('Curtida').where('id', id).first();
  }

  async update(id, curtida) {
    return await connection('Curtida').where('id', id).update(curtida);
  }

  async delete(id) {
    return await connection('Curtida').where('id', id).delete();
  }
}

module.exports = Curtida;
