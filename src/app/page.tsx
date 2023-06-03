import Image from "next/image";

// import { getClient } from "@/lib/client";
// import { GET_POST } from "@/graphql/post/user";
import Post from "@/components/post";
import ImageUpload from "@/components/ImageUpload";
import Route from "@/components/route";

export default async function Home() {
  // const response = await getClient().query({ query: GET_POST });

  // * for running in production mode apollo client is not working well

  // const url = "http://127.0.0.1:3000/api/graphql";
  // const response = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },

  //   body: JSON.stringify({
  //     query: `
  //       query GetPost {
  //         getPosts {
  //           id
  //           createdAt
  //           updatedAt
  //           title
  //           content
  //           isPublished
  //         }
  //       }
  //       `,
  //   }),
  // });
  // const data = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center my-3 text-xl">
        No clue no idea what is this ? Its sucks right working on it to make
        better
      </h1>
      <Route />

      <h1>Apollo data - working on ....</h1>
      {/* {JSON.stringify(data)} */}

      {/* <Post /> */}

      {/* <ImageUpload /> */}
      <br />
    </main>
  );
}
