// Nom du composant : CardOrderNext2
// Les States :
// Les fonctions :

import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CardOrderNext2({ data, color, colorImage }) {
  const [next, setNext] = useState({ display: "none" });
  const [style, setStyle] = useState({ display: "block" });
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        className="w-fit mobile:mt-[45%] md:mt-[15%] lg:mt-[10%]  
        minMaxTablet:mt-[25%] minMaxMobile:mt-[70%]"
      >
        <Box sx={{ flexGrow: 1 }} style={style}>
          <Grid container spacing={2}>
            <Grid item xs={2} />
            <Grid
              item
              xs={10}
              className="
              text-[#ADA8A3]          
                "
            > 
              <p className=" mb-36">
                <p
                  className="cursor-default border border-black border-y-0 border-l-1 pl-2
           border-r-0"
                >
                  <span className="text-xl">ORDER A SAMPLE <ShoppingCartIcon /></span>
                  <br />
                  <span className="text-black text-md ">QUANTITY</span>
                </p>
              </p>
            </Grid>
{/* ****************** */}
            <Grid item xs={1} />
            <Grid item xs={6} className="cursor-default text-right">
              Choose a quantity
            </Grid>
            <Grid item xs={2}>
              <select
                placeholder="Sélectionner une catégorie"
                className="cursor-pointer w-full p-1 border border-1 border-black rounded-sm text-gray-400"
                
                defaultValue={20} 
                >
                  <option disabled value="20" hidden >
                  1
                </option>
                <option value="20">1</option>
                <option value="40">2</option>
                <option value="60">3</option>
              </select>
            </Grid>

            <Grid item xs={3} />

            {/* ******************* */}
            <Grid item xs={7}>
             <div className="text-right cursor-default mt-8" >TOTAL</div>
            </Grid>
            <Grid item xs={1}>
              <input
                readOnly
                className="cursor-default border border-1
                 border-black w-10 p-2 italic font-ptSerif mt-7"
              />
            </Grid>
            <Grid item xs={1}>
              <center className=" cursor-default ml-5  mt-10">$</center>
            </Grid>

            <Grid item xs={3} />
            {/* ******************* */}
            <Grid item xs={2} />

            <Grid item xs={8}>
              <button
                className="bg-black text-white text-2xl  font-semibold
                  p-3 text-center w-full mb-5 mt-10 rounded-md"
                  
              >
                VALIDER
              </button>
            </Grid>
            <Grid item xs={2} />
            
            {/* ****************  */}
            
            <Grid item xs={11}/>
            <Grid item xs={1}>
              <div
                className="cursor-default mt-14"
              >
                3/3
              </div>
            </Grid>
            <Grid item xs={2} />
          </Grid>
          

        </Box>
      </Container>
  
    </React.Fragment>
  );
}
