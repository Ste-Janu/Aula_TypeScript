import express from 'express';
import AppDataSource from './Config/database';
import { AeroportoController } from './Controller/aeroportoController';

AppDataSource.initialize().then(() => {
  console.log('Conectado com sucesso ao banco');
  const app = express();
  app.use(express.json());
  
  app.post('/aeroporto', new AeroportoController().create);
  app.get('/aeroporto', new AeroportoController().getAll);
  app.get('/aeroporto/:id', new AeroportoController().get);
  app.put('/aeroporto/:id', new AeroportoController().update);
  app.delete('/aeroporto/:id', new AeroportoController().delete);

  app.listen(8000);
}).catch(e => console.log('Erro ao conectar ao banco: ', e))