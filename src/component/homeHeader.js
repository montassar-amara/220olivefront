// Nom du composant : MultipleItems : homeHeader
// Les States :
// data : les tags 
// Les fonctions :
// useEffect : récupérer les tags 
import React, { useEffect,useState   } from "react";
import Slider from "react-slick";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from 'axios';
import apiKeys from "../key/apiKeys";

//style  pour scrolling 
 const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
       ]

    };
export default function MultipleItems () {
// state   
  const [data,setData] = useState([]);
// récupérer les tags
  useEffect(() => {
    axios.get(apiKeys.URL+"api/TagsList/").then(
      (data) => {
        setData(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
  }, []);  

  //  corps
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="full" className="">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className="">
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              <style>{cssstyle}</style>
              <Grid item xs={1}>
                On Top <span className="ml-3 text-3xl font-thin">|</span>{" "}
              </Grid>

              <Grid item xs={10}>
                <Slider {...settings} className="mt-2 w-full">
                {data.map((val, key) => {
                      return  <h3 className="px-1 text-[#bfbfbf] hover:text-black hover:cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/filtreTags/"+ val.id;
                      }}>
                       {val.label}</h3>;
                    })}
                
                </Slider>{" "}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    );
  }


const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: gray;
}
`;
