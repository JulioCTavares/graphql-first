import { Field, ID, ObjectType } from "type-graphql";
import { ITweet } from "../database/schemas/Tweet";

@ObjectType()
class Tweet implements ITweet {

  @Field(type => ID, { nullable: true })
  _id!: string;

  @Field()
  author!: string;

  @Field()
  description!: string;

  @Field({ nullable: true })
  likes!: number;

  @Field({ nullable: true })
  createdAt!: Date;

  @Field({ nullable: true })
  updatedAt!: Date;
}

export default Tweet;