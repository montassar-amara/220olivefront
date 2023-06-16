// Nom du composant : Search
// Les States :
// lots, setLots : récupérer les lots depuis base de donnee
// data, setData : récupérer les lots filtrez selon titre
// title, setTitle : changer titre dans zone de recherche
// id : récupérer mot a chercher

// Les fonctions :
// chooseColor : changer couleur de card selon categorie
// useEffect : recuperer list lot + chercher un lot donnee dans cette list + changer valeur de titre de zone de recherche 

import Header from "./header";
import Footer from "./footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardLot from "./cardLot";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import apiKeys from "../../key/apiKeys";

function chooseColor(tags: any) {
  if (tags === "REGULAR QUALITY") return "border-regular";
  if (tags === "PREMIUM QUALITY") return "border-premium";
  if (tags === "GOOD QUALITY") return "border-good";
  if (tags === "ORGANIC") return "border-organic";
  if (tags === "ORGANIC PREMIUM") return "border-organicPremium";
}

export default function Search(callback) {
  // state
  const [lots, setLots] = React.useState([]);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("All results");
  const { id } = useParams();
  const { type } = useParams();
  const { val1 } = useParams();
  const { val2 } = useParams();
  const { val3 } = useParams();

  useEffect(() => {
    axios.get( apiKeys.URL+"api/LotList/").then(
      (data) => {
        setLots(data.data);
        let term = id?id.toLowerCase():'';
        let result = [];        
        // if (type==='all'){
        // result = data.data.filter(
        //   (l) =>
        //     l.name.toLowerCase().includes(term) ||
        //     l.remark.toLowerCase().includes(term) 
        // )
        // setData(result);  
        // setTitle(id)
        // }
        
        if (type==='FilterByPrice'){
          result = data.data.filter(
            (l) =>
             ( l.name.toLowerCase().includes(term) ||
              l.remark.toLowerCase().includes(term) )&&
              (l.price>=val1 && l.price<=val2)
          )
          setData(result);  
          setTitle(id)
          }
          else
        if (type==='FilterByQte'){
          result = data.data.filter(
            (l) =>
             ( l.name.toLowerCase().includes(term) ||
              l.remark.toLowerCase().includes(term) )&&
              (l.quantity>=val1)
          )
          setData(result);  
          setTitle(id)
          }
          else
        if (type==='FilterBychemical'){
          result = data.data.filter(
            (l) =>
             ( l.name.toLowerCase().includes(term) ||
              l.remark.toLowerCase().includes(term) )&&
              // eslint-disable-next-line eqeqeq
              ((l.acidity==val1 ) && (l.peroxide==val2 ) && (l.k232==val3))
          )
          setData(result);  
          setTitle(id)
          }
          else
        if (type==='FilterBySensory'){
          result = data.data.filter(
            (l) =>
             ( l.name.toLowerCase().includes(term) ||
              l.remark.toLowerCase().includes(term) )&&
              // eslint-disable-next-line eqeqeq
              (l.fruitiness==val1 ) && (l.bitterness==val2 ) && (l.pungency==val3)
          )
          setData(result);  
          setTitle(id)
          }    
          else
          if (type==='sortPrice'){
            result = data.data.filter(
              (l) =>
               l.name.toLowerCase().includes(term) ||
                l.remark.toLowerCase().includes(term) 
            ).sort((a,b)=>a.price-b.price) 
            setData(result); 
            setTitle(id)
            }      
            else {
              result = data.data.filter(
                (l) =>
                  l.name.toLowerCase().includes(term) ||
                  l.remark.toLowerCase().includes(term) 
              )
              setData(result);  
              setTitle(id)
            }
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
        <Header showHeaderSearch={true} />
      </div>
      {/* corps */}
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="full"
          className="mobile:mt-[100%] mobile2:mt-[70%] sm:mt-[40%] md:mt-[20%] lg:mt-[15%]"
        >
          <Box sx={{ flexGrow: 1 }}>
            {/* entete de corps */}
            <Grid container spacing={2}>
              <Grid item xs={2} />
              <Grid item xs={10}>
                <div className="mobile:text-3xl font-bold">{title}</div>
              </Grid>
              <Grid item xs={2}  />
              <Grid item xs={10}> 
                <div className="mobile:text-md ">{data.length} results</div>
              </Grid>
            </Grid>
          </Box>

          {/* corps : des cards */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1} md={1} lg={1} xl={2} />
              <Grid item xs={12} md={8} lg={10} xl={8}>
                <Box className="">
                 <Grid container spacing={2} className="mobile:text-sm ">
                    {" "}
                    {data.map((val, key) => {
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
