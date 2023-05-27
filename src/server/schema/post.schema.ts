import { ObjectType, ID, Field, Float } from "type-graphql";
import { BaseSchema } from "./base.schma";

@ObjectType()
export class PostSchema extends BaseSchema {
  @Field(() => String, { nullable: true })
  title: string | undefined;

  @Field(() => String, { nullable: true })
  content: string | undefined;

  @Field(() => Boolean, { nullable: true })
  isPublished: boolean | undefined;
}
