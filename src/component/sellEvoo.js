// Nom du composant : SellEvoo
// Les States :
// divStyleJ : style de la div jaune
// divStyleR : style de la div rouge
// divStyleB : style de la div blue
// open, setOpen : model parler ensemble
// Les fonctions :
// handleClickOpen :ouvrir  model parler ensemble
// handleClose : fermer model parler ensemble

import Header from "./commun/header";
import Footer from "./commun/footer";
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import SendEmail from './commun/sendEmail'
// divStyleJ : style de la div jaune
const divStyleJ = {
  zIndex: 7,
  height: "60px",
  width: "60px",
  top: "0px",
  background: "rgb(255, 222, 0)",
  radius: "0px",
};
// divStyleR : style de la div rouge
const divStyleR = {
  zIndex: 7,
  height: "60px",
  width: "60px",
  background: "rgb(227, 6, 19)",
  radius: "0px",
};
// divStyleB : style de la div blue
const divStyleB = {
  zIndex: 7,
  height: "60px",
  width: "60px",
  background: "rgb(39, 52, 139)",
  radius: "0px",
};
// sell evoo page
export default function SellEvoo () {
  // model parlons ensemble
  const [open, setOpen] = React.useState(false);
// ouvrir model parlons ensemble
  const handleClickOpen = () => {
    setOpen(true);
  };
  //fermer  model parlons ensemble
  const handleClose = () => {
    setOpen(false);
  };
    return (
      <div className=" flex flex-col h-screen justify-between">
        <div>
{/* ****************************************************************  entete  **************************************************************** */}
          <Header />
        </div>
{/* ****************************************************************  body  **************************************************************** */}

        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="full">
            <Box className="mt-[10%] minMaxTablet:mt-[30%]">
              <Grid container spacing={2}>
 {/* **************************************************************** Partie 1 : image + text en arabe **************************************************************** */}
                <Grid item xs={2} />
                {/* image */}
                <Grid item xs={3} >
                  <Grid container spacing={2}>
                    <Grid item xs={8} />
                    <Grid item xs={3}>
                      <div>
                        <div
                          style={divStyleJ}
                          className="mobile:ml-5"
                        >
                          {" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} />
                    <Grid item xs={12} />
                    <Grid item xs={12} />

                    <Grid item xs={3} >
                      <div>
                        <div
                          style={divStyleR}
                          className=""
                        >
                          {" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={9} />
                    <Grid item xs={9} />

                    <Grid item xs={3}>
                      <div>
                        <div style={divStyleB} className="mobile:ml-5">
                          {" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={1} />
                  </Grid>{" "}
                  <img
                    src={require("../img/arbre.png")}
                    alt=""
                    className="mt-[-87%]             
                  "
                  />
                </Grid>
                <Grid item xs={1} />
{/* **************************************************************** text en arabe **************************************************************** */}
                <Grid item xs={12} sm={4}>
                  <div className="text-red-600 text-8xl font-bold font-serif mb-8 
                   mobile:text-5xl  sm:mt-52 md:mt-[2%] sm:text-5xl lg:text-7xl">
                    <center>.نحاربو على زيتك</center>
                  </div>
                  <div className="text-3xl font-semibold minMaxTablet:text-2xl">
                    <center>.زيتك ثروتك أعطيه كارو</center>
                  </div>
                  <div className="text-3xl font-semibold minMaxTablet:text-2xl">
                    <center>.أحنا معاك بش يتباع بقدرو </center>
                  </div>
                  <div className="text-3xl font-semibold minMaxTablet:text-2xl">
                    <center>.مع بعضنا أقوى</center>
                  </div>
                </Grid>
                <Grid item xs={2} />
{/* ****************************  Partie 2 : bouton parlons ensemble  ************************************** */}

                <Grid item xs={4} />
                <Grid item xs={12} sm={4}>
                  <center>
                    <button 
                      onClick={(e) => {
                        handleClickOpen();
                      }}
                    className="minMaxTablet:mt-8 mb-10 bg-[#27348B] text-white px-7 py-3 text-sm font-bold rounded-md">
                      Parlons ensemble
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
                <Grid item xs={4} />
{/*  ****************************************************************  Partie 3 : texte  **************************************************************** */}
                <Grid item xs={2} />
                <Grid item xs={12} sm={8}>
                  <div className="mobile:text-lg sm:text-[27px]">
                    <center>
                      Nous sommes engagés pour créer une communauté prospère de
                      passionné(e)s d'huile d'olive, basée sur la transparence
                      et la confiance.
                    </center>
                  </div>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item  xs={12} sm={6}>
                  <div className="text-[#E30613] mobile:text-3xl sm:text-4xl mt-8">
                    <b>Produisez</b> votre huile. <br />
                    Nous nous <b>occupons du reste !</b>
                  </div>
                </Grid>
                <Grid item xs={4} />
{/*  ****************************************************************  Partie 4 : titre rouge + texte **************************************************************** */}
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <div className="my-5">
                    Produire une huile extra vierge est un travail laborieux.{" "}
                  </div>
                  <div className="my-5">
                    Ce qui ne laisse pas le temps - parfois - de penser et
                    organiser la bonne stratégie de commercialisation. Dans un
                    marché de plus en plus concurrentiel, de plus en plus global
                    et de plus en plus digital, être un producteur d'huile
                    d'olive devient compliqué année après année.
                  </div>
                  <div className="my-5">
                    220 propose une solution clé en main pour aider les
                    producteurs à se focaliser sur leur coeur de métier :
                    produir la meilleure qualité possible.
                  </div>
                </Grid>
                <Grid item xs={2} />
{/*  ****************************************************************   Partie 5 : titre div color + texte  **************************************************************** */}
{/*  **************************************************************** colors  **************************************************************** */}
                <Grid item xs={2} />
                <Grid item xs={1} >
                  <div style={divStyleR} />
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={1}>
                  <div style={divStyleB} />
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2}>
                  <div style={divStyleJ} />
                </Grid>
                <Grid item xs={2} />
{/* **************************************************************** titre ****************************************************************  */}
                <Grid item xs={2} />
                <Grid item xs={1}>
                  <div className="font-serif text-md">
                    <b>Valorisez votre huile</b>
                  </div>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2}>
                  <div className="font-serif text-md">
                    <b>Accédez directement aux acheteurs internationaux</b>
                  </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={2}>
                  <div className="font-serif text-md">
                    <b>
                      Simplifiez <br /> vos opérations d'export
                    </b>
                  </div>
                </Grid>
                <Grid item xs={2} />
                {/* text */}
                <Grid item xs={2} />
                <Grid item xs={2}>
                  <div>
                    Nous mettons à disposition notre laboratoire d'analyse
                    chimique et sensorielle pour tous vos lots.
                  </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={2}>
                  <div>
                    Notre plateforme en ligne vous met en relation directe avec
                    des acheteurs internationaux ciblés et pré-qualifiés.
                  </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={2}>
                  <div>
                    Notre équipe et nos partenaires logistique prendront en
                    charge la totalité de l'opération d'export.
                  </div>
                </Grid>
                <Grid item xs={2} />
{/* ****************************************************************  text + image **************************************************************** */}
                <Box sx={{ flexGrow: 1 }} className="mt-10">
                  <Grid container spacing={2} className="font-serif">
                  <Grid item xs={12} />

                    <Grid item xs={2} />
                    <Grid item xs={12} sm={5}>
                      <div className=" mobile:text-xl mobile:font-semibold sm:font-normal
                      sm:text-4xl font-medium  mb-5 mt-[10%]">
                        Un laboratoire pour déterminer les points forts de vos
                        huiles.
                      </div>

                      <div
                          style={divStyleR}
                          className="mobile:mt-[-20%] mobile:mb-[10%] mobile:ml-48
                          sm:mt-[-20%] sm:ml-36 sm:mb-2
                          lg:mt-[-15%] lg:ml-[45%]
                          xl:ml-[60%] xl:mt-[-10%] 
                          2xl:ml-[25%] 2xl:mt-[-10%]
                          "
                       / >
                      <div>
                        En plus des caractéristiques physico-chimiques de votre
                        huile d'olive, nos experts vont determiner le profil
                        organoleptique de votre produit d'une manière méthodique
                        et scientifique. Ces analyses nous permettront de mieux
                        valoriser vos huiles et mieux matcher l'offre et la
                        demande.
                      </div>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                    <div
                          style={divStyleR}
                          className="ml-[50%] mobile:mb-[-25%] lg:mb-[-10%]"
                       / >                    
   
                      <img
                        src={require("../img/blue.png")}
                        alt=""
                        className="h-[80%]"
                      />
                          <div
                          style={divStyleR}
                          className="mt-[-8%] ml-[20%]"
                       / > 

                    </Grid>
                    <Grid item xs={1} />



                    <Grid item xs={2} />                   
                     <Grid item xs={8} sm={4}>
                    <div
                          style={divStyleB}
                          className="ml-[50%] mobile:mb-[-45%] lg:mb-[-15%]"
                       / >                    
   
                      <img
                        src={require("../img/world.png")}
                        alt=""
                        className="h-[80%]"
                      />
                          <div
                          style={divStyleB}
                          className="mt-[-15%] ml-[20%]"
                       / > 

                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <div className=" mobile:text-xl mobile:font-semibold sm:font-normal
                      sm:text-4xl font-medium  mb-5 mt-[10%]">
                        Une plateforme pour vendre directement à
                        l'international.
                      </div>

                      <div
                          style={divStyleB}
                          className="mobile:mt-[-20%] mobile:mb-[10%] mobile:ml-48
                          sm:mt-[-20%] sm:ml-36 sm:mb-2
                          lg:mt-[-15%] lg:ml-[45%]
                          xl:ml-[60%] xl:mt-[-10%] 
                          2xl:ml-[25%] 2xl:mt-[-10%]
                          "
                       / >
                      <div>
                      Aujourd'hui, le digital touche tous les aspects de nos
                        sociétés. De notre mode de vie, à notre façon de penser
                        et même notre manière de faire des affaires. Notre
                        plateforme vous permet d'augmenter votre présence en
                        ligne, d'accéder à la demande mondiale et de rentrer en
                        contact direct avec des acheteurs internationaux.
                      </div>
                    </Grid>

                    <Grid item xs={1} />
 
 
                    <Grid item xs={12} />

                  

                    <Grid item xs={12} />


                    <Grid item xs={2} />
                    <Grid item xs={12} sm={5}>
                      <div className=" mobile:text-xl mobile:font-semibold sm:font-normal
                      sm:text-4xl font-medium  mb-5 mt-[10%]">
                        Une assistance pour simplifier vos opérations d'export.

                      </div>

                      <div
                          style={divStyleJ}
                          className="mobile:mt-[-20%] mobile:mb-[10%] mobile:ml-44
                          sm:mt-[-20%] sm:ml-28 sm:mb-2
                          lg:ml-[40%] lg:mt-[-10%] 
                          xl:ml-[60%] xl:mt-[-10%] 
                          2xl:ml-[15%] 2xl:mt-[-10%]
                          "
                       / >
                      <div>
                      Une fois l'offre d'achat validée, nos équipes pilotent
                        toutes les étapes de l'opération d'export. Nous assurons
                        également le transport de votre produit depuis vos
                        citernes aux portes de vos clients.
                      </div>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                    <div
                          style={divStyleJ}
                          className="ml-[50%] mobile:mb-[-45%] lg:mb-[-10%]"
                       / >                    
   
                      <img
                        src={require("../img/bateau.png")}
                        alt=""
                      />
                          <div
                          style={divStyleJ}
                          className="mt-[-18%] ml-[10%]"
                       / > 

                    </Grid>
                    <Grid item xs={1} />


                   
                    
                  </Grid>
                </Box>
{/* ****************************************************************  text  **************************************************************** */}
            <Grid item xs={12} />

                <Grid item xs={3} />
                <Grid item xs={12} sm={6}>
                  <div className="mobile:text-xl sm:text-4xl font-medium  mb-5 mt-[10%] font-serif">
                    <center>
                      {" "}
                      Dites bonjour au monde, connectez vous avec des clients
                      dans le monde entier et rendez votre huile internationale.{" "}
                    </center>
                  </div>
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={2} />
                <Grid item  xs={12} sm={8}>
                  <div className="mobile:text-xl sm:text-6xl mb-9 font-serif font-bold">
                    <center>.مع بعضنا أقوى</center>
                  </div>
                </Grid>
                <Grid item xs={2} />

                {/* *********************** bouton  ***********************  */}
                <Grid item xs={2} />
                <Grid item xs={12} sm={8}>
                  <center>
                    <button
                      className="mb-10 bg-[#27348B] 
                    text-white px-10 py-3 text-base font-bold rounded-md"
                    >
                      Rejoignez 220
                    </button>
                  </center>
                </Grid>
                <Grid item xs={2} />
        {/* *********************** fin  ***********************  */}
                <Grid item xs={12} />
                <Grid item xs={12} />
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
        {/* ****************************************************************  footer  **************************************************************** */}
        <div>
          <Footer />
        </div>
      </div>
    );
  }

