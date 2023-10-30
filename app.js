const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importe os modelos das entidades
// const Usuario = require('./modelos/Usuario');
// const Postagem = require('./modelos/Postagem');
// const Comentario = require('./modelos/Comentario');
// const Curtida = require('./modelos/Curtida');
// const Seguidor = require('./modelos/Seguidor');
// const Hashtag = require('./modelos/Hashtag');
// const Perfil = require('./modelos/Perfil');


const knex = require('knex');
// const configuration = require('./knexfile');
const knexfile = require('./knexfile');

// const connection = knex(configuration.development);

const bd = knex(knexfile)

function sendSuccessResponse(res, data) {
  return res.json({ status: "success", data });
}

function sendErrorResponse(res, statusCode, message) {
  return res.status(statusCode).json({ status: "error", message });
}

function validateRequiredFields(fields) {
  return fields.every((field) => field !== undefined && field !== null);
}


app.post('/usuarios',  async (req, res) => {
  const { nome, email, senha } = req.body;

    if (!validateRequiredFields([nome, email, senha])) {
        return sendErrorResponse(res, 400, "Campos obrigatórios não preenchidos.");
    }

    try {
        await bd('usuario').insert({ nome, email, senha });
        sendSuccessResponse(res, "Usuário criado com sucesso!");
    } catch (error) {
        console.error(error);
        sendErrorResponse(res, 500, "Falha ao criar usuário.");
    }
});



app.get('/usuarios', async (req, res) => {  
  try {
    const Usuario = await bd('usuario').select();
    console.log('Dados recuperados:', Usuario); 
    // Formatando datas ou outras manipulações necessárias
    sendSuccessResponse(res, Usuario);
  } catch (error) {
    console.error(error);
    sendErrorResponse(res, 500, "Falha ao listar usuários.");
}

  // try {
  //   const id = req.params.id;
  //   const usuario = await bd('Usuario').select();
  //   if (usuario) {
  //     res.json(usuario);
  //   } else {
  //     res.status(404).json({ error: 'Usuário não encontrado' });
  //   }
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Erro ao buscar usuário' });
  // }
});

app.get('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await bd('Usuario').where('id', id).first();
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = req.body;
    const result = await Usuario.update(id, usuario);
    if (result) {
      res.json({ message: 'Usuário atualizado com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

app.delete('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Usuario.delete(id);
    if (result) {
      res.json({ message: 'Usuário deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});


// Repita o padrão para as outras entidades e operações CRUD

// Inicie o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
