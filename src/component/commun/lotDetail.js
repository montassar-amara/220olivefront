// Nom du composant : LotDetail : information sur lot
// Les States :
// open, setOpen : ouvrir model de sign up
// lot, setLot : state pour detail de lot
// image, setImage : nom  de couleur (exp: yellow to green .....)
// url, setUrl : recuperer le nom d'image+ ajout a url pour recuperer l image de couleur 
// armoes, setArmoes : recuperer le valeur d'armoes
// probability, setProbability : recuperer le valeur de probability of occurring
// oxidative_defects, setOxidative_defects : recuperer le valeur d'oxidative defects
// fermentation_defects, setFermentation_defects : recuperer le valeur de  fermentation defects
// color, setColor: effectuer un couleur  pour le box de la page lot detail
// colorRating, setColorRating : effectuer un couleur pour rating rectangle
// colorText, setColorText : effectuer un couleur pour text

// periode, setPeriode : recuperer le valeur de periode 
// tags, setTags  : recuperer  valeur des tags 
// cultivar, setCultivar : recuperer  valeur des cultivar
// equipment, setEquipment  : recuperer  valeur d'equipment
// origin, setOrigin :  recuperer  valeur de d'origin 

// fruitiness, setFruitiness  : recuperer  valeur de fruitiness 
// bitterness, setBitterness : recuperer  valeur de bitterness 
// pungency, setPungency : recuperer  valeur de pungency 
// harmony, setHarmony : recuperer  valeur de harmony 
// green, setGreen : recuperer  valeur de green 
// ripe, setRipe : recuperer  valeur de ripe 

// id  : recuperer id de lot
// styleBgColor : changer style arrière plan de box 
// styleBgText : changer style de menu ( make offer , order sample  )
// styleBgText2 : changer style de menu ( add to wishlist )
// btn :  changer style de bouton (x) 
// chemical : changer style de titre (chemical Analysis)
// sensory : changer style de titre (Sensory Analysis)
// const gotop : changer style de gotop bouton

// Les fonctions :
// chooseColor : color du box du page lot selon categorie 
// chooseColorText : color du text selon categorie 
// changerColorRating : color du rating selon categorie 
// useEffect: recuperer les informations du lot donneé

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Rating from "@mui/material/Rating";
import SquareIcon from "@mui/icons-material/Square";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CardAddWishList from "./cardAddWishList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import SignUp from "./signup";
import apiKeys from "../../key/apiKeys";

// color du box du page lot selon categorie 
function chooseColor(category: any) {
  if (category === "REGULAR QUALITY") return "regular";
  if (category === "PREMIUM QUALITY") return "premium";
  if (category === "GOOD QUALITY") return "good";
  if (category === "ORGANIC") return "organic";
  if (category === "ORGANIC PREMIUM") return "organicPremium";
}
// color du text selon categorie 
function chooseColorText(category: any) {
  if (category === "REGULAR QUALITY") return " text-regular";
  if (category === "PREMIUM QUALITY") return " text-premium";
  if (category === "GOOD QUALITY") return " text-good";
  if (category === "ORGANIC") return " text-organic";
  if (category === "ORGANIC PREMIUM") return " text-organicPremium";
}
// color du rating selon categorie 
function changerColorRating(category: any) {
  if (category === "REGULAR QUALITY") return "rgb(227, 6, 19)";
  if (category === "PREMIUM QUALITY") return "rgb(39, 52, 139)";
  if (category === "GOOD QUALITY") return "rgb(255, 222, 0)";
  if (category === "ORGANIC") return "rgb(236, 213, 187)";
  if (category === "ORGANIC PREMIUM") return "rgb(0, 0, 0)";
}

