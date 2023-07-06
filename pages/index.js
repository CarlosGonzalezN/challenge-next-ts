import React from "react";
import HomePage from "../src/containners/Home";
import Navbar from "../src/components/Navar";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}
