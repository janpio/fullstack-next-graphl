import Image from "next/image";
import { headers } from "next/headers";
// import { getClient } from "@/lib/client";
// import { GET_POST } from "@/graphql/post/user";
import Post from "@/components/post";
import ImageUpload from "@/components/ImageUpload";
import Route from "@/components/route";

// const url = "https://fullstack-next-graphl.vercel.app/api/graphql";
const url = "http://localhost:3000/api/graphql"; // Replace with your target URL

async function fetchData(host: string) {
  const res = await fetch(`http://${host}/api/graphql`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify({
      query: `
        query GetPost {
          getPosts {
            id
            createdAt
            updatedAt
            title
            content
            isPublished
          }
        }
        `,
    }),
  });
  return await res.json();
}
export default async function Home() {
  // const response = await getClient().query({ query: GET_POST });

  const url = "http://localhost:3000/api/graphql";
  // * for running in production mode apollo client is not working well
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

  const host = headers().get("host");
  const response1 = await fetchData(host as string);
  // console.log("response is", host);
  console.log("response is", response1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center my-3 text-xl">
        No clue no idea what is this ? Its sucks right working on it to make
        better
      </h1>
      <Route />

      <h1>Apollo data - working on ....</h1>
      {JSON.stringify(response1)}

      {/* <Post /> */}

      {/* <ImageUpload /> */}
      <br />
    </main>
  );
}
