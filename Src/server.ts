import express from 'express';
import AppDataSource from './Config/database';
import { AutorController } from './Controller/autorcontroller';
import { EditoraController } from './Controller/editoracontroller';

AppDataSource.initialize().then(() => {
  console.log('Conectado com sucesso ao banco');
  const app = express();
  app.use(express.json());
  
  app.post('/editora', new EditoraController().create);
  app.get('/editora', new EditoraController().getAll);
  app.get('/editora/:id', new EditoraController().get);
  app.put('/editora/:id', new EditoraController().update);
  app.delete('/editora/:id', new EditoraController().delete);

  app.post('/autor', new AutorController().create);
  app.get('/autor', new AutorController().getAll);
  app.get('/autor/:id', new AutorController().get);
  app.put('/autor/:id', new AutorController().update);
  app.delete('/autor/:id', new AutorController().delete);

  app.listen(8000);
}).catch(e => console.log('Erro ao conectar ao banco: ', e))