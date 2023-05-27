import { PostSchema } from "@/schema/post.schema";
import { Arg, Query, Resolver } from "type-graphql";
import { prisma } from "../../lib/db";

@Resolver()
export class PostResolver {
  @Query(() => [PostSchema])
  async getPosts(): Promise<PostSchema[]> {
    // ! will make service later
    const data = await prisma.post.findMany();
    return data;
  }
}
