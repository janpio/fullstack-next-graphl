"use client";
import React from "react";
import { useGetPostLazyQuery, useGetPostQuery } from "../../generated/graphql";

export default function Post() {
  const { data } = useGetPostQuery();
  const [getPost, { data: lazyData, called }] = useGetPostLazyQuery();
  console.log("lazy data is", lazyData?.getPosts);
  console.log("post is", data);
  return <div></div>;
}
