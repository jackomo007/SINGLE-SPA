import React from "react";
import { Container, Grid, MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/styles";

import Navbar from "./Navbar";
import SimpleBadge from "./Badge";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Roboto, sans-serif'
  },
  container: {
    padding: 33,
    backgroundColor: theme.palette.globalColors.neutrals.white,
  },
  image: {
    width: 222,
    height: 222,
  },
  h5Text: {
    color: theme.palette.brandColors.pure,
    marginTop: 13,
  },
  marginNull: {
    margin: 0,
  },
  containerHeight: {
    height: "20%",
  },
  pHeight: {
    height: "0.5em",
    marginTop: 2,
  },
  badgedWidth: {
    maxWidth: "6%",
  },
  buttonWidth: {
    maxWidth: "22%",
  },
  secondaryFont: {
    fontFamily: 'Source Sans Pro'
  }
}));

export default function Product() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Navbar />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={3}>
          <img
            className={classes.image}
            src="https://res.cloudinary.com/dvm6sgg1h/image/upload/v1621423773/ythzkearfq9lbyhk9lda.png"
            alt="test"
          />
        </Grid>
        <Grid item xs={9}>
          <h1 className={classes.marginNull}>
            20262-2 PANTOPRAZOL 20MG CPD/28 GN-ME
          </h1>
          <p className={(classes.pHeight, classes.secondaryFont)}>
            <strong>Categoria:</strong> Gástrico | <strong>P. Ativo:</strong>{" "}
            Pantoprazol | <strong>Cód.Barras:</strong> 789601521557498
          </p>
          <Grid
            container
            className={(classes.root, classes.containerHeight)}
            spacing={2}
          >
            <Grid item xs={2}>
              <p>PMC: R$ 68,80</p>
            </Grid>
            <Grid item xs={2}>
              <p>Venda: R$ 65,00</p>
            </Grid>
            <Grid item xs={6} className={classes.select}>
              <Grid container className={classes.root} spacing={2}>
                <Grid item xs={4}>
                  <p>Estoque disponível: </p>
                </Grid>
                <Grid item xs={2}>
                  <Select defaultValue="">
                    <MenuItem value={10}>555</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={(classes.root, classes.secondaryFont)} spacing={2}>
            <Grid item xs={2}>
              <h1 className={classes.marginNull}>R$ 61,85</h1>
            </Grid>
            <Grid item xs={1} className={classes.badgedWidth}>
              <SimpleBadge color="blue" text="Azul" />
            </Grid>
            <Grid item xs={1} className={classes.badgedWidth}>
              <SimpleBadge color="red" text="10,18%" />
            </Grid>
            <Grid item xs={2}>
              <h5 className={classes.h5Text}>Todos os preços</h5>
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={2}>
              <ButtonGroup />
            </Grid>
            <Grid item xs={3} className={classes.buttonWidth}>
              <Button
                variant="contained"
                color="primary"
                text="Adicionar à cesta"
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="primary"
                text="Deixei de Vender"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
