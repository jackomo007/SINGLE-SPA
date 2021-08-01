import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
  });
});

describe("Navbar render the links", () => {
  it("a link should be in the document", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/Prateleira Infinita/i)).toBeInTheDocument();
  });
});
