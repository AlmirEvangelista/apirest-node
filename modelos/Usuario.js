const knex = require('knex');

console.log('Arquivo Usuario.js carregado');

// const configuration = require('../knexfile');

// const connection = knex(configuration.development);

class Usuario {
  async create(usuario) {
    console.log('Função create foi chamada'); // Adicione este log no início da função
    try {
      const resultado = await connection('Usuario').insert(usuario).returning('*');
      console.log('Usuário criado com sucesso:', resultado); // Adicione este log após a inserção
      return resultado;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  }
  

  async findById(id) {
    return await connection('Usuario').where('id', id).first();
  }

  async update(id, usuario) {
    return await connection('Usuario').where('id', id).update(usuario);
  }

  async delete(id) {
    return await connection('Usuario').where('id', id).delete();
  }
}

module.exports = Usuario;
