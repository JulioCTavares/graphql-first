import 'reflect-metadata';

import {ApolloServer} from 'apollo-server';

import './database';
import './database/schemas/Tweet';

import schemaFn from './schemas';

const app = async () => {
  const schema = await schemaFn();

  const server = new ApolloServer({ schema });

  server.listen({ port: 3333 }, () => console.log('Server is running on port 3333'))
}

app();