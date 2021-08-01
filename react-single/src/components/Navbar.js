import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerMarginButton: {
    marginBottom: 20,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={(classes.root, classes.containerMarginButton)}
      spacing={6}
    >
      <Grid item>Anotar Dados</Grid>
      <Grid item>Cupom</Grid>
      <Grid item>Descontos Parcerias</Grid>
      <Grid item>Injetáveis</Grid>
      <Grid item>Pague e Leve</Grid>
      <Grid item>Prateleira Infinita</Grid>
      <Grid item>PBM</Grid>
      <Grid item>Produtos Similares</Grid>
    </Grid>
  );
}

export default Navbar;
