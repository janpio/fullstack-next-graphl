import { UserSchema } from "@/server/schema/user.shema";
import {
  Arg,
  Field,
  ID,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
  registerEnumType,
} from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => String)
  getUser() {
    return "Hello Typescript";
  }

  @Query(() => UserSchema)
  getUserInformation() {
    return { name: "Nabin", age: 20, email: "nabin@gmail.com" };
  }
}
