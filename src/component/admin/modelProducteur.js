// Nom du composant : ModelProducteur
// Les States :
// equipments, setEquipments : récupérer list de l'equipments
// equipment, setEquipment : récupérer valeur de l'equipment
// gouvernorats, setGouvernorats: récupérer list de gouvernorats
// gouvernorat, setGouvernorat : récupérer valeur de gouvernorat
// nom, setNom : récupérer valeur du nom
// prenom, setPrenom : récupérer valeur du  prenom
// capacite, setCapacite : récupérer valeur de la capacite
// telephone, setTelephone : récupérer valeur de telephone
// email, setEmail : récupérer valeur de l'email
// adresse, setAdresse : récupérer valeur d adresse 
// certificat, setCertificat : récupérer valeur de certificat
// certificates, setCertificates : récupérer list de certificats 
// Les fonctions :
// useEffect: pour afficher list des : certificat, equipment, gouvernorat
// handleChange : remplir multiple select de certificats
// addProducteur : methide pour ajouter un producteur 

import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import apiKeys from "../../key/apiKeys";
import { Alert, Box, Stack } from "@mui/material";

// animation pour multiple select
const animatedComponents = makeAnimated();

export default function ModelProducteur() {
  // les states de la page model producteur
  const [equipments, setEquipments] = React.useState([]);
  const [gouvernorats, setGouvernorats] = React.useState([]);
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [equipment, setEquipment] = React.useState("");
  const [gouvernorat, setGouvernorat] = React.useState("");
  const [capacite, setCapacite] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [adresse, setAdresse] = React.useState("");
  const [certificat, setCertificat] = React.useState([]);
  const [certificates, setCertificates] = React.useState([]);
  const [alert, setAlert] = React.useState(false);
  const [alertValidation, setAlertValidation] = React.useState(false);
// les actions de la page: recuperation  de donnee
  useEffect(() => {
    axios.get( apiKeys.URL+"api/CertificateList/").then(
      (data) => {
        setCertificates(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    ); 
    axios.get( apiKeys.URL+"api/EquipmentList/").then(
      (data) => {
        setEquipments(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
    axios.get( apiKeys.URL+"api/GouvernoratList/").then(
      (data) => {
        setGouvernorats(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
  }, []);

  // remplir multiple select : certificats
  const handleChange = (event) => {
    setCertificat(event.map(i=>i.id));
  };
// ajout un producteur
  function addProducteur(
    nom,
    prenom,
    equipment,
    gouvernorat,
    capacite,
    telephone,
    email,
    adresse,
    certificat
  ) {
    const addProducer = {
      first_name: nom,
      last_name: prenom,
      equipment: equipment,
      origin: gouvernorat,
      guaranteed_quantity: capacite,
      phone: telephone,
      email: email,
      address: adresse,
      certificate: certificat,
    };
//  console.log("data :  nom:" + nom +
//  "prenom:" + prenom +
//  "equipment: " + equipment +
//  "gouvernorat:" + gouvernorat +
//  "capacite: " + capacite +
//  "telephone: " + telephone +
//  "email: " + email +
//  "adresse: " + adresse +
//  "certificat: " + certificat)
    axios
      .post( apiKeys.URL+"api/addProducer/", addProducer)
      .then(function (response) {
        setAlertValidation(true)
      })
      .catch(function (error) {
        setAlert(true)

      });
  }

  return (
    <React.Fragment>
      <CssBaseline />
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
               Verifier vous donner s'il vous plait
             </Alert>
             </Grid>
             <Grid item xs={12} md={2} />
             </Grid>
             </Box>
           </Stack>
         )}
               {alertValidation && (
           
           <Stack sx={{ width: "100%" }} spacing={2}>
             <Box sx={{ flexGrow: 1 }} className="m-5">
               <Grid container spacing={2}>
               <Grid item xs={12} md={4} />
               <Grid item xs={12} md={4}>
             <Alert
               onClose={() => setAlert(false)}
               severity="success"
             >
              Producteur ajouter.
             </Alert>
             </Grid>
             <Grid item xs={12} md={2} />
             </Grid>
             </Box>
           </Stack>
         )}
      <Grid container spacing={2}>
        <form onSubmit={() => {
                  addProducteur(
                    nom,
                    prenom,
                    equipment,
                    gouvernorat,
                    capacite,
                    telephone,
                    email,
                    adresse,
                    certificat
                  );
                }}>
        <Grid item xs={5} sm={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={10}>
              <div className="text-black text-2xl font-serif  w-full">
                <i> Ajouter un nouveau producteur</i>
              </div>
            </Grid>
            
            <Grid item xs={12} />
            <Grid
              item
              xs={7}
              sm={7}
              md={7}
              className="border-2 border-gray-300 border-t-0 border-b-0 border-l-0 p-1"
            >
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <div className="text-black text-[90%] font-semibold w-full ml-5">
                    Nom
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <input
                    placeholder="Nom"
                    className="w-full"
                    onChange={(event) => setNom(event.target.value)}
                    required
                  />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <div className="text-black text-[90%] font-semibold w-full ml-5">
                    Prénom
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <input
                    placeholder="Prénom"
                    className="w-full"
                    onChange={(event) => setPrenom(event.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <div className="text-black text-[90%] font-semibold w-full ml-5">
                    Equipment
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <select
                    placeholder="Equipment"
                    className="w-full"
                    defaultValue={-1}
                    onChange={(event) => setEquipment(event.target.value)}
                    required
                  >
                    <option disabled value="-1" hidden>
                      Equipment
                    </option>
                    {equipments.map((val, key) => {
                      return <option value={val.id}>{val.label}</option>;
                    })}
                  </select>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <div className="text-black text-[90%] font-semibold w-full ml-5">
                    Gouvernorat
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <select
                    placeholder="Gouvernorat"
                    className="w-full"
                    required
                    defaultValue={-1}
                    onChange={(event) => setGouvernorat(event.target.value)}
                  >
                    <option disabled value="-1" hidden>
                      Gouvernorat
                    </option>
                    {gouvernorats.map((val, key) => {
                      return <option value={val.id}>{val.label}</option>;
                    })}
                  </select>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <div className="text-black text-[90%] font-semibold w-full ml-5">
                    Capacité de production annuelle
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <input
                    placeholder="Tonne / an"
                    className="w-full"
                    type="number"
                    onChange={(event) => setCapacite(event.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5} sm={5} md={5}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <div className="text-black text-[90%] font-semibold w-full ml-5">
                    Certificats
                  </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <div className="text-black text-[90%] w-full ml-5">
                    <Select
                      color="black"
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      placeholder="Séléctionner Certificats"
                      options={certificates}
                      defaultValue={certificates.id}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className="text-black text-[90%] font-semibold w-full ml-5">
                Téléphone
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <input
                placeholder="Téléphone"
                className="w-full"
                onChange={(event) => setTelephone(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6} sm={6} />
            <Grid item xs={6} sm={3}>
              <div className="text-black text-[90%] font-semibold w-full ml-5">
                Email
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <input
                placeholder="Email"
                className=""
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6} sm={6} />
            <Grid item xs={6} sm={3}>
              <div className="text-black text-[90%] font-semibold w-full ml-5">
                Adresse complete
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <input
                placeholder="Adresse complete"
                className=""
                onChange={(event) => setAdresse(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6} sm={6} />
            <Grid item xs={3} sm={3} />
            <Grid item xs={6} sm={6}>
              <button
                className="               
            w-full justify-items-end border border-1 
            border-black text-center hover:bg-black hover:text-white
             rounded-md p-2 font-[Serif] hover:cursor-pointer bg-white"
                
              >
                Ajouter un producteur
              </button>
            </Grid>
            
          </Grid>
        </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
}
