import { ObjectType, ID, Field, Float } from "type-graphql";

@ObjectType()
export class UserSchema {
  @Field(() => String, { nullable: true })
  name: string | undefined;

  @Field(() => Float, { nullable: true })
  age: number | undefined;

  @Field(() => String, { nullable: true })
  email: string | undefined;
}
