const knex = require('knex');
const configuration = require('../knexfile');

const connection = knex(configuration.development);

class Hashtag {
  async create(hashtag) {
    return await connection('Hashtag').insert(hashtag).returning('*');
  }

  async findById(id) {
    return await connection('Hashtag').where('id', id).first();
  }

  async update(id, hashtag) {
    return await connection('Hashtag').where('id', id).update(hashtag);
  }

  async delete(id) {
    return await connection('Hashtag').where('id', id).delete();
  }
}

module.exports = Hashtag;
