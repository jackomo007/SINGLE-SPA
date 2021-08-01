import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ButtonGroup as SimpleButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const defaultTheme = createMuiTheme({
  palette: { primary: { main: "#D7E2ED" }, secondary: {main: "#0054A6"} },
});

const useStyles = makeStyles((theme) => ({
  withoutLeftColor: {
    borderLeftColor: 'transparent',
  },
  withoutRightColor: {
    borderRightColor: 'transparent'
  },
}));

function ButtonGroup() {
  const classes = useStyles();
  return (
    <div>
      <MuiThemeProvider theme={defaultTheme}>
        <SimpleButtonGroup color="secondary">
          <Button className={classes.withoutRightColor}>-</Button>
          <Button className={(classes.withoutLeftColor, classes.withoutRightColor)}>1</Button>
          <Button className={classes.withoutLeftColor}>+</Button>
        </SimpleButtonGroup>
      </MuiThemeProvider>
    </div>
  );
}

export default ButtonGroup;
