// Nom du composant : AllAboutEvoo
// Les States :
// divStyleJ : style de div de couleur rouge 
// divStyleR : style de div de couleur jaune 
// open : ouvrir share your contribtuion
// Les fonctions :
// handleOpen : ouvrir share your contribtuion
// handleToggle : fermer share your contribtuion

import Header from "./commun/header";
import Footer from "./commun/footer";
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import ModelEducation from "../component/commun/modelEducation";
import DialogContent from "@mui/material/DialogContent";
const divStyleJ={
  zIndex: 7,
  height: "40px",
  width: "45px",
  top: "0px",
  background: "rgb(255, 222, 0)",
  radius: "0px"
}
const divStyleR={
  zIndex: 7,
  height: "40px",
  width: "40px",
  background: "rgb(227, 6, 19)",
  radius: "0px"
}
// all about evoo page
export default function AllAboutEvoo () {
  // model share your contribtuion
    const [open, setOpen] = React.useState(false);
    // ouvrir share your contribtuion
    const handleOpen = () => {
      setOpen(false);
    };
    // fermer share your contribtuion
    const handleToggle = () => {
      setOpen(!open);
    };
    return (
      <div className=" flex flex-col h-screen justify-between">
                 {/* entete */}
          <div >
          <Header />
        </div>
        {/* ************* corps ********** */}
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="full" className="mobile:mt-[45%] md:mt-[15%] lg:mt-[10%]  minMaxTablet:mt-[25%] minMaxMobile:mt-[70%]">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {/* partie 1 :texte+image */}
                <Grid item xs={12} sm={6}>
                  <div className="font-serif  text-3xl mt-8 mb-8"><i>We love to share our knowledge</i></div>
                  <div className="text-lg  font-medium mt-8 mb-8">It helps us feel "good". We need it to help our community. </div>
                  <div className="text-lg  font-medium ">Here you can learn from +20 years experience in olive oil industry.
                     Doing some experience helped us avoid making some very costly mistakes. 
                     We humbly try to cover all aspects of our business.</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>            
                    <img src={require("../img/sharingKnowledge.jpg")} alt="" />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div style={divStyleJ} className="mobile:ml-[-5%] sm:ml-[-4%] lg:ml-[-3%] xl:ml-[-2%]"> </div>
                </Grid>
                <Grid item xs={4}/>
              
               {/* partie 2 :texte */}
                <Grid item  xs={12} sm={5}>
                <div className="font-serif  text-4xl  "><i><center>Want to contribute ?<br/>Any suggestion is welcome</center></i></div>
                     <div className="font-serif  text-lg mt-8 mb-8 "><center>
                      You have a question ? an opinion ? <br/>
                      Let’s extend our knowledge and gain from each other's experiences.</center></div>
                      <center><button className="mb-10 bg-[#27348B] text-white px-7 py-3 text-sm font-bold rounded-md"
                      onClick={handleToggle}
                      >
                        SHARE YOUR CONTRIBUTION</button></center>
                </Grid>
                {/* model de share your contribution */}
                <Dialog open={open} onClose={handleOpen}
                >
                    <DialogContent
                      sx={{
                        boxShadow: 10,
                        borderRadius: 1,
                        backgroundColor: "white",
                      }}
                    >
                      <ModelEducation />
                    </DialogContent>
                </Dialog>
                <Grid item xs={3}/>
                <Grid item xs={11}/>
                {/* div rouge */}
                <Grid item xs={1}>
                  <div style={divStyleR} className="mobile:
                  sm:ml-[86%]  "> </div>
                </Grid>     
                {/* partie 2 :texte+image */}
                <Grid item xs={12} sm={6}>
                  <div>            
                    <img src={require("../img/vault.jpg")} alt="" />
                  </div>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={12} sm={4}>
                  <div className="font-serif  text-3xl mt-8 mb-8"><i>Knowledge vault</i></div>
                  <div className="text-lg  font-medium mt-8 mb-8">One of the key values 220 brings to customers and partners is our knowledge Extra Virgin Olive Oil production processes, process control, quality analysis and logistics that benefit us and customers.  </div>
                  <div className="text-lg  font-medium ">We've established the Knowledge Vault to capture and share our insight, understanding and experience.</div>
                  <button className="mt-10 bg-[#27348B] text-white px-7 py-3 text-sm font-bold rounded-md">ENTER THE VALUT</button>

                </Grid>

                <Grid item xs={12} />          
                <Grid item xs={12} /> 
                <Grid item xs={12} />          
                <Grid item xs={12} /> 
                <Grid item xs={12} />          
                <Grid item xs={12} />          
                <Grid item xs={12} /> 
                <Grid item xs={12} />          
                <Grid item xs={12} />          
                {/* partie 3 :texte+image */}
                <Grid item xs={12} sm={4} >
                  <div className="font-serif  text-3xl mt-8 mb-8"><i>Reinventing Olive Oil tasting training</i></div>
                  <div className="text-lg  font-medium mt-8 mb-8">You want to master olive oil tasting ? Try our online training that combines theory and practice. +70 courses with Dr Sonda. Where, she shares her technical knowledge, stories and secrets. </div>
                  <div className="text-lg  font-medium ">Learn anywhere, anytime. </div>
                  <button className="mt-10 bg-[#27348B] text-white px-7 py-3 text-sm font-bold rounded-md">LEARN MORE</button>

                </Grid>      
                  <Grid item xs={3} />          
                <Grid item  xs={12} sm={5}>
                  <div>            
                    <img src={require("../img/thawk220.png")} alt="" />
                  </div>
                </Grid>
                <Grid item xs={12} />          
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

