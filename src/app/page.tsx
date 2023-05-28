import Image from "next/image";

import { getClient } from "@/lib/client";
import { GET_POST } from "@/graphql/post/user";
import Post from "@/components/post";
import ImageUpload from "@/components/ImageUpload";
import Route from "@/components/route";

export default async function Home() {
  const response = await getClient().query({ query: GET_POST });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Apollo data - working on ....</h1>
      {JSON.stringify(response?.data)}

      <Post />

      <ImageUpload />
      <br />
      <Route />
    </main>
  );
}
