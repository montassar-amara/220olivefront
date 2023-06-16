// Nom du composant : userListAuth
// Les States :
// alert, setAlert : si utilisateur n'existe pas une alert s'affiche
// username, setUsername : nom d'utilisateur pour s'authentifier
// password, setPassword : mot de passe d'utilisateur pour s'authentifier
// auth, setAuth : verifier si utilisateur authentifier pour afficher list utilisateur si non page d'authentification
// Les fonctions :
// handleSubmit : methode s'authentifier 
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import { Alert, Dialog, Stack } from "@mui/material";
import UserList from "./userList";
import axios from "axios";
import apiKeys from "../../key/apiKeys";

export default function UserListAuth() {
  // state
  const [alert, setAlert] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [auth, setAuth] = React.useState(false);
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const user = {
        "username": username,
        "password": password
    }
    axios
    .post( apiKeys.URL+"users/token/", user)
    .then(function (response) {
        // console.log(JSON.stringify(response?.data))
        setAuth(true)

    })
    .catch(function (error) {
      setAlert(true)

    });
    }
  
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" className="m-16">
          {/* formulaire d 'ajout lot */}
            {auth ? (<UserList />):(
                // s'authentifier
                <section>
        {/* Alert lors l'utilisateur n'existe pas */}
        {alert && (
           
           <Stack sx={{ width: "100%" }} spacing={2}>
             <Box sx={{ flexGrow: 1 }} className="m-5">
               <Grid container spacing={2}>
               <Grid item xs={12} md={4} />
               <Grid item xs={12} md={4}>
             <Alert
               onClose={() => setAlert(false)}
               severity="error"
             >
               L'utilisateur n'existe pas.
             </Alert>
             </Grid>
             <Grid item xs={12} md={2} />
             </Grid>
             </Box>
           </Stack>
         )}
        
        {/* corps login */}
        <Box sx={{ flexGrow: 1 }} className="m-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* user name */}
              <Grid item xs={12} md={4} />
              <Grid item xs={12} md={8}>
                <div className="mt-[5%]  text-3xl">User Name</div>
              </Grid>
              {/* input user */}
              <Grid item xs={12} md={4} />
              <Grid item xs={12} md={4}>
                <Input
                  id="user"
                  placeholder="Username"
                  name="Username"
                  className="w-full"
                  required
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={4} />
              {/* pwd */}
              <Grid item xs={12} md={4} />
              <Grid item xs={12} md={6}>
                <div className="mt-[10%]  text-3xl">PASSWORD</div>
              </Grid>
              <Grid item xs={12} md={2} />
              {/* input pwd */}
              <Grid item xs={12} md={4} />

              <Grid item xs={12} md={4}>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full"
                  required
                  onChange={(e)=>setPassword(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} md={4} />
              {/* login */}
              <Grid item xs={8} md={2} />
              <Grid item xs={1} md={2} />
              <Grid item xs={10} md={4}>
                <button
                  type="submit"
                  className="w-full bg-black text-3xl p-2 text-white hover:cursor-pointer"
                >
                  <center>LOG IN </center>
                </button>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </form>
        </Box></section>
      )}
      </Container>
    </React.Fragment>
  );
}