//  model de dialog personnaliser
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
// title de model de dialog 
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function LotDetail({ data, colorImage }) {
  // state
  const [lot, setLot] = React.useState([]);
  const [image, setImage] = React.useState([]);
  const [url, setUrl] = React.useState([]);
  const [armoes, setArmoes] = React.useState([]);
  const [probability, setProbability] = React.useState();
  const [oxidative_defects, setOxidative_defects] = React.useState([]);
  const [fermentation_defects, setFermentation_defects] = React.useState([]);
  const [color, setColor] = useState("1");
  const [colorRating, setColorRating] = useState("action");
  const [colorText, setColorText] = useState("");

  const [periode, setPeriode] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [cultivar, setCultivar] = React.useState([]);
  const [equipment, setEquipment] = React.useState([]);
  const [origin, setOrigin] = React.useState([]);

  const [fruitiness, setFruitiness] = React.useState(0);
  const [bitterness, setBitterness] = React.useState(0);
  const [pungency, setPungency] = React.useState(0);
  const [harmony, setHarmony] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [ripe, setRipe] = React.useState(0);

  const { id } = useParams();
  // style de couleur selon categorie
  const styleBgColor = "text-white h-full bg-" + color;
  const styleBgText =
    "hover:cursor-pointer text-red-600 w-32 mt-5 border border-1 border-x-0 border-t-0 border-" +
    color +
    colorText;
  const styleBgText2 =
    "hover:cursor-pointer text-red-600 w-36 mt-5 border border-1 border-x-0 border-t-0 border-" +
    color +
    colorText;
  const btn =
    "w-10 h-10  text-center text-white text-sm font-semibold pt-2 md:ml-[-820%] md2:ml-[0%] lg:-mt-12 lg:ml-[80%] lg2:ml-[-80%] lg2:mt-2 2xl:ml-[1060%] 2xl:-mt-12 bg-" +
    color;
  const chemical =
    "text-center mobile:mb-[20%] sm:mx-9 md:m-30 lg:m-25 xl:mt-20 text-3xl font-ptSerif italic  font-semibold  " +
    colorText;
  const sensory =
    "text-center mobile:mx-8 sm:mx-9 md:m-30 lg:mt-10 xl:-mt-5 mb-5 text-3xl font-ptSerif italic font-semibold " +
    colorText;
  const gotop =
    "w-10 h-10  text-center text-white text-sm font-semibold pt-2 rotate-90 hover:cursor-pointer mb-20 bg-" +
    color;

  // recuperer les informations du lot donneé
  useEffect(() => {
    axios.get(apiKeys.URL+"api/getLot/" + id + "/").then(
      (data) => {
        setLot(data.data);
        setImage(data.data.color.label);
        setUrl(require("../../img/" + data.data.color.label + ".png"));
        setArmoes(data.data.armoes);
        setProbability(data.data.probability.label);
        setOxidative_defects(data.data.oxidative_defects);
        setFermentation_defects(data.data.fermentation_defects);
        setFruitiness(Math.floor(data.data.fruitiness));
        setBitterness(Math.floor(data.data.bitterness));
        setPungency(Math.floor(data.data.pungency));
        setHarmony(Math.floor(data.data.harmony));
        setGreen(Math.floor(data.data.green));
        setRipe(Math.floor(data.data.ripe));

        setPeriode(data.data.period.label);
        setTags(data.data.tags);
        setCultivar(data.data.cultivar);
        setEquipment(data.data.producer.equipment.label);
        setOrigin(data.data.producer.origin.label);
        setColor(chooseColor(data.data.category.label));
        setColorText(chooseColorText(data.data.category.label));
        setColorRating(changerColorRating(data.data.category.label));
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
  }, []);

//  afficher model de sign up
  const [open, setOpen] = React.useState(false);
//  ouvrir model de sign up
  const handleClickOpen = () => {
    setOpen(true);
  };
  //  fermer model de sign up
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full">
        {/* partie gauche de la page (card coloré) */}
        <Box>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={3}
              lg={2}
              xl={6 / 4}
              className={styleBgColor}
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-5xl font-ptSerif font-semibold mt-5 ml-5 text-left">
                    {lot.name}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-md text-left ml-5  uppercase">
                    {tags.map((val, key) => {
                      return <p className=""> {val.label}, </p>;
                    })}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-md text-left mb-8 ml-5 flex flex-row">
                    {cultivar.map((val, key) => {
                      return <p className=""> {val.label}, </p>;
                    })}
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="xs:text-xs sm:text-xs text-center">
                    Producer's <br />
                    asking price
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="xs:text-xs sm:text-xs text-center">
                    Guaranteed <br />
                    quantity
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="xs:text-xs sm:text-md text-center bg-white text-black mx-5 p-2">
                    {lot.price}
                    <br />
                    $/Kg
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="xs:text-xs sm:text-md text-center bg-white text-black mx-5 p-2">
                    {lot.quantity}
                    <br />
                    MT
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-lg font-semibold text-left ml-5 mt-10">
                    Harvest time
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-xl text-left ml-5 italic font-ptSerif">
                    {periode}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-lg font-semibold text-left ml-5 mt-5">
                    Equipment
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-xl text-left ml-5  font-ptSerif">
                    {equipment}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-lg font-semibold text-left ml-5 mt-10">
                    Origin
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="xs:text-sm sm:text-xl text-left ml-5   font-ptSerif">
                    {origin}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <center>
                    <img
                      src={require("../../img/tunis.png")}
                      alt=""
                      className="xs:mb-1 sm:mb-[1050%] md:mb-[880%]  lg:mb-[320%] 
                      xl:mb-[350%]"
                    />
                  </center>
                </Grid>
              </Grid>
            </Grid>
            {/* partie droite */}
            <Grid item xs={12} sm={8} md={9} lg={10}>
              <Box>
                <Grid container spacing={1} className="md:fixed bg-white ">
                  {/* entete */}
                  <Grid item xs={1} />
                  <Grid item xs={12} md={5} lg={3} xl={4}>
                    <div onClick={handleClickOpen} className={styleBgText}>
                      <ArrowUpwardIcon /> Make offer
                    </div>
                 
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      ></BootstrapDialogTitle>
                      <DialogContent>
                        <SignUp />
                      </DialogContent>
                    </BootstrapDialog>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2} xl={3}>
                    <div
                      className={styleBgText}
                      onClick={handleClickOpen}
                    >
                      <ShoppingCartIcon /> Order sample
                    </div>
                  </Grid>
                  <Grid item md={1} />
                  <Grid item xs={10} md={6} lg={3} xl={3}>
                    <div
                      className={styleBgText2}
                      onClick={handleClickOpen}
                    >
                      <FavoriteBorderIcon />
                      Add to wishlist
                    </div>
                    
                  </Grid>
                  <Grid item xs={1} className="text-center ">
                    <div
                      className=" hover:cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/";
                      }}
                    >
                      <div className={btn}>X</div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
              {/* corps*/}
              <Box>
                <Grid container spacing={1} className="">
                  {/* description */}
                  <Grid item xs={3} />
                  <Grid item xs={6}>
                    <div className="text-left mobile:mt-20 md:mt-48 lg:mt-36 text-lg">
                      {lot.remark}
                    </div>
                  </Grid>
                  <Grid item xs={2} />
                  {/* chemical analysis */}
                  <Grid item xs={3} />
                  <Grid item xs={6}>
                    <div className={chemical}>Chemical Analysis</div>
                  </Grid>
                  <Grid item xs={2}>
                    <img
                      src={require("../../img/branche" + color + ".png")}
                      alt=""
                      className=""
                    />
                  </Grid>
                  <Grid item xs={8 / 5} />
                  <Grid item xs={6}>
                    <div className="mt-[-50%]">
                      <Grid container spacing={1}>
                        <Grid item xs={3} />
                        <Grid item xs={12} md={3}>
                          <div className="text-right text-sm font-semibold mt-5">
                            Free Fat Acidity
                          </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <div className="text-sm  mt-5">{lot.acidity}%</div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <div className="text-right text-sm mt-5">±0.05%</div>
                        </Grid>

                        <Grid item xs={3} />
                        <Grid item xs={12} md={3}>
                          <div className="text-right text-sm font-semibold mt-5">
                            Peroxide value
                          </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <div className="text-sm  mt-5">
                            {lot.peroxide} meq O2/kg
                          </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <div className="text-right text-sm mt-5">
                            ±1.5 meq O2/kg
                          </div>
                        </Grid>

                        <Grid item xs={3} />
                        <Grid item xs={10} md={4} lg={3}>
                          <div className="text-right text-sm font-semibold mt-5">
                            Spectrometry K232
                          </div>
                        </Grid>
                        <Grid item xs={2} md={5} lg={6}>
                          <div className="text-sm  mt-5">{lot.k232}</div>
                        </Grid>

                        <Grid item xs={3} />
                        <Grid item xs={10} md={4} lg={3}>
                          <div className="text-right text-sm font-semibold mt-5">
                            Spectrometry K270
                          </div>
                        </Grid>
                        <Grid item xs={2} md={5} lg={6}>
                          <div className="text-sm  mt-5">{lot.k270}</div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={2} />

                  {/* sensory Analysis */}
                  <Grid item xs={3} />
                  <Grid item xs={6}>
                    <div className={sensory}>Sensory Analysis</div>
                  </Grid>
                  <Grid item xs={2} />

                  <Grid item xs={8 / 5} />
                  <Grid item xs={6}>
                    <Grid container spacing={1}>
                      {/* fruitiness */}
                      <Grid item xs={3} />
                      <Grid item xs={12} md={3}>
                        <div className="text-right text-sm font-semibold ">
                          Fruitiness
                        </div>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <div className="text-sm ml-5 ">
                          <Rating
                            name="feed"
                            readOnly
                            value={fruitiness}
                            max={9}
                            getLabelText={(value) =>
                              `${value} Heart${value !== 1 ? "s" : ""}`
                            }
                            icon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: colorRating }}
                              />
                            }
                            emptyIcon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: "rgba(173, 168, 163, 0.11)" }}
                              />
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div className="text-right text-sm ">
                          {lot.fruitiness}
                        </div>
                      </Grid>

                      {/* bitterness */}
                      <Grid item xs={3} />
                      <Grid item xs={12} md={3}>
                        <div className="text-right text-sm font-semibold mt-5">
                          Bitterness
                        </div>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <div className="text-sm ml-5 mt-5">
                          <Rating
                            name="feed"
                            readOnly
                            value={bitterness}
                            max={9}
                            getLabelText={(value) =>
                              `${value} Heart${value !== 1 ? "s" : ""}`
                            }
                            icon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: colorRating }}
                              />
                            }
                            emptyIcon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: "rgba(173, 168, 163, 0.11)" }}
                              />
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div className="text-right text-sm mt-5">
                          {lot.bitterness}
                        </div>
                      </Grid>

                      {/* pungency */}
                      <Grid item xs={3} />
                      <Grid item xs={12} md={3}>
                        <div className="text-right text-sm font-semibold mt-5">
                          Pungency
                        </div>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <div className="text-sm ml-5 mt-5">
                          <Rating
                            name="feed"
                            readOnly
                            value={pungency}
                            max={9}
                            getLabelText={(value) =>
                              `${value} Heart${value !== 1 ? "s" : ""}`
                            }
                            icon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: colorRating }}
                              />
                            }
                            emptyIcon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: "rgba(173, 168, 163, 0.11)" }}
                              />
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div className="text-right text-sm mt-5">
                          {lot.pungency}
                        </div>
                      </Grid>

                      {/* harmony */}
                      <Grid item xs={3} />
                      <Grid item xs={12} md={3}>
                        <div className="text-right text-sm font-semibold mt-5">
                          Harmony
                        </div>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <div className="text-sm ml-5 mt-5">
                          <Rating
                            name="feed"
                            readOnly
                            value={harmony}
                            max={9}
                            getLabelText={(value) =>
                              `${value} Heart${value !== 1 ? "s" : ""}`
                            }
                            icon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: colorRating }}
                              />
                            }
                            emptyIcon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: "rgba(173, 168, 163, 0.11)" }}
                              />
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div className="text-right text-sm mt-5">
                          {lot.harmony}
                        </div>
                      </Grid>

                      {/* green */}
                      <Grid item xs={3} />
                      <Grid item xs={12} md={3}>
                        <div className="text-right text-sm font-semibold mt-5">
                          Green
                        </div>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <div className="text-sm ml-5 mt-5">
                          <Rating
                            name="feed"
                            readOnly
                            value={green}
                            max={9}
                            getLabelText={(value) =>
                              `${value} Heart${value !== 1 ? "s" : ""}`
                            }
                            icon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: colorRating }}
                              />
                            }
                            emptyIcon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: "rgba(173, 168, 163, 0.11)" }}
                              />
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div className="text-right text-sm mt-5">
                          {lot.green}
                        </div>
                      </Grid>

                      {/* ripe  */}
                      <Grid item xs={3} />
                      <Grid item xs={12} md={3}>
                        <div className="text-right text-sm font-semibold mt-5">
                          Ripe
                        </div>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <div className="text-sm ml-5 mt-5">
                          <Rating
                            name="feed"
                            readOnly
                            value={ripe}
                            max={9}
                            sizelarge="true"
                            getLabelText={(value) =>
                              `${value} Heart${value !== 1 ? "s" : ""}`
                            }
                            icon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: colorRating }}
                              />
                            }
                            emptyIcon={
                              <SquareIcon
                                fontSize="inherit"
                                style={{ color: "rgba(173, 168, 163, 0.11)" }}
                              />
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div className="text-right text-sm mt-5">
                          {lot.ripe}
                        </div>
                      </Grid>
                      {/* color */}
                      <Grid item xs={3} />
                      <Grid item xs={4} md={3}>
                        <div className="text-right text-sm font-semibold mt-5">
                          Color
                        </div>
                      </Grid>
                      <Grid item xs={3} md={6}>
                        <div className="text-sm  mt-5">{image}</div>
                        <img src={url} alt="" className="w-20 h-16 -mt-10" />
                      </Grid>

                      {/*  aromas*/}
                      <Grid item xs={3} />
                      <Grid item xs={5} md={3}>
                        <div className="text-right text-sm font-semibold mt-5">
                          Aromas
                        </div>
                      </Grid>
                      <Grid item xs={4} md={6}>
                        <div className="text-sm  mt-5 flex flex-row">
                          {armoes.map((val, key) => {
                            return <span>{val.label},</span>;
                          })}
                        </div>
                      </Grid>

                      {/* probability of occurring */}
                      <Grid item xs={3} />
                      <Grid item xs={7} md={4}>
                        <div className="text-right text-sm font-semibold mt-20">
                          Probability of occurring
                        </div>
                      </Grid>
                      <Grid item xs={2} md={5}>
                        <div className="text-sm  mt-20">{probability}</div>
                      </Grid>

                      {/* defects */}
                      <Grid item xs={3} />
                      <Grid item xs={7} md={3}>
                        <div className="text-right text-sm font-semibold mb-20 mt-5">
                          Defects
                        </div>
                      </Grid>
                      <Grid item xs={2} md={6}>
                        <div className="text-sm  mb-20 mt-5 flex flex-row">
                          {oxidative_defects.map((val, key) => {
                            return <span>{val.label},</span>;
                          })}
                          {fermentation_defects.map((val, key) => {
                            return <span>{val.label},</span>;
                          })}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* on top */}
                  <Grid item xs={2} />
                  <Grid item xs={2} md={11} />
                  <Grid item xs={2} md={1}>
                    <div
                      className={gotop}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <ArrowBackIosIcon />
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
