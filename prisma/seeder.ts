import { prisma } from "../src/lib/db";

const createPost = async () => {
  const data = await prisma.post.createMany({
    data: [
      {
        title: "hello world",
        content: "this is my first post",
        isPublished: true,
      },

      {
        title: "What is typescript",
        content: "typescript is a superset of javascript",
        isPublished: true,
      },
      {
        title: "What is prsma",
        content: "prisma is a database toolkit",
        isPublished: true,
      },

      {
        title: "What is graphql",
        content: "graphql is a query language for api",
        isPublished: false,
      },
      {
        title: "What is typegraphql",
        content: "typegraphql is a library for graphql",
        isPublished: false,
      },
    ],
  });

  console.log("created data ", data);
  return data;
};

createPost()
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
