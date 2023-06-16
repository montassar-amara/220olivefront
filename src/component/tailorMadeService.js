// Nom du composant : TailorMadeService
// Les States :
// open, setOpen : model meet us
// Les fonctions :
// handleClickOpen : ouvrir model meet us
// handleClose : fermer model meet us
import Header from "./commun/header";
import Footer from "./commun/footer";
import CardExperience from "./commun/cardExperience";

import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import SendEmail from './commun/sendEmail'

// tailor made service page
export default function TailorMadeService () {
  // model meet us
  const [open, setOpen] = React.useState(false);
// ouvrir meet us
  const handleClickOpen = () => {
    setOpen(true);
  };
  // fermer meet us
  const handleClose = () => {
    setOpen(false);
  };
    return (
      <div className=" flex flex-col h-screen justify-between">
        {/* entete */}
        <div>
          <Header />
        </div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="full">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={3} />

                {/* IMAGE */}

                <Grid item xs={8} sm={3}>
                  <img
                    className="mobile:mt-[60%] sm:mt-[120%]  lg:mt-[40%] border border-1 border-black"
                    src={require("../img/poster.png")}
                    alt=""
                  />
                </Grid>

                {/* ESPACE BETWEEN */}

                <Grid item xs={4} sm={1} />
                {/* didnt found your oil  */}
                <Grid item xs={8} sm={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={2}>
                      <div className=" sm:mt-[100%] md:mt-[100%] lg:mt-[40%]  xl:mt-[120%] text-red-600 mobile:text-lg sm:text-4xl md:text-5xl mb-5">
                        Didn't
                        <b> find</b> your <b>oil ?</b>
                      </div>
                    </Grid>
                    <Grid item xs={10} />

                    <Grid item xs={6}>
                      <div className="mobile:text-sm sm:text-2xl mb-5">
                        Our team offers it's expertise for an effective tailor
                        made service.
                      </div>
                    </Grid>
                    <Grid item xs={6} />
                    {/* meet us */}
                    <Grid item xs={12}>
                    <center>
                    <button 
                      onClick={(e) => {
                      handleClickOpen();
                    }}
                    className="my-10 bg-[#27348B] text-white px-12 py-3  text-sm font-bold rounded-md">
                        <span> MEET US</span>
                    </button>
                  </center>
                    </Grid>
                    <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose}
                    ></DialogTitle>
                    <DialogContent>
                     <SendEmail/>
                   </DialogContent>
                  </Dialog>
                  </Grid>
                </Grid>
                {/* didnt found your oil end */}
                <Grid item xs={1} />

                {/* the 220 experience */}

                <Grid item xs={12}>
                  <div
                    className="mobile:text-3xl mobile:font-semibold 
                  sm:text-6xl font-meduim font-serif h-0"
                  >
                    <center>The 220 experience</center>
                  </div>
                </Grid>

                <Grid item xs={2} />
                <Grid item xs={12} sm={8}>
                  <img src={require("../img/the220Experience.png")} alt="" />
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={12}>
                  <CardExperience />
                </Grid>

                <Grid item xs={12}>
                  <div
                    className="mobile:text-3xl mobile:font-semibold sm:text-5xl font-meduim 
                  font-serif "
                  >
                    <center>Start your 220 experience here</center>
                  </div>
                  <div className="mobile:text-xl sm:text-2xl m-5 font-serif">
                    <center>
                      ‘Nothing ever becomes real, til it is experienced.’
                      <div>John Keats</div>
                    </center>
                  </div>
                  <center>
                    <button 
                      onClick={(e) => {
                      handleClickOpen();
                    }}
                    className="my-10 bg-[#27348B] text-white px-12 py-3  text-sm font-bold rounded-md">
                        <span> MEET US</span>
                    </button>
                  </center>
                </Grid>
{/* image de tous les experiences */}
                <Grid item xs={12}>
                  <img src={require("../img/cubiks.png")} alt="" />
                </Grid>

                <Grid item xs={12} />

                <Grid item xs={12}>
                  <div
                    className="mobile:text-3xl mobile:font-semibold sm:text-5xl font-meduim 
                  font-serif "
                  >
                    <center>Let's discuss your project.</center>
                  </div>

                  <center>
                    <button 
                      onClick={(e) => {
                      handleClickOpen();
                    }}
                    className="my-10 bg-[#27348B] text-white px-12 py-3  text-sm font-bold rounded-md">
                        <span> MEET US</span>
                    </button>
                  </center>
                </Grid>
                <Grid item xs={12} />
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
