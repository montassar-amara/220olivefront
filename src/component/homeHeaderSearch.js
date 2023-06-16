// Nom du composant : HeaderSearch
// Les States :
//anchorS : open model sensory 
//anchorP : open model price
//anchorQ : open model quantity
//anchorEl : open model sort by relevance
//anchorC : open model chemical
// Les fonctions :
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { set } from "react-hook-form";

export default function HeaderSearch({id}) {
  // open model sort by relevance
  const [anchorEl, setAnchorEl] = React.useState(null);
  // open model price
  const [anchorP, setAnchorP] = React.useState(null);
  // open model quantity
  const [anchorQ, setAnchorQ] = React.useState(null);
  // open model chemical
  const [anchorC, setAnchorC] = React.useState(null);
  // open model sensory
  const [anchorS, setAnchorS] = React.useState(null);
  // les valeurs de recherche
  const [val1P, setVal1P] = React.useState(0);
  const [val2P, setVal2P] = React.useState(0);
  const [val1Q, setVal1Q] = React.useState(0); 
  const [val1C, setVal1C] = React.useState(0);
  const [val2C, setVal2C] = React.useState(0);
  const [val3C, setVal3C] = React.useState(0); 
  const [val1S, setVal1S] = React.useState(0);
  const [val2S, setVal2S] = React.useState(0);
  const [val3S, setVal3S] = React.useState(0); 
 // open model sort by relevance
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
 // open model price
  const handleClickP = (event) => {
    setAnchorP(event.currentTarget);
  };
  // open model quantity
  const handleClickQ = (event) => {
    setAnchorQ(event.currentTarget);
  };
  // open model chemical
  const handleClickC = (event) => {
    setAnchorC(event.currentTarget);
  };
  // open model sensory
  const handleClickS = (event) => {
    setAnchorS(event.currentTarget);
  };
   // close model sort by relevance
  const handleClose1 = () => {
    setAnchorEl(null);
  };
   // close model price
  const handleCloseP = () => {
    setAnchorP(null);
  };
  // close model quantity
  const handleCloseQ = () => {
    setAnchorQ(null);
  };
  // close model chemical
  const handleCloseC = () => {
    setAnchorC(null);
  };
  // close model sensory
  const handleCloseS = () => {
    setAnchorS(null);
  };

// open model sort by relevance
  const open1 = Boolean(anchorEl);
// close model price
  const openP = Boolean(anchorP);
// open model quantity
  const openQ = Boolean(anchorQ);
  // open model chemical
  const openC = Boolean(anchorC);
  // open model sensory
  const openS = Boolean(anchorS);
  const searchPrice = (event) => {
      window.location.href = "/search/"+id+"/FilterByPrice/"+ val1P+"/"+val2P+"/"+0;
  };
  const searchQuantity = (event) => {
      window.location.href = "/search/"+id+"/FilterByQte/"+ val1Q+"/"+0+"/"+0;
  };
  const searchChemical = (event) => {
      window.location.href = "/search/"+id+"/FilterBychemical/"+ val1C+"/"+val2C+"/"+val3C;
  };
  const searchSensory = (event) => {
      window.location.href = "/search/"+id+"/FilterBySensory/"+ val1S+"/"+val2S+"/"+val3S;
  };
  const sortPrice = (event) => {
    window.location.href = "/search/"+id+"/sortPrice/"+ 0+"/"+0+"/"+0;
};
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" className="border border-1 border-gray-300 border-x-0 border-t-0">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className="">
            <style>{cssstyle}</style>
            {/* filter */}
            <Grid item xs={2} md={1} className="text-gray-400 font-bold text-sm ">
              <div className="mt-1">Filter</div> 
            </Grid>
            {/* price */}
            <Grid item xs={3} md={1} className="text-gray-400 hover:cursor-pointer">
              <ClickAwayListener
                onClickAway={() => {
                  handleCloseP();
                }} 
              >
                <div>
                  <Button
                    aria-controls={openP ? "fade-menu" : undefined}
                    aria-expanded={openP ? "true" : undefined}
                    onClick={handleClickP}
                  >
                    <span className="text-gray-400 normal-case	">Price </span>
                    <ExpandMoreIcon className="text-gray-400" />
                  </Button>
                  <Menu
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorP}
                    open={openP}
                    onClose={handleCloseP}
                    TransitionComponent={Fade}
                    className="mobile:w-[80%] sm:w-[40%] xl:w-[30%]"
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1} className="p-1">
                        <Grid item xs={12}>
                          <div className="p-1 text-sm font-bold">
                            Enter your EXW price 
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div>Min</div>
                        </Grid>
                        <Grid item xs={6}>
                          <input
                            // placeholder="0.00"
                            value={val1P}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal1P(e.target.value)}
                          /> 
                        </Grid>
                        <Grid item xs={3}>
                          <div className="text-left">$ / Kg</div>
                        </Grid>
                        <Grid item xs={3}>
                          <div>Max</div>
                        </Grid>
                        <Grid item xs={6}>
                          <input
                            // placeholder="0.00"
                            value={val2P}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal2P(e.target.value)}
                          /> 
                        </Grid>
                        <Grid item xs={3}>
                          <div className="text-left">$ / Kg</div>
                        </Grid>
                        
                        <Grid item xs={3}>
                          <div className="hover:cursor-pointer text-center border border-1 border-black rounded-md italic font-ptSerif text-base"
                           onClick={(e) => {
                            searchPrice(e)
                          }}
                          >
                            Filter
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div className="hover:cursor-pointer text-center border border-1 border-black rounded-md italic font-ptSerif text-base"
                          onClick={(e)=>{   
                            setVal1P(0);
                            setVal2P(0);                    
                          }}
                          >
                            Clear
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  </Menu>
                </div>
              </ClickAwayListener>
            </Grid>
            {/* quantity */}
            <Grid item xs={4} md={1} className="text-gray-400 hover:cursor-pointer">
              <ClickAwayListener
                onClickAway={() => {
                  handleCloseQ();
                }}
              >
                <div>
                  <Button
                    aria-controls={openQ ? "fade-menu" : undefined}
                    aria-expanded={openQ ? "true" : undefined}
                    onClick={handleClickQ}
                  >
                    <span className="text-gray-400 normal-case	">Quantity </span>
                    <ExpandMoreIcon className="text-gray-400" />
                  </Button>
                  <Menu
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorQ}
                    open={openQ}
                    onClose={handleCloseQ}
                    TransitionComponent={Fade}
                    className="mobile:w-[100%] md:w-[60%] lg:w-[35%]"

                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1} className="p-1">
                        <Grid item xs={12}>
                          <div className="p-1 text-sm font-bold">
                          Enter your desired quantity
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div>Min</div>
                        </Grid>
                        <Grid item xs={6}>
                          <input
                            value={val1Q}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal1Q(e.target.value)}
                          /> 
                        </Grid>
                        <Grid item xs={3}>
                          <div className="text-left">MT</div>
                        </Grid>
                        <Grid item xs={3}>
                          <div className="hover:cursor-pointer text-center border border-1 border-black rounded-md italic font-ptSerif text-base"
                           onClick={(e) => {
                            searchQuantity(e)
                          }}>
                            Filter
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div className="hover:cursor-pointer text-center border border-1 border-black rounded-md italic font-ptSerif text-base"
                                onClick={(e)=>{   
                                  setVal1Q(0);
                                }}
                                >
                            Clear
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  </Menu>
                </div>
              </ClickAwayListener>
            </Grid>
            {/* chemical */}
            <Grid item xs={3} md={1} className="text-gray-400 hover:cursor-pointer">

              <ClickAwayListener
                onClickAway={() => {
                  handleCloseC();
                }}
              >
                <div>
                  <Button
                    aria-controls={openC ? "fade-menu" : undefined}
                    aria-expanded={openC ? "true" : undefined}
                    onClick={handleClickC}
                  >
                    <span className="text-gray-400 normal-case	">Chemical </span>
                    <ExpandMoreIcon className="text-gray-400" />
                  </Button>
                  <Menu
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorC}
                    open={openC}
                    onClose={handleCloseC}
                    TransitionComponent={Fade}
                    className="w-[48%]"
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1} className="p-1">
                        <Grid item xs={12}>
                          <div className="p-1 text-sm font-bold">
                          Enter your chemical characteristics
                          </div>
                        </Grid>
                        <Grid item xs={4}>
                          <div className="text-sm">Free Fatty Acids</div>
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            value={val1C}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal1C(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <div className="text-left">%</div>
                        </Grid>
                        <Grid item xs={4}>
                          <div className="text-sm">Peroxide value</div>
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            value={val2C}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal2C(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <div className="text-left">meq O2/Kg</div>
                        </Grid>
                        <Grid item xs={4}>
                          <div className="text-sm">Spectrometry K232</div>
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            value={val3C}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal3C(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={3}/>

                        <Grid item xs={3}>
                          <div className="hover:cursor-pointer text-center border border-1 border-black rounded-md italic font-ptSerif text-base"
                           onClick={(e) => {
                            searchChemical(e)
                          }}
                          >
                            Filter
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div className="hover:cursor-pointer text-center border border-1 border-black rounded-md italic font-ptSerif text-base"
                              onClick={(e)=>{   
                                setVal1C(0);
                                setVal2C(0);
                                setVal3C(0);                    
                              }}
                          >
                            Clear
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  </Menu>
                </div>
              </ClickAwayListener>
            </Grid>
            {/* sensory */}
            <Grid item xs={3} md={1} className="">
              <ClickAwayListener
                onClickAway={() => {
                  handleCloseS();
                }}
              >
                <div>
                  <Button
                    aria-controls={openS ? "fade-menu" : undefined}
                    aria-expanded={openS ? "true" : undefined}
                    onClick={handleClickS}
                  >
                    <span className="text-gray-400 normal-case	">Sensory </span>
                    <ExpandMoreIcon className="text-gray-400" />
                  </Button> 
                  <Menu
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorS}
                    open={openS}
                    onClose={handleCloseS}
                    TransitionComponent={Fade}
                    className="w-[50%]"
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1} className="p-1">
                        <Grid item xs={12}>
                          <div className="p-1 text-sm font-bold">
                            Enter your sensory characteristics
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div>Fruitiness</div>
                        </Grid>
                        <Grid item xs={6}>
                          <input
                            value={val1S}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal1S(e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <div>Bitterness</div>
                        </Grid>
                        <Grid item xs={6}>
                          <input
                            value={val2S}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal2S(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <div>Pungency</div>
                        </Grid>
                        <Grid item xs={6}>
                          <input
                            value={val3S}
                            type="number"
                            className="border border-1 border-gray-400 w-4/5 rounded-md"
                            onChange={(e)=>setVal3S(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <div className="hover:cursor-pointer text-center border border-1 border-black rounded-md italic font-ptSerif text-base"
                           onClick={(e) => {
                            searchSensory(e)
                          }}
                          >
                            Filter 
                          </div>
                        </Grid>
                        <Grid item xs={3}>
                          <div className="hover:cursor-pointer text-center border border-1 border-black rounded-md italic font-ptSerif text-base"
                                onClick={(e)=>{   
                                setVal1S(0);
                                setVal2S(0);                    
                                setVal3S(0);                    
                              }}>
                            Clear
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  </Menu>
                </div>
              </ClickAwayListener>
            </Grid>
            <Grid item xs={4} md={5} />
            
            {/* sort by relevance */}
            <Grid item xs={5} md={2} className="text-right hover:cursor-pointer">
              <ClickAwayListener
                onClickAway={() => {
                  handleClose1();
                }}
              >
                <div>
                  <Button
                    aria-controls={open1 ? "fade-menu" : undefined}
                    aria-expanded={open1 ? "true" : undefined}
                    onClick={handleClick1}
                  >
                    <span className="text-gray-400 normal-case	">Sort by </span>
                    <span className="text-black normal-case	"> Relevance</span>
                    <ExpandMoreIcon className="text-gray-400" />
                  </Button>
                  <Menu
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open1}
                    onClose={handleClose1}
                    TransitionComponent={Fade}
                  >
                    <MenuItem
                      onClick={(e) => {}}
                      className="p-2 border border-1 border-gray-200 border-t-0 
                          border-l-0 border-r-0"
                    >
                      Relevance
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {}}
                      className="p-2  border border-1 border-gray-200 border-t-0 border-l-0 border-r-0"
                    >
                      Newest
                    </MenuItem>
                    <MenuItem
                      
                      className="p-2  border border-1 border-gray-200 border-t-0 border-l-0 border-r-0"
                      onClick={(e) => {
                        sortPrice(e)
                      }}
                    >
                      Price
                    </MenuItem>
                  </Menu>
                </div>
              </ClickAwayListener>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
// style
const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: gray;
}
`;
