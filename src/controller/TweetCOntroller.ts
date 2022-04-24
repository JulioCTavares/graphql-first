import {Arg, Mutation, Query, Resolver} from 'type-graphql';
import Tweet from '../schemas/Tweet';
import MongoTweet from '../database/schemas/Tweet';

@Resolver(Tweet)
export default class TweetController {
  
  @Query(returns => [Tweet], {name: 'tweets'})
  async find() {
    const tweets = await MongoTweet.find();
    return tweets
  }

  @Query(returns => Tweet, {name: 'findTweet'})
  async findById(@Arg('id') id: string) {
    const tweet = await MongoTweet.findById(id);

    return tweet;
  }

  @Mutation(returns => [Tweet], {name: 'createTweet'})
  async create(
    @Arg('author') author: string,
    @Arg('description') description: string,
  ) {
    const tweet = await MongoTweet.create({author, description});

    return tweet;
  }

  @Mutation(returns => Tweet, {name: 'upvoteTweet'})
  async upvoteTweet(
    @Arg('id') id: string,
  ) {
    const tweet = await MongoTweet.findById(id);

    if(!tweet) {
      throw new Error('Tweet does not exist')
    }

    tweet.set({likes: tweet?.likes + 1})

    await tweet.save();

    return tweet;
  }

  @Mutation(returns => Tweet, {name: 'downvoteTweet'})
  async downvoteTweet(
    @Arg('id') id: string,
  ) {
    const tweet = await MongoTweet.findById(id);

    if(!tweet) {
      throw new Error('Tweet does not exist')
    }

    tweet.set({likes: tweet?.likes - 1})

    await tweet.save();

    return tweet;
  }

  @Mutation(returns => Tweet, {name: 'updateTweet'})
  async update(
    @Arg('id') id: string,
    @Arg('author') author?: string,
    @Arg('description') description?: string,
  ) {
    const tweet = await MongoTweet.findByIdAndUpdate(id, {author, description}, {new: true})

    return tweet
  }
}