// Nom du composant : Profile d'utilisateur 
// Les States :
// Les fonctions :

import Header from "../commun/header";
import Footer from "../commun/footer";
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// home page
export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // minMaxMobile: minMaxTablet: minMaxLaptop: minMaxLaptopL: minMax4K:
  return (
    <div className=" flex flex-col h-screen justify-between">

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" className="">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Container maxWidth="full" className="mt-56">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <img src={require("../../img/user.png")} alt="" />
                    </Grid>
                    <Grid item xs={8}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} className="text-4xl font-semibold">
                          <div>vb smart</div>
                        </Grid>
                        <Grid item xs={6} className="text-md font-semibold">
                          Company:
                        </Grid>
                        <Grid item xs={6}>
                          tunis
                        </Grid>
                        <Grid item xs={6} className="text-md font-semibold">
                          Phone:
                        </Grid>
                        <Grid item xs={6}>
                          12345678
                        </Grid>
                        <Grid item xs={6} className="text-md font-semibold">
                          Adress:
                        </Grid>
                        <Grid item xs={6}>
                          tunis
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Grid>
            <Grid item xs={2} />

            <Grid item xs={12}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{}}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      icon={<ArrowUpwardIcon />}
                      label=" Offers"
                      {...a11yProps(0)}
                    />
                    <Tab
                      icon={<ShoppingCartIcon />}
                      label="Samples"
                      {...a11yProps(1)}
                    />
                    <Tab
                      icon={<FavoriteBorderIcon />}
                      label="Wishlist"
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  tab 1
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
    </div>
  );
}
