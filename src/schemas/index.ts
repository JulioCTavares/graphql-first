import {  buildSchema } from 'type-graphql';
import Tweet from './Tweet';

const schema = async () => await buildSchema({
  resolvers: [Tweet],
})

export default schema;