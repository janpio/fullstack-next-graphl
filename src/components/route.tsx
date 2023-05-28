"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
export default function Route() {
  const router = useRouter();
  return <Button onClick={() => router.push("/forms")}>route</Button>;
}
