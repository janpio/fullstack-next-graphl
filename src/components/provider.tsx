"use client";
import React from "react";
import { ToastProvider } from "./ui/toast";

export default function Provider() {
  return (
    <div>
      <ToastProvider />
    </div>
  );
}
