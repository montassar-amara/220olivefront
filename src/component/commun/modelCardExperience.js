// Nom du composant : ModelCardExperience
// Les States :
// dataExperience,dataExperiences : pour récupérer information d'expérience
// Les fonctions :

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


export default function ModelCardExperience() {
  // envoyer donnee de experience dans storage pour afficher detail lors de clique sur bouton view more
  const dataExperience = localStorage.getItem("dataExperience");
  const dataExperiences = JSON.parse(dataExperience);
  // style de nombre qui a afficher dans le  card (taille + margin left)
  const style = dataExperiences.color + " ml-[100%] mobile:text-6xl sm:text-8xl";

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* partie gauche */}
          <Grid item xs={5}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <div className="mt-[10%] mobile:text-lg sm:text-3xl">{dataExperiences.name}</div>
              </Grid>
              <Grid item xs={6}>
                <div className={style}>{dataExperiences.id}</div>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={12}>
                <img
                  src={require("../../img/number/number" +
                    dataExperiences.id +
                    ".png")}
                  alt=""
                  className="h-full"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}/>
          {/* partie droite : why+ how + what*/}
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <div className="text-xl font-bold">WHY</div>
                <div className="text-sm">{dataExperiences.why}</div>
                </Grid>
                <Grid item xs={12}>
                <div className="text-xl font-bold">HOW</div>
                <div className="text-sm">{dataExperiences.how}</div>
                </Grid>
                <Grid item xs={12}>
                <div className="text-xl font-bold">WHAT</div>
                <div className="text-sm">{dataExperiences.what}</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Box>
    </div>
  );
}
