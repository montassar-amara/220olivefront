// Nom du composant : SignUp
// Les States :
// email : email d'utilisateur 
// username : nom d'utilisateur
// password : mot de passe d'utilisateur
// alert : afficher alert lors d ajout d utilisateuur
// alertErr : afficher alert d erreur lors erreur se produit
// Les fonctions :
// onSignupClick : ajout utilisateur

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";

import React from "react";
import axios from "axios";
import { Alert, Stack } from "@mui/material";
import apiKeys from "../../key/apiKeys";

export default function SignUp(props) {
  // state
  const [email, setEmail] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [alert, setAlert] = React.useState(false);
  const [alertErr, setAlertErr] = React.useState(false);
  
// ajout utilisateur
  const onSignupClick = () => {
    const userData = {
      email,
      username,
      password,
    };
    axios.post(apiKeys.URL+"users/register/", userData).then(
      () => {
        setAlertErr(false);
        setAlert(true);
      },
      (err) => {
        setAlert(false);
        setAlertErr(true);
      }
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" className="m-16">
      {/* afficher alert lors d ajout d utilisateuur */}

        {alert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              onClose={() => setAlert(false)}
              variant="filled"
              severity="success"
            >
              User Added!
            </Alert>
          </Stack>
        )}

        {/* afficher alert d erreur lors erreur se produit */}

        {alertErr && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              onClose={() => setAlertErr(false)}
              variant="filled"
              severity="error"
            >
              Username already exists!
            </Alert>
          </Stack>
        )}
        {/* corps de sign up */}
        <Box sx={{ flexGrow: 1 }} className="m-5">
          <form onSubmit={() => onSignupClick()}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="mt-[5%]  text-3xl">E-MAIL</div>
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={email}
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full"
                />
              </Grid>
              <Grid item xs={12}>
                <div className="mt-[5%]  text-3xl">User Name</div>
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="userName"
                  placeholder="user name"
                  name="userName"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="w-full"
                  required={true}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full"
                  required
                />
              </Grid>
              {/* bouton d ajout utilisateur */}
              <Grid item xs={1} />
              <Grid item xs={10}>
                <button
                  type="submit"
                  className="w-full bg-black text-3xl p-2 text-white hover:cursor-pointer"
                >
                  <center>SIGN UP </center>
                </button>
              </Grid>
              <Grid item xs={11} />
              <Grid item xs={1}>
                <div className="text-gray-400 ">Terms</div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}
