import React from "react";
import HomePage from "../src/containners/Home";
import { GloblaProvider } from "../src/context/GlobalState";
export default function Home() {
  return (
    <GloblaProvider>
      <HomePage />
    </GloblaProvider>
  );
}
