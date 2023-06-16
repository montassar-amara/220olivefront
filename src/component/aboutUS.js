// Nom du composant : AboutUS
// Les States :
// open, setOpen : ouvrir model me meet us
// Les fonctions :
// handleClickOpen : ouvrir le model meet us
// handleClose : fermer le model meet us

import Header from "./commun/header";
import Footer from "./commun/footer";
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import SendEmail from './commun/sendEmail'
// about us page
export default function AboutUS () {
  // meet us
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
        {/* corps */}
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="full">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {/* partie 1 : image + texte + pied jaune*/}
                <Grid item xs={12}>
                  <Card
                    style={{ border: "none", boxShadow: "none" }}
                    className="mobile:mt-[60%] sm:mt-48 lg:mt-20"
                  >
                    <CardMedia>
                      <img src={require("../img/bg2.jpg")} alt="" />
                    </CardMedia>
                    <CardContent className="w-full">
                      <Box className="w-full">
                        <Grid container spacing={2}>
                          <div
                            className="text-blue-900 font-ptSerif
                          mobile:mt-[-20%] mobile:text-sm
                          sm:ml-[12%] sm:mt-[-19%] sm:text-lg sm:w-[40%] 
                          md:text-2xl lg:w-[35%] 
                          lg:text-3xl xl:text-4xl 2xl:text-6xl
                          "
                          >
                            <i>
                              Build a thriving community of olive oil lovers.
                              <br />
                              Where watchwords are <b>transparency</b> and{" "}
                              <b>trust.</b>
                            </i>
                          </div>

                          <Grid
                            item
                            sm={12}
                            md={12}
                            className="bg-[#FFDE00] w-full "
                          >
                            <div
                              className="text-white text-2xl font-serif my-1 mb-3 
                            sm:text-sm  sm:ml-[10%] md:text-2xl mobile:text-sm"
                            >
                              220 helps buyers get the EVOO they need <br />
                              and producers find the right opportunity for their
                              products.
                            </div>
                          </Grid>
                        </Grid>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3} />
                {/* partie 2  */}
                <Grid item xs={12} sm={6}>
                  <div className="font-serif  mobile:text-2xl mobile:font-semibold lg:text-4xl">
                    <i>
                      <center>
                        We are scientists, designers and olive oil fanatics.
                      </center>
                    </i>
                  </div>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={12} sm={6}>
                  <div className="font-serif  text-xl  ">
                    <center>
                      We have over a decade of experience in the olive oil
                      industry, helping producers and buyers that are as smart,
                      as they are effective.
                    </center>
                  </div>
                </Grid>
                <Grid item xs={2} className="absolute top-[18%] left-[83%]">
                  <img
                    src={require("../img/branche1.png")}
                    alt=""
                    className=""
                  />
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={12} sm={4}>
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
                {/* dialog de meet us */}
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
                <Grid item xs={4} />
                {/* partie 3  */}

                {/* ************************************************************ TEAM ************************************************************ */}
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    {/* ******* Sonda ******* */}
                    <Grid item xs={1} />
                    <Grid item xs={10} sm={4}>
                      <div className="text-sm mb-5">
                        SONDA LAROUSSI CEO & CO-FOUNDER
                      </div>
                      <div
                        className="text-red-600  font-serif 
                    mobile:text-lg mobile:font-semibold
                    sm:text-5xl lg:text-7xl
                   "
                      >
                        MADAME EVOO.
                      </div>
                      <div className=" text-2xl my-5">
                        An internationally recognized sommelier, mixing art and
                        science.
                      </div>
                      <div>
                        Dr. Sonda has spent the last 16 years helping and
                        directing work for the most prestigious Tunisian olive
                        oil companies and producers. As an expert in sensory
                        analysis, she recruited, trained and managed over 50
                        sommeliers. When Dr. Sonda isn't busy educating people
                        on the difference between pungency and bitterness, she
                        can be found renovating an old piece of furniture in her
                        veranda.
                      </div>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                      <img src={require("../img/sonda.jpg")} alt="" />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={12} />
                    <Grid item xs={12} />
                    {/* ******* Syrine ******* */}
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                      <img src={require("../img/syrine.png")} alt="" />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={10} sm={4}>
                      <div className="text-xs mb-5 text-right">
                        SYRINE SELLAMI CO-FOUNDER
                      </div>
                      <div className="text-yellow-400 sm:text-5xl lg:text-7xl font-serif text-right mobile:text-lg mobile:font-semibold">
                        CREATIVE SPIRIT
                      </div>
                      <div className="text-right text-2xl my-5">
                        A purist designer, with passion for details.
                      </div>
                      <div className="text-right">
                        Syrine has been responsible for bringing concepts to
                        life for clients such as Loréal, Saint-Gobain and many
                        others. She has a solid experience in the human centered
                        design process and is passionate about finding real
                        problems and creating sustainable solutions with
                        meanings. When Syrine isn't trying to solve a new design
                        paradigm, she's challenging friends to a board or card
                        game.
                      </div>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={2}>
                      <img src={require("../img/branche2.png")} alt="" />
                    </Grid>{" "}
                    <Grid item xs={10} />
                    {/* ******* Omar ******* */}
                    <Grid item xs={1} />
                    <Grid item xs={10} sm={4}>
                      <div className="text-xs mb-5">
                        OMAR BEN AMMAR CO-FOUNDER
                      </div>
                      <div className="text-blue-900 sm:text-5xl lg:text-7xl font-serif mobile:text-lg mobile:font-semibold">
                        ETERNAL LEARNER.
                      </div>
                      <div className=" text-2xl my-5">
                        A customer experience expert, with a multicultural
                        background.
                      </div>
                      <div>
                        Omar spent the last 8 years helping organizations
                        reinvent themselves and connect with consumers in new
                        and meaningful ways. He's passionate about business
                        design and entrepreneurship. Outside of work, Omar can
                        be found anywhere stuck behind his laptop learning new
                        things.
                      </div>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                      <img src={require("../img/omar.png")} alt="" />
                    </Grid>
                    <Grid item xs={1} />
                  </Grid>
                </Box>
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <img
                    src={require("../img/branche3.png")}
                    alt=""
                    className="h-full"
                  />
                </Grid>
                {/* ***************************************************************** Fin team ****************************************************************/}
                
                {/* ******* partie 4 ******* */}
                <Grid item xs={2} />
                <Grid item xs={12} sm={8}>
                  <div className="font-serif mobile:text-2xl mobile:font-bold lg:text-4xl mb-5">
                    <i>
                      <center>
                        <div>We are committed to Build </div>
                        <div>a thriving community of olive oil lovers.</div>
                        <div>Where watchwords are transparency and trust.</div>
                      </center>
                    </i>
                  </div>
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={4} />
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={4} />
              </Grid>

              {/* **************  footer ************** */}
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
      </div>
    );
  }

