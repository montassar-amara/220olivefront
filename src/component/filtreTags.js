// Nom du composant : FiltreTags : lors de clique sur tags un filtrage se produit
// Les States :
// data, setData : récupérer information du tag
// lots, setLots : filtrer les cards selon tag type apartir backend
// title, setTitle : titre de tag
//   idd : id de tag récupérer
// Les fonctions :
// chooseColor : changer couleur de card selon categorie
// useEffect : récupérer tag information ; filtrage
import Header from "./commun/header";
import Footer from "./commun/footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardLot from "./commun/cardLot";
import React, { useEffect, useState } from "react";
import axios from "axios";
import apiKeys from "../key/apiKeys";
import { useParams } from "react-router-dom";

// changer couleur de card selon categorie
function chooseColor(tags: any) {
  if (tags === "REGULAR QUALITY") return "border-regular";
  if (tags === "PREMIUM QUALITY") return "border-premium";
  if (tags === "GOOD QUALITY") return "border-good";
  if (tags === "ORGANIC") return "border-organic";
  if (tags === "ORGANIC PREMIUM") return "border-organicPremium";
}

export default function FiltreTags(callback) {
  const [data, setData] = useState([]);
  const [lots, setLots] = useState([]);
  const [title, setTitle] = useState("");
  const { idd } = useParams();

  useEffect(() => {
    axios.get(apiKeys.URL+"api/getTag/"+idd+"/").then(
      (data) => {
        setData(data.data);
        setTitle(data.data.label) 

      }, 
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );  
           axios.get(apiKeys.URL+"api/findLotByTag/"+idd).then(
      (data) => {
        setLots(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    ); 
  }, []); 
    return (   
    <div className=" flex flex-col h-screen justify-between">       
      <div className=" mobile:h-[80%]">
        {/* entete */}
        <Header showHeader={true} />
      </div>
      
      {/* corps */}
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="full"
          className="mobile:mt-[100%] mobile2:mt-[70%] sm:mt-[40%]
           md:mt-[40%] lg:mt-[20%] xl:mt-[15%]"
        > 
          {/* entete : title + description */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1} md={1} lg={1} xl={2} />

              <Grid item xs={11} md={8} lg={10} xl={8}>        
                     <div className="mobile:text-3xl font-bold">{title}</div>
              </Grid>
              <Grid item md={3} lg={1} xl={2}/>        

              <Grid item xs={1} md={1} lg={1} xl={2} />

              <Grid item xs={8} md={6} lg={5} xl={4}>    
                <div className="mobile:text-md sm:text-xl">{data.description} </div>
              </Grid>
              <Grid item xs={3} md={5} lg={6} xl={6}/>        

            </Grid>
          </Box>
          {/* affichage des cards filtrer */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1} md={1} lg={1} xl={2} />

              <Grid item xs={12} md={8} lg={10} xl={8}>
                <Box className="">
                 <Grid container spacing={2} className="mobile:text-sm ">
                    {" "}
                    {lots.map((val, key) => {
                      const color = chooseColor(val.category.label);
                      return (
                        <Grid key={key} item sm={6} md={4} lg={3} xl={3}>
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
