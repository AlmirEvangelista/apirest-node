const knex = require('knex');
const configuration = require('../knexfile');

const connection = knex(configuration.development);

class Comentario {
  async create(comentario) {
    return await connection('Comentario').insert(comentario).returning('*');
  }

  async findById(id) {
    return await connection('Comentario').where('id', id).first();
  }

  async update(id, comentario) {
    return await connection('Comentario').where('id', id).update(comentario);
  }

  async delete(id) {
    return await connection('Comentario').where('id', id).delete();
  }
}

module.exports = Comentario;
