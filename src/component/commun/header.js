// Nom du composant : Header
// Les States :
// anchorEl, setAnchorEl : pour ouvrir le menu sous titre 1 (lets work together)
// anchorEl2, setAnchorEl2 : pour ouvrir le menu sous titre 2 (learn)
// {id} : pour récupérer le text a chercher
// value, setValue : text a chercher
// open1 : ouvrir menu 1 (lets work together)
// open2 : ouvrir menu 2 (learn)

// Les fonctions :
// search : méthode pour recherche un mot dans list de lot
// handleClick1 : ouvrir menu lors de clique sur (lets work together)
// handleClick2 : ouvrir menu lors de clique sur (learn)
// handleClose1 : fermer menu lors de clique sur (lets work together)
// handleClose2 : fermer menu lors de clique sur (learn)
// open, setOpen : ouvrir model de  login
// handleClickOpen : ouvrir model login
// handleClose : fermer model login

import SearchIcon from "@mui/icons-material/Search";
import logo from "../../img/logo.png";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import HomeHeader from "../homeHeader";
import HomeHeaderSearch from "../homeHeaderSearch";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useParams } from "react-router-dom";
import SignUp from "./signup";

// style de model de dialog
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// style de titre de model de dialog
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

// model de dialog personnaliser
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// header page
export default function Header({ showHeader, showHeaderSearch }) {
  // state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const { id } = useParams();
  const [value, setValue] = React.useState(id);

  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  // methode pour recherche un mot dans list de lot
  const search = (event) => {
    setValue(event.target.value);
  
    if (event.key === "Enter") { 
        if(value.length>0){        
          window.location.href = "/search/" + event.target.value+"/all/0/0/0";
        }
      }
    
  };
  // methodes : ouvrir menu
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  // methodes : fermer menu
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  // login
  const [open, setOpen] = React.useState(false);
  // ouvrir login
  const handleClickOpen = () => {
    setOpen(true);
  };
  // fermer login
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" className="fixed bg-white z-10">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {/* colonne 1 */}
                <Grid item xs={2} sm={3} md={1}>
                  <div
                    className="hover:cursor-pointer mt-3"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/";
                    }}
                  >
                    <img src={logo} alt="Logo" />
                  </div>
                </Grid>
                {/* colonne 2 */}
                <Grid item xs={1}>
                  <div
                    className="font-serif text-[12px] mt-3
                    sm:-mx-5"
                  >
                    'Every <br />
                    <strong>drop</strong>
                    <br />
                    Matters'
                  </div>
                </Grid>
            {/* colonne 3 : recherche  */}
                <Grid item xs={9} sm={5} md={3}>
                  <div className="mobile:ml-8 lg:-ml-5  xl:-ml-24  mt-7 relative text-gray-600 w-full border border-1 border-gray-400 rounded-md">
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-3 mr-4 "
                    >
                      <SearchIcon />
                    </button>
                    <input
                      value={value}
                      onKeyUp={(event) => search(event)}
                      onChange={(e) => setValue(e.target.value)}
                      type="search"
                      name="serch"
                      required
                      placeholder="Find the Extra Virgin Olive Oil you need"
                      className="w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                    />
                  </div>
                </Grid>
               {/* colonne 4 :  Let's work together */}

                <Grid item xs={4} md={2}>
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
                        <div
                          className=" hover:cursor-pointer hover:text-red-600 mt-9
                       text-gray-400         mobile:w-full normal-case	
                       "
                        >
                          Let's work together
                        </div>
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
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/aboutUS";
                          }}
                          className="p-2 hover:text-red-600 border border-1 border-gray-200 border-t-0 border-l-0 border-r-0"
                        >
                          About us
                        </MenuItem>
                        <MenuItem
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/tailorMadeService";
                          }}
                          className="p-2 hover:text-red-600 border border-1 border-gray-200 border-t-0 border-l-0 border-r-0"
                        >
                          Tailor made service
                        </MenuItem>
                        <MenuItem
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/sellEvoo";
                          }}
                          className="p-2 hover:text-red-600 border border-1 border-gray-200 border-t-0 border-l-0 border-r-0"
                        >
                          Sell your EVOO
                        </MenuItem>
                      </Menu>
                    </div>
                  </ClickAwayListener>
                </Grid>
              {/* colonne 4 : Learn*/}

                <Grid item xs={3} md={1}>
                  <ClickAwayListener
                    onClickAway={() => {
                      handleClose2();
                    }}
                  >
                    <div>
                      <Button
                        aria-controls={open2 ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open2 ? "true" : undefined}
                        onClick={handleClick2}
                      >
                        <div
                          className="hover:cursor-pointer hover:text-blue-900 
                      w-full mt-9 text-gray-400 
                      lg:ml-[50%] normal-case	"
                        >
                          Learn
                        </div>
                      </Button>
                      <Menu
                        id="fade-menu"
                        MenuListProps={{
                          "aria-labelledby": "fade-button",
                        }}
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose2}
                        TransitionComponent={Fade}
                      >
                        <MenuItem
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/allAboutEvoo";
                          }}
                          className="p-2 hover:text-blue-800 border border-1 border-gray-200 border-t-0 border-l-0 border-r-0"
                        >
                          All About EVOO
                        </MenuItem>
                        <MenuItem
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/blog";
                          }}
                          className="p-2 hover:text-blue-800 border border-1 border-gray-200 border-t-0 border-l-0 border-r-0"
                        >
                          Our Blog
                        </MenuItem>
                      </Menu>
                    </div>
                  </ClickAwayListener>
                </Grid>
                {/* colonne 6 : Login */}

                <Grid item lg={3} xs={2} md={1}>
                  <div></div>
                </Grid>
                <Grid item xs={3} md={1}>
                  <div
                    onClick={(e) => {
                      handleClickOpen();
                    }}
                    className="mt-8 border border-1 border-black text-center
                    hover:bg-black hover:text-white rounded-md p-2 font-[Serif] 
                    hover:cursor-pointer
                    "
                  >
                    Login
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
                {/* entete afficher seulement dans home page : on top + tags */}
                <Grid item xs={12}>
                  {showHeader && <HomeHeader />}
                </Grid>
                {/* entete afficher seulement dans recherche page pour filtrage */}
                <Grid item xs={12}>
                  {showHeaderSearch && <HomeHeaderSearch id={id}/>}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
