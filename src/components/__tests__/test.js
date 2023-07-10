import React from "react";
import { render } from "@testing-library/react";
import Loading from "../../components/Loading";
import Navbar from "../Navbar";
import Footer from "../Footer";

test("renders Loading component", () => {
  render(<Loading />);
});

test("renders NavBar component", () => {
  render(<Navbar />);
});

test("renders Footer component", () => {
  render(<Footer />);
});
