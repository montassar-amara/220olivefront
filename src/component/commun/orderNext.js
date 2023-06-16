// Nom du composant : CardOrderNext
// Les States :
// Les fonctions :

import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import OrderNext2 from "./orderNext2";

export default function CardOrderNext({ data, color, colorImage }) {
  const [next, setNext] = useState({ display: "none" });
  const [style, setStyle] = useState({ display: "block" });
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        className=""
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
              <p className="mb-3">
                <p
                  className="cursor-default border border-black border-y-0
                   border-l-1 pl-2
                   -mt-7
                   mb-6
                   border-r-0"
                >
                  <span className="text-xl ">
                    ORDER A SAMPLE <ShoppingCartIcon />
                  </span>
                  <br />
                  <span className="text-black text-md ">ADRESS</span>
                </p>
              </p>
            </Grid>
            {/* ****************** */}
            <Grid item xs={2} />
            <Grid item xs={2} className="cursor-default  text-sm">
              Name
            </Grid>
            <Grid item xs={2} />

            <Grid item xs={3} className="cursor-default text-sm">
              Last name
            </Grid>
            <Grid item xs={3} />

            {/* ******************* */}
            <Grid item xs={2} />

            <Grid item xs={4} className="cursor-default text-right">
              <input
                className="cursor-default border border-1
                 border-black w-full p-2 italic font-ptSerif 
                 -mt-9"
              />
            </Grid>
            <Grid item xs={4} className="cursor-default text-right">
              <input
                className="cursor-default border border-1
                 border-black w-full p-2 italic font-ptSerif 
                 -mt-9"
              />
            </Grid>
            <Grid item xs={2} />

            {/* ****************** */}
            <Grid item xs={2} />
            <Grid item xs={10} className="cursor-default  text-sm -mt-11">
              Phone
            </Grid>

            {/* ****************** */}
            <Grid item xs={2} />
            <Grid item xs={8} className="cursor-default  text-sm ">
              <input
                className="cursor-default border border-1
                 border-black w-full p-2 italic font-ptSerif -mt-11"
              />
            </Grid>
            <Grid item xs={2} />
            {/* ****************** */}
            <Grid item xs={2} />
            <Grid item xs={10} className="cursor-default  text-sm -mt-11">
              Adress
            </Grid>

            {/* ****************** */}
            <Grid item xs={2} />
            <Grid item xs={8} className="cursor-default  text-sm">
              <input
                className="cursor-default border border-1
                 border-black w-full p-2 italic font-ptSerif -mt-11"
              />
            </Grid>
            <Grid item xs={2} />

  {/* ****************** */}
  <Grid item xs={2} />
            <Grid item xs={2} className="cursor-default  text-sm -mt-11">
              City
            </Grid>
            <Grid item xs={2} />

            <Grid item xs={3} className="cursor-default text-sm -mt-11">
              Country
            </Grid>
            <Grid item xs={3} />

            {/* ******************* */}
            <Grid item xs={2} />

            <Grid item xs={4} className="cursor-default text-right">
              <input
                className="cursor-default border border-1
                 border-black w-full p-2 italic font-ptSerif -mt-11"
              />
            </Grid>
            <Grid item xs={4} className="cursor-default text-right">
              <input
                className="cursor-default border border-1
                 border-black w-full p-2 italic font-ptSerif -mt-11"
              />
            </Grid>
            <Grid item xs={2} />

              {/* ****************** */}
              <Grid item xs={2} />
            <Grid item xs={2} className="cursor-default  text-sm">
              State
            </Grid>
            <Grid item xs={2} />

            <Grid item xs={3} className="cursor-default text-sm">
              ZIP code
            </Grid>
            <Grid item xs={3} />

            {/* ******************* */}
            <Grid item xs={2} />

            <Grid item xs={4} className="cursor-default text-right">
              <input
                className="cursor-default border border-1
                 border-black w-full p-2 italic font-ptSerif -mt-11"
              />
            </Grid>
            <Grid item xs={4} className="cursor-default text-right">
              <input
                className="cursor-default border border-1
                 border-black w-full p-2 italic font-ptSerif -mt-11"
              />
            </Grid>
            <Grid item xs={2} />

            
            {/* ******************* */}
            <Grid item xs={2} />

            <Grid item xs={8}>
              <button
                className="bg-black text-white text-2xl  font-semibold
                  p-3 text-center w-full  mt-1 rounded-md"
              >
                NEXT
              </button>
            </Grid>
            <Grid item xs={2} />

            {/* ****************  */}
 
            <Grid item xs={11} />
            <Grid item xs={1}>
              <div className="cursor-default -mt-8">2/3</div>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Box>
      </Container>
      <Grid container spacing={2} style={next}>
        <OrderNext2 />
      </Grid>
    </React.Fragment>
  );
}
