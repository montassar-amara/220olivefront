// Nom du composant : Footer
// Les States :
// Les fonctions :

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// footer page
export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="full"
          className="bg-black  p-6 text-white pb-24 text-sm"
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1} />
              {/* colonne 1 */}
              <Grid item xs={5} sm={2}>
                <div className="font-bold  mb-5 mobile:pt-24 sm:pt-0">220</div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/aboutUS";
                  }}
                  className="hover:cursor-pointer hover:underline"
                >
                  About us
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/tailorMadeService";
                  }}
                  className="hover:cursor-pointer hover:underline"
                >
                  Tailor made services
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/sellEvoo";
                  }}
                  className="hover:cursor-pointer hover:underline"
                >
                  Sell your EVOO
                </div>
              </Grid>
              {/* colonne 2 */}

              <Grid item xs={5} sm={2}>
                <div className="font-bold mb-5 mobile:pt-24 sm:pt-0">
                  {" "}
                  Ressource
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/allAboutEvoo";
                  }}
                  className="hover:cursor-pointer hover:underline"
                >
                  All about EVOO
                </div>
                <div>knowledge vault</div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/blog";
                  }}
                  className="hover:cursor-pointer hover:underline"
                >
                  Blog
                </div>
              </Grid>
              {/* colonne 3 */}

              <Grid item xs={5} sm={2}>
                <div className="font-bold mb-5 mobile:pt-2 mobile:ml-8 sm:pt-0">
                  Terms
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/terms";
                  }}
                  className="hover:cursor-pointer hover:underline mobile:ml-8"
                >
                  Confidentiality
                </div>
              </Grid>

              <Grid item xs={1} sm={2} />
              {/* colonne 4 */}

              <Grid item xs={5} sm={2}>
                <div>000, El Ain K4 Imp Oualha</div>
                <div className="mb-6">Sfax 3062</div>
                <div className="mb-3 minMaxTablet:text-[90%]">
                  hello@220.net.co
                </div>
                <div>+216 55 987 354</div>
                <div className=" mt-5">
                  <button className="readmore">
                    <a href="https://www.linkedin.com/company/twotwoo/">
                      <LinkedInIcon sx={{ fontSize: 30 }} />
                    </a>
                  </button>
                  <button className="readmore">
                    <a href="https://www.facebook.com/twotwoo">
                      <FacebookIcon sx={{ fontSize: 30 }} />
                    </a>
                  </button>
                  <button className="readmore">
                    <a href="https://www.youtube.com/channel/UCYzu3duGzwj2mlQSguF_Phw">
                      <YouTubeIcon sx={{ fontSize: 34 }} />
                    </a>
                  </button>
                </div>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}
