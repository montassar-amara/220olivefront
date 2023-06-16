// Nom du composant : Login
// Les States :
// open, setOpen : ouvrir sign up
// alert, setAlert : si utilisateur a ete ajouter dans bd une alert s'affiche
// Les fonctions :
// handleClickOpen : ouvrir le model sign up
// handleClose : fermer le model sign up
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import { Alert, Dialog, Stack } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SignUp from "./signup";
export default function Login() {
  // state
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  // methode ouvrir model signup
  const handleClickOpen = () => {
    setOpen(true);
  };
  // methode fermer model signup

  const handleClose = () => {
    setOpen(false);
    setAlert(true);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" className="m-16">
        {/* Alert lors d'ajout utilisatuer dans bd (signup) s'affiche */}
        {alert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              onClose={() => setAlert(false)}
              variant="filled"
              severity="success"
            >
              User Added! Please Login.
            </Alert>
          </Stack>
        )}
        {/* corps login */}
        <Box sx={{ flexGrow: 1 }} className="m-5">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="mt-[5%]  text-3xl">E-MAIL</div>
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full"
                />
              </Grid>
              <Grid item xs={12}>
                <div className="mt-[10%]  text-3xl">PASSWORD</div>
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full"
                />
              </Grid>
              <Grid item xs={8} />
              <Grid item xs={4}>
                <div className="text-gray-500 text-sm hover:cursor-pointer">
                  {" "}
                  forget your password?
                </div>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <button
                  type="submit"
                  className="w-full bg-black text-3xl p-2 text-white hover:cursor-pointer"
                >
                  <center>LOG IN </center>
                </button>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={8}>
                <u>Don't have an account?</u>{" "}
                <u
                  className="hover:cursor-pointer
         hover:text-red-400"
                  onClick={(e) => {
                    handleClickOpen();
                  }}
                >
                  Sign up
                </u>
                {/* sign up model */}
                <Dialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                  ></DialogTitle>
                  <DialogContent>
                    <SignUp onClose={handleClose} />
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}
