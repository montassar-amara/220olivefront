// Nom du composant : CardExperience : de la page tailor made service  pour afficher  contenu pour  les 9 card des experiences 
// Les States :
// open, setOpen : afficher model qui contient description sur l'experience 
// Les fonctions :
// handleClickOpen handleClose : ouvrir/fermer model qui contient description sur l'experience 

// IMPORT
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { cardExperienceData } from "../../data/cardExperience";
import ModelCardExperience from "./modelCardExperience";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// style de la card
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
// style de titre de dialog
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
//  titre de dialog
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// card experience
export default function CardExperience() {
  // state ouvrir model
  const [open, setOpen] = React.useState(false);
// ouvrir fermer model
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="full"
        className="mt-[3%] mobile:text-sm sm:text-8xl"
      >
        {/* afficher les 9 experiences */}
        {cardExperienceData.map((val, key) => {
          const style = "mobile:text-5xl sm:text-8xl font-sans"+val.color;
          return (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={2} />

                <Grid item xs={7} sm={2} className="p-5">
                  <img
                    src={require("../../img/number/number" + val.id + ".png")}
                    alt=""
                  />
                </Grid>
                <Grid item xs={3} sm={1}>
                  <div className={style}>{val.id}</div>
                  <div className="mt-[-32%] ml-8 mobile:text-sm sm:text-lg">{val.name}</div>
                </Grid>
                <Grid item xs={1} />

                <Grid item xs={12} sm={4}>
                  <div className="text-lg">{val.description}</div>
                  {/* details d'experience  */}
                  <div className="font-bold text-lg my-2 hover:cursor-pointer">
                    <div
                      className="border border-none text-black"
                      onClick={(e) => {
                        localStorage.setItem(
                          "dataExperience",
                          JSON.stringify(val)
                        );
                        handleClickOpen();
                      }}
                    >
                      view more
                    </div>
                    {/* model de detail */}
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
                        <ModelCardExperience />
                      </DialogContent>
                    </BootstrapDialog>
                  </div>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </Box>
          );
        })}
      </Container>
    </React.Fragment>
  );
}
