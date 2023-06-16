// Nom du composant : ModelEducation : lors de clique sur bouton shar your contribution
// Les States :
// nameValue : recuperer valeur de nom
// email : recuperer valeur d'email
// file : recuperer valeur de file
// alert : afficher alert lors d ajout
//  alertErr : afficher alert d erreur lors erreur se produit
// Les fonctions :
// addContribution :  ajout contribution
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Alert, Stack } from "@mui/material";
import apiKeys from "../../key/apiKeys";

export default function ModelEducation() {
  // state
  const [nameValue, setnameValue] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [file, setFile] = React.useState();
  const [alert, setAlert] = React.useState(false);
  const [alertErr, setAlertErr] = React.useState(false);
  // ajouter date d'aujourd hui
  let yourDate = new Date();
  const dd = yourDate.toISOString().split("T")[0];
  // ajout contribution
  function addContribution() {
    // les donnees
    const dataUpload = new FormData();
    dataUpload.append("userName", nameValue);
    dataUpload.append("email", email);
    dataUpload.append("file", file, file.name);
    dataUpload.append("dateCreation", dd);
// ajout dans bd
    axios
      .post( apiKeys.URL+"api/addContribution/", dataUpload)
      .then(function (response) {
        setAlertErr(false);
        setAlert(true);
      })
      .catch(function (error) {
        setAlert(false);
        setAlertErr(true);
      });
  }
  // corps
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full" className="m-16">
        <Box sx={{ flexGrow: 1 }}>
          {/* ajout avec succès   */}
          {alert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert onClose={() => setAlert(false)} severity="success">
                Contribution Added!
              </Alert>
            </Stack>
          )}
          {/* erreur d'ajout  */}
          {alertErr && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert onClose={() => setAlertErr(false)} severity="error">
                Verifier vous donner s'il vous plait
              </Alert>
            </Stack>
          )}
          {/* corps */}
          <Grid container spacing={2}>
            {/* partie gauche : formulaire */}

            <Grid item xs={12} sm={5}>
              <form onSubmit={addContribution}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div>
                      <input
                        placeholder="What is your name ?"
                        className="rounded-md
                    border border-1 border-gray-300 p-4 text-xl font-ptSerif italic"
                        onChange={(e) => {
                          setnameValue(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <input
                        type="email"
                        placeholder="Can we have your email ?"
                        className="rounded-md
                    border border-1 border-gray-300 p-4 text-xl font-ptSerif italic"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    {" "}
                    <div>
                      <input
                        // placeholder="Drag file to upload or click to choose a file"
                        type="file"
                        className="rounded-md w-full
                    border border-1 border-gray-300 p-4 text-xl font-ptSerif italic"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                        required
                      />
                    </div>
                  </Grid>
                  <Grid item xs={2} />
                  <Grid item xs={8}>
                    <button
                      type="submit"
                      className="bg-blue-900 rounded-md p-2 text-white"
                    >
                      <center>SEND</center>
                    </button>
                  </Grid>
                  <Grid item xs={2} />
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12} sm={2} />

           {/* partie droite : image + texte */}

            <Grid item xs={12} sm={5}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img
                    src={require("../../img/LOGO2.png")}
                    alt=""
                    className="w-full h-full"
                  />
                </Grid>
                <Grid item xs={12} className="text-xl italic font-ptSerif">
                  "life is all about sharing. If we are good at something, pass
                  it on."
                </Grid>
                <Grid
                  item
                  xs={12}
                  className="text-xl italic font-ptSerif text-right"
                >
                  Marry Berry.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
