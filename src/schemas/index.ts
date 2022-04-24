import {  buildSchema } from 'type-graphql';
import TweetController from '../controller/TweetCOntroller';
import Tweet from './Tweet';

const schema = async () => await buildSchema({
  resolvers: [Tweet, TweetController],
})

export default schema;