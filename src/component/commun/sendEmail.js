// Nom du composant : SendEmail
// Les States :
// alert : afficher alert lors d ajout
// alertErr : afficher alert d erreur lors erreur se produit
// Les fonctions :
// onSubmit : envoyer email 

import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import emailjs from "emailjs-com";
import apiKeys from "../../key/apiKeys";
import Grid from "@mui/material/Grid";
import OutlinedInput from '@mui/material/OutlinedInput';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function SendEmail() {
  // state
  const [alert, setAlert] = React.useState(false);
  const [alertErr, setAlertErr] = React.useState(false);
  
  // envoyer email 
  const onSubmit = (e) => {
    // Empêche l'actualisation par défaut par le navigateur
    e.preventDefault(); 
    emailjs
      .sendForm(
        "service_el226es",
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          setAlert(true)
        }, 
        (error) => {
          setAlertErr(true)
        }
      );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" className="m-16">         
      {/*  afficher alert lors d ajout */}

      {alert && <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={()=>setAlert(false)} severity="success">
        Message Sent, I'll get back to you shortly
      </Alert>
    </Stack>}
    {/* afficher alert d erreur lors erreur se produit */}
    {alertErr && <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={()=>setAlertErr(false)} severity="error">
      An error occured, Plese try again
      </Alert>
    </Stack>}
    {/* email corps */}
        <Box sx={{ flexGrow: 1 }} className="m-5">
          <form id="form" onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className=" text-3xl">
                  <label>Subject</label>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                 <OutlinedInput                   
                 type="text"
                 name="subject"
                 id="subject"
                 placeholder="subject"
                 required
                 className="border border-1 border-black rounded-md"
                 />
              </Grid>
              <Grid item xs={12} md={6}>
                <div className=" text-3xl">Name</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <OutlinedInput                   
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  required
                  className="border border-1 border-black" />
              </Grid>
              <Grid item xs={12} md={6}>
                <div className=" text-3xl">Email</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <OutlinedInput                   
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="border border-1 border-black" 
                  required/>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className=" text-3xl">Phone</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <OutlinedInput                   
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  required
                  className="border border-1 border-black" />
              </Grid>
              <Grid item xs={12} md={6}>
                <div className=" text-3xl">Message</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <OutlinedInput
                  type="text"
                  name="message"
                  id="message"
                  className="border border-1 border-black"
                  placeholder="Message"
                  required
                />
              </Grid>
              <Grid item xs={12} >
              <input
                type="submit"
                id="button"
                value="Send Email"
                className="w-full bg-black text-3xl p-2 text-white hover:cursor-pointer"
              />
              </Grid>
            </Grid>
          </form>
          {/* envoi de l email */}
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          ></script>
          <script type="text/javascript">
            (function() {emailjs.init("ahBZ3jbOgsdelPXs9")})();
          </script>
        </Box>
      </Container>
    </React.Fragment>
  );
}
