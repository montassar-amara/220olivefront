// Nom du composant : CardOffer
// Les States :
// Les fonctions :

import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function CardOffer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="full"
        className="mobile:mt-[45%] md:mt-[15%] lg:mt-[10%]  
        minMaxTablet:mt-[25%] minMaxMobile:mt-[70%]"
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={5} className=" text-white">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className="text-2xl mb-8">HOW IT WORKS</div>
                  </Grid>
                  <Grid item xs={12} />

                  <Grid item xs={12}>
                    <div>
                      1) Enter your desired EXW price ($ per kg) and requested
                      quantity* (in metric tons)
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>2) Producer get your offer</div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      3) You receive an answer no later than 24 hours after your
                      offer is submitted
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="text-xs mb-8 italic ">
                      *if the maximum guaranteed quantity is exceeded, 220 team
                      will check if a blend is possible to meet your request.
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item sm={1} />

            <Grid item  xs={6} className=" border-1 border-gray-300">
              <div className="ml-5 ">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <div className="text-[#ADA8A3] text-[23px]  mb-5">
                        MAKE AN OFFER FOR Chayma
                      </div>
                    </Grid>
                    <Grid item xs={9}>
                      <div className="text-[#ADA8A3] text-sm font-normal ">
                        PRODUCER'S PRICE
                      </div>
                    </Grid>
                    <Grid item xs={1}>
                      <div className="text-[#ADA8A3] text-sm font-normal ">
                        4.4
                      </div>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                      <div className="text-[#ADA8A3] text-sm font-normal italic">
                        $/kg
                      </div>
                    </Grid>

                    <Grid item xs={9}>
                      <div className="text-[#ADA8A3] text-sm font-normal ">
                        GUARANTEED QUANTITY
                      </div>
                    </Grid>
                    <Grid item xs={1}>
                      <div className="text-[#ADA8A3] text-sm font-normal ">
                        60
                      </div>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                      <div className="text-[#ADA8A3] text-sm italic font-normal ">
                        MT
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div
                        className="
                       text-2xl 
                       font-normal  mt-5"
                      >
                        YOUR PRICE
                      </div>
                    </Grid>
                    <div></div>
                    <Grid item xs={4} className=" text-xl font-normal ">
                      <input
                        placeholder=""
                        defaultValue={0.00}
                      
                        type="number"
                        className="text-center border border-1 border-black w-full mt-5 rounded-sm"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <div className=" text-base italic mt-5">$/kg</div>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      className=" text-2xl 
                       font-normal"
                    >
                      <div>QUANTITY</div>
                    </Grid>
                    <Grid item xs={4} className=" text-xl font-normal">
                      <input
                        placeholder=""
                        type="number"
                        className="text-center border border-1 border-black w-full rounded-sm"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <div className=" text-base  italic">MT</div>
                    </Grid>

                    <Grid item xs={12}>
                      <button
                        className="bg-black text-white text-2xl font-semibold p-3 
                  rounded-sm text-center w-full mt-8"
                      >
                        SUBMIT
                      </button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
