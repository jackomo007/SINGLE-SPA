import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Button as SimpleButton } from "@material-ui/core";

const defaultTheme = createMuiTheme({
  palette: { primary: { main: "#0054A6" }, secondary: { main: "#F2F2F2" } },
});

function Button(props) {
  return (
    <div>
      <MuiThemeProvider theme={defaultTheme}>
        <SimpleButton variant={props.variant} color={props.color}>{props.text}</SimpleButton>
      </MuiThemeProvider>
    </div>
  );
}

export default Button;
