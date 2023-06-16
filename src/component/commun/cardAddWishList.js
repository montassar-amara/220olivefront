// Nom du composant : CardAddWishList
// Les States :
// Les fonctions :

// IMPORT
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// card de lot details : add wish list
export default function CardAddWishList({ data, color, colorImage }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="full"
        className="mobile:mt-[45%] md:mt-[15%] lg:mt-[10%]  minMaxTablet:mt-[25%] minMaxMobile:mt-[70%]"
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1} />

            <Grid item xs={11}>
              <center>
                <img src={require("../../img/wish.png")} alt="" className="" />
              </center>
            </Grid>

            {/* *********** */}
            <Grid item xs={1} />
            <Grid item xs={11} >
              <center>This oil is already in your wishlist</center>
            </Grid>

            {/* *********** */}
            <Grid item xs={1} />
            <Grid item xs={11} >
              <center className="mt-10"> <FavoriteBorderIcon  className="text-blue-800"/> <span className="text-[#ADA8A3]  
              text hover:cursor-pointer hover:text-black">View wishlist</span></center>
            </Grid>
            {/* ****************** */}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
