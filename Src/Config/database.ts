import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Editora } from '../Model/editora';
import { Autor } from '../Model/autor';


const AppDataSource = new DataSource({
  type: 'oracle',
  host: '192.168.0.50',
  port: 1521,
  username: 'system',
  password: 'pulsati2023',
  database: 'xe',
  entities: [Editora, Autor],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  synchronize: true,
});

export default AppDataSource;