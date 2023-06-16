import Header from "./commun/header";
import Footer from "./commun/footer";
// Nom du composant : Blog
// Les States :
// Les fonctions :
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// a blog page : empty page
export default class Blog extends React.Component {
  render() {
    return (
      <div className=" flex flex-col h-screen justify-between">
       <div >
          {/* entete */}
          <Header />
        </div>
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" >
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Box>
          </Container>
    </React.Fragment>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
