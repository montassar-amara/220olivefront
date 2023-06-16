// Nom du composant : Home 
// Les States :
// lots, setLots : récupérer les lots
// data, setData : filtrere les lots
// Les fonctions :
// chooseColor: changer couleur de card selon categorie
// useEffect : list des lots
// search : filtrer les lots
import Header from "./commun/header";
import Footer from "./commun/footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import CardLot from "../component/commun/cardLot";
import React, { useEffect, useState } from "react";
import axios from "axios";
import apiKeys from "../key/apiKeys";

// changer couleur de card selon categorie
function chooseColor(tags: any) {
  if (tags === "REGULAR QUALITY") return "border-regular";
  if (tags === "PREMIUM QUALITY") return "border-premium";
  if (tags === "GOOD QUALITY") return "border-good";
  if (tags === "ORGANIC") return "border-organic";
  if (tags === "ORGANIC PREMIUM") return "border-organicPremium";
}

// home page
export default function Home(callback) {
  // state
  const [lots, setLots] = React.useState([]);
  const [data, setData] = useState([]);
  
  // list des lots
  useEffect(() => {
    axios.get(apiKeys.URL+"api/LotList/").then(
      (data) => {
        setLots(data.data);
        setData(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
  }, []);

  // filtrer les lots
  const search = (event) => {
    if (event.keyCode === 13) {
      const term = event.target.value.toLowerCase();
      setData(
        lots.filter(
          (l) =>
            l.name.toLowerCase().includes(term) ||
            l.remark.toLowerCase().includes(term)
        )
      );
    }
  };
  return (
    <div className=" flex flex-col h-screen justify-between">
      <div className=" mobile:h-[80%] ">
        {/* entete */}
        <Header showHeader={true} />
      </div>

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="full">
          {/*  **************  partie 1 : search zone *********** */}
          <Box
            className="
            mobile:mt-[80%] mobile2:mt-[55%] 
            sm:mt-[40%] md:mt-[25%] lg:mt-[20%] 
            xl:mt-[15%]  2xl:mt-[8%]
            "
          >
            <Card style={{ border: "none", boxShadow: "none" }}>
              <CardMedia>
                <img src={require("../img/bg01.jpg")} alt="" />
              </CardMedia>
              <CardContent className="">
                <Box
                  className="mb-28 
                  mobile:mt-[-23%] mobile:ml-[-4%]
                  mobile2:ml-[10%] mobile2:-mt-24 
                  sm:mt-[-30%] sm:-ml-1
                  md:mt-[-20%]
                  lg:mt-[-25%]
                  xl:mt-[-20%]
                  "
                >
                  <Grid container spacing={2} className="mobile:text-sm ">
                    {/* partie 1 */}
                    <Grid item sm={1} md={2} />
                    <Grid
                      item
                      sm={10}
                      md={8}
                      className="mobile:text-xl  
                        sm:text-5xl                       
                        lg:text-5xl
                        xl:text-7xl 
                        font-semibold font-serif 
                        "
                    >
                      WELCOME TO 220
                    </Grid>
                    <Grid item sm={1} md={2} />

                    <Grid item sm={1} md={2} />
                    <Grid
                      item
                      sm={10}
                      md={8}
                      className="sm:text-lg  mobile:text-sm"
                    >
                      <p>
                        The world source of Tunisian Extra Virgin Olive Oil
                        <br />
                        Powered by producers from every corner of Tunisia.
                        Certified by our LAB.
                      </p>
                    </Grid>
                    <Grid item sm={1} md={2} />

                    <Grid item sm={1} md={2} />
                    {/* search */}
                    <Grid item sm={10} md={7}>
                      <div className=" text-gray-600 w-full border border-1 border-gray-400 rounded-md">
                        <button
                          type="submit"
                          className="absolute right-0 top-0 mt-3 mr-4 "
                        >
                          <SearchIcon />
                        </button>
                        <input
                          onKeyDown={search}
                          type="search"
                          name="serch"
                          placeholder="Find the Extra Virgin Olive Oil you need"
                          className="w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                        />
                      </div>
                    </Grid>
                    <Grid item sm={1} md={2} />
                    {/* trending */}

                    <Grid item sm={1} md={2} />
                    <Grid item sm={10} md={8}>
                      <div>
                        <b>Trending : </b>
                        <span className="hover:cursor-pointer hover:underline">
                          Fruity,
                        </span>
                        <span className="hover:cursor-pointer hover:underline">
                          EVOO,{" "}
                        </span>
                        <span className="hover:cursor-pointer hover:underline">
                          Organic,{" "}
                        </span>
                        <span className="hover:cursor-pointer hover:underline">
                          Chetoui,{" "}
                        </span>
                        <span className="hover:cursor-pointer hover:underline">
                          Premium{" "}
                        </span>{" "}
                      </div>
                    </Grid>
                    <Grid item sm={1} md={2} />
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Box>
        
          {/*  **************  partie 2 : cards *********** */}

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1/8}>
              <Grid item xs={1} md={1} lg={1} xl={2} />

              <Grid item xs={12} md={8} lg={10} xl={8}>
                <Box className="">
                  <Grid container spacing={1/8} className="mobile:text-sm">
                    {" "}
                    {data.map((val, key) => {
                      const color = chooseColor(val.category.label);
                      return (
                        <Grid item sm={6} md={4} lg={3}>
                          <div
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = "/lotDetails/" + val.id;
                            }}
                          >
                            <CardLot
                              data={val}
                              color={color}
                              colorImage={val.color.label}
                            />
                          </div>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={2} md={1} />
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
