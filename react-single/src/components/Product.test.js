import React from "react";
import { render } from "@testing-library/react";
import Product from "./Product";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme/main";

describe("Product", () => {
  test("renders Product component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Product />
      </ThemeProvider>
    );
  });
});

describe("Product render info", () => {
  it("a category should be in the document", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Product />
      </ThemeProvider>
    );
    expect(getByText(/Categoria:/i)).toBeInTheDocument();
  });

  it("a barcode should be in the document", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Product />
      </ThemeProvider>
    );
    expect(getByText(/Cód.Barras:/i)).toBeInTheDocument();
  });
});
