import React from "react";
import { render } from "@testing-library/react";
import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  test("renders ButtonGroup component", () => {
    render(<ButtonGroup />);
  });
});

describe("ButtonGroup render the links", () => {
  it("a button with the symbol + should be in the document", () => {
    const { getByText } = render(<ButtonGroup />);
    const button = getByText("+");
    expect(button).toBeTruthy()
  });
});
