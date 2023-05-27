import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export abstract class BaseSchema {
  @Field(() => ID)
  id?: string;

  @Field(() => Date)
  createdAt?: Date;

  @Field(() => Date)
  updatedAt?: Date;
}
