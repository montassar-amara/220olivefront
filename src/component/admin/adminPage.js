// Nom du composant : AdminPage : page pour remplir les informations de lot 
// **************** Les States ****************** 
// open, setOpen: ouvrir fermer le model ajouter un producteur
// category, setCategoy: récupérer list de la catégorie
// categoryValue, setcategoryValue: récupérer valeur de la catégorie
// producer, setProducer: récupérer list de la producteur
// producerValue, setproducerValue: récupérer valeur de la producteur
// tags, setTags: récupérer list de la tags
// tagsValue, settagsValue: récupérer valeur de la tags
// periode, setPeriode: récupérer list de la période récolte
// periodR, setperiodR: récupérer valeur de la Période récolte
// cultivar, setCultivar: récupérer list de la cultivar
// cultivarValue, setcultivarValue: récupérer valeur de la cultivar
// couleur, setCouleur: récupérer list de la couleur
// colorValue, setcolorValue: récupérer valeur de la couleur
// defaultF, setDefautF: récupérer list de la Défauts fermentaires
// defautFValue, setdefautFValue: récupérer valeur de la  Défauts fermentaires
// defaultO, setDefautO: récupérer list de la Défauts oxydatifs
// defautOValue, setdefautOValue: récupérer valeur de la Défauts oxydatifs
// pbDefauts, setpbDefauts: récupérer list de la Probabilité défauts sensoriels
// pbDValue, setpbDValue: récupérer valeur de la Probabilité défauts sensoriels
// aromes, setAromes: récupérer list de la aromes
// aromesValue, setaromesValue: récupérer valeur de la aromes
// nameValue, setnameValue: récupérer valeur de la Naming 220 du lot

// price, setprice: récupérer valeur de la prix
// qteDispo, setqteDispo: récupérer valeur de la Quantité disponible
// aciditeValue, setaciditeValue: récupérer valeur de pourcentage d'acidité
// k232Value, setk232Values: récupérer valeur de valeur k232
// indiceValue, setindiceValue: récupérer valeur de l'indice de peroxyde
// k270Value, setk270Value: récupérer valeur de valeur k270
// deltaKValue, setdeltaKValue: récupérer valeur de valeur Delta K
// fruiteValue, setfruiteValue: récupérer valeur de l'intensité Fruité
// amertumeValue, setamertumeValue: récupérer valeur de l'intensité Amertume
// piquantValue, setpiquantValue: récupérer valeur de l'intensité Piquant
// equilibreValue, setequilibreValue: récupérer valeur de l'intensité Équilibre
// greenValue, setgreenValue: récupérer valeur de l'intensité vert
// ripeValue, setripeValue: récupérer valeur de l'intensité ripe
// remark, setremark: récupérer valeur de la remarque
// **************** Les fonctions ******************
// handleChangeTags : changer valeur de multiselect de tag 
// handleChangeCultivar : changer valeur de multiselect de cultivar 
// handleChangeAromes : changer valeur de multiselect de aromes 
// handleChangeDefautF : changer valeur de multiselect de défauts fermentaires 
// handleChangeDefautO: changer valeur de multiselect de défauts oxydatifs 
//  handleClose : fermer la model ajouter producteur
// handleToggle : changer valeur de model
// useEffect : categoryList pour afficher la list de Producteur, Tags, Periode, Cultivar, Couleur, Aromes, Probabilite, DefautsFermentaires, DefautsOxydatifs 
// addLot : ajouter lot

// IMPORT 
import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import ModelProducteur from "./modelProducteur";
import DialogContent from "@mui/material/DialogContent";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import apiKeys from "../../key/apiKeys";
import { Alert, Stack } from "@mui/material";


// style de select input + animation select
const customStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "blue" : "red",
  }),
};
const animatedComponents = makeAnimated();

export default function AdminPage() {
  // les states
  const [open, setOpen] = React.useState(false);
  const [category, setCategoy] = React.useState([]);
  const [producer, setProducer] = React.useState([]);

  const [tags, setTags] = React.useState([]);
  const [tagsValue, settagsValue] = React.useState([]);

  const [periode, setPeriode] = React.useState([]);
  const [cultivar, setCultivar] = React.useState([]);
  const [couleur, setCouleur] = React.useState([]);
  const [aromes, setAromes] = React.useState([]);
  const [pbDefauts, setpbDefauts] = React.useState([]);
  const [defaultF, setDefautF] = React.useState([]);
  const [defaultO, setDefautO] = React.useState([]);

  const [nameValue, setnameValue] = React.useState("");
  const [categoryValue, setcategoryValue] = React.useState([]);
  const [producerValue, setproducerValue] = React.useState("");
  const [price, setprice] = React.useState();
  const [periodR, setperiodR] = React.useState([]);
  const [qteDispo, setqteDispo] = React.useState([]);
  const [cultivarValue, setcultivarValue] = React.useState([]);
  const [aciditeValue, setaciditeValue] = React.useState([]);
  const [k232Value, setk232Values] = React.useState([]);
  const [indiceValue, setindiceValue] = React.useState([]);
  const [k270Value, setk270Value] = React.useState([]);
  const [deltaKValue, setdeltaKValue] = React.useState([]);
  const [fruiteValue, setfruiteValue] = React.useState([]);
  const [amertumeValue, setamertumeValue] = React.useState([]);
  const [piquantValue, setpiquantValue] = React.useState([]);
  const [equilibreValue, setequilibreValue] = React.useState([]);
  const [greenValue, setgreenValue] = React.useState([]);
  const [ripeValue, setripeValue] = React.useState([]);
  const [colorValue, setcolorValue] = React.useState([]);
  const [aromesValue, setaromesValue] = React.useState([]);
  const [pbDValue, setpbDValue] = React.useState([]);
  const [defautFValue, setdefautFValue] = React.useState([]);
  const [defautOValue, setdefautOValue] = React.useState([]);
  const [remark, setremark] = React.useState([]);
  const [alert, setAlert] = React.useState(false);
  const [alertValidation, setAlertValidation] = React.useState(false);

  // handel change pour les multiple select
  const handleChangeTags = (event) => {
    settagsValue(event.map((i) => i.id));
  };
  const handleChangeCultivar = (event) => {
    setcultivarValue(event.map((i) => i.id));
  };
 
  const handleChangeAromes = (event) => {
    setaromesValue(event.map((i) => i.id));
  };

  const handleChangeDefautF = (event) => {
    setdefautFValue(event.map((i) => i.id));
  };

  const handleChangeDefautO = (event) => {
    setdefautOValue(event.map((i) => i.id));
  };
  // close de model ajouter un producteur
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  // use effect pour les actions sur base de donnee
  useEffect(() => {
    axios.get( apiKeys.URL+"api/categoryList/").then(
      (data) => {
        setCategoy(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    ); 
    axios.get( apiKeys.URL+"api/ProducteurList/").then(
      (data) => {
        setProducer(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
    axios.get( apiKeys.URL+"api/TagsList/").then(
      (data) => {
        setTags(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
    axios.get( apiKeys.URL+"api/PeriodeList/").then(
      (data) => {
        setPeriode(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    ); 
    axios.get( apiKeys.URL+"api/CultivarList/").then(
      (data) => {
        setCultivar(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
    axios.get( apiKeys.URL+"api/CouleurList/").then(
      (data) => {
        setCouleur(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
    axios.get( apiKeys.URL+"api/AromesList/").then(
      (data) => {
        setAromes(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    ); 
    axios.get( apiKeys.URL+"api/ProbabiliteList/").then(
      (data) => {
        setpbDefauts(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    ); 
    axios.get( apiKeys.URL+"api/DefautsFList/").then(
      (data) => {
        setDefautF(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
    axios.get( apiKeys.URL+"api/DefautsOList/").then(
      (data) => {
        setDefautO(data.data);
      },
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );
  }, []);
  // methode pour ajout un lot
  function addLot(
    nameValue,
    categoryValue,
    producerValue,
    tagsValue,
    price,
    periodR,
    qteDispo,
    cultivarValue,
    aciditeValue,
    k232Value,
    indiceValue,
    k270Value,
    deltaKValue,
    fruiteValue,
    amertumeValue,
    piquantValue,
    equilibreValue,
    greenValue,
    ripeValue,
    colorValue,
    aromesValue,
    pbDValue,
    defautFValue,
    defautOValue,
    remark
  ) {
    const addLot = {
      name: nameValue,
      price: price,
      quantity: qteDispo,
      acidity: aciditeValue,
      peroxide: indiceValue,
      k232: k232Value,
      k270: k270Value,
      ffa: 0,
      deltaK: deltaKValue,
      fruitiness: fruiteValue,
      bitterness: amertumeValue,
      pungency: piquantValue,
      harmony: equilibreValue,
      green: greenValue,
      ripe: ripeValue,
      remark: remark,
      category: categoryValue,
      color: colorValue,
      period: periodR,
      probability: pbDValue,
      producer: producerValue,
      tags: tagsValue,
      cultivar: cultivarValue,
      armoes: aromesValue,
      fermentation_defects: defautFValue,
      oxidative_defects: defautOValue,
    };
    // console.log(
    //   "nameValue: " + nameValue,
    //   " category " + categoryValue,
    //   " producerValue " + producerValue,
    //   " tagsValue " + tagsValue,
    //   " price " + price,
    //   " periodR " + periodR,
    //   " qteDispo " + qteDispo,
    //   " cultivarValue " + cultivarValue,
    //   " aciditeValue " + aciditeValue,
    //   " k232Value " + k232Value,
    //   " indiceValue " + indiceValue,
    //   " k270Value " + k270Value,
    //   " deltaKValue " + deltaKValue,
    //   " fruiteValue " + fruiteValue,
    //   " amertumeValue " + amertumeValue,
    //   " piquantValue " + piquantValue,
    //   " equilibreValue " + equilibreValue,
    //   " greenValue " + greenValue,
    //   " ripeValue " + ripeValue,
    //   " colorValue " + colorValue,
    //   " aromesValue " + aromesValue,
    //   " pbDValue " + pbDValue,
    //   " defautFValue " + defautFValue,
    //   " defautOValue " + defautOValue,
    //   " remark: " + remark
    // );
    axios
      .post( apiKeys.URL+"api/addLot/", addLot)
      .then(function (response) {
       // window.location.reload();
       setAlertValidation(true)
      })
      .catch(function (error) {
        // alert("verifier vous donner s'il vous plait");
        setAlert(true);
      });
  }
  // contenue de la page
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg">
     
        {/* entete de page admin titre bonjour et bouton  ajout producteur */}
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardMedia>
            <img src={require("../../img/bg01.jpg")} alt="" />
          </CardMedia>
          <CardContent className="mt-[-17%]">
            <Box className="mb-8">
              <Grid container spacing={2}>
                <Grid item sm={12} md={6}>
                  <div className="italic text-2xl font-serif minMaxMobile:text-sm">
                    Bonjour{" "}
                  </div>
                </Grid>
                {/* bouton d'ajout producteur */}
                <Grid item sm={12} md={3}>
                  <div
                    className="md:ml-3 
                    mobile:text-sm md:text-sm
                    md:w-[80%]  mobile:w-[100%]          
                    w-full ml-[20%] mt-[-1%] 
                    italic
                    justify-items-end border border-1 
                    border-black text-center hover:bg-black hover:text-white
                    rounded-md p-2 font-[Serif] hover:cursor-pointer bg-white "
                    onClick={handleToggle}
                  >
                    Ajouter un producteur
                  </div>

                 {/* model d'ajout producteur */}
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent
                      sx={{
                        width: 495,
                        height: 540,
                        boxShadow: 10,
                        borderRadius: 1,
                        backgroundColor: "white",
                      }}
                    >
                      <ModelProducteur />
                    </DialogContent>
                  </Dialog>
                </Grid>
                <Grid item sm={12} md={12}>
                  <div className="italic md:text-2xl font-serif mobile:text-sm">
                    Cette page te permet d'ajouter un lot d'huile
                  </div>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card> 
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
              Lot ajouter.
             </Alert>
             </Grid>
             <Grid item xs={12} md={2} />
             </Grid>
             </Box>
           </Stack>
         )}
        {/* box pour informations de base */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div className="">
                <Divider />
              </div>
              <p>
                <u>
                  <b>Informations de base</b>
                </u>
              </p>
            </Grid>
            <Grid item md={2} xs={4}>
              <div>Naming 220</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setnameValue(e.target.value);
                  }}
                  placeholder="Définir nom du lot"
                  className="w-full p-1 border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />

            <Grid item md={2} xs={4}>
              <div>Catégorie</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <select
                  placeholder="Sélectionner une catégorie"
                  className="w-full p-1 border border-1 border-red-500 
                    rounded-sm text-gray-400"
                  defaultValue={-1}
                  onChange={(event) => setcategoryValue(event.target.value)}
                >
                  <option disabled value="-1" hidden>
                    Séléctionner une catégorie
                  </option>
                  {category.map((val, key) => {
                    return <option value={val.id}>{val.label}</option>;
                  })}
                </select>
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Producteur</div>
            </Grid>

            <Grid item md={4} xs={7}>
              <div>
                <select
                  placeholder="Sélectionner un producteur"
                  className="w-full p-1 border border-1 border-red-500 rounded-sm text-gray-400"
                  defaultValue={-1}
                  onChange={(event) => setproducerValue(event.target.value)}
                >
                  <option disabled value="-1" hidden>
                    Séléctionner un producteur
                  </option>
                  {producer.map((val, key) => {
                    return (
                      <option value={val.id}>
                        {val.first_name}_{val.equipment.label}_
                        {val.origin.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Tags</div>
            </Grid>

            <Grid item md={4} xs={7}>
              <div>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  placeholder="Séléctionner le ou les Tags"
                  options={tags}
                  defaultValue={tags.id}
                  onChange={handleChangeTags}
                  required
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item xs={12} md={12} />
          </Grid>
        </Box>
        {/* box pour informations d'approvisionnement + analyse chimique + analyse sensorielle */}
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div className="mt-2">
                <Divider />
              </div>

              <p>
                <u>
                  <b>Informations d'approvisionnement</b>
                </u>
              </p>
            </Grid>
            <Grid item md={2} xs={4}>
              <div>Prix</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                  type="number"
                  placeholder="Prix au kilo proposé par le producteur"
                  className="w-full p-1 border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Période récolte</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <select
                  placeholder="Période récolte"
                  className="w-full p-1 border border-1 border-red-500 rounded-sm text-gray-400"
                  defaultValue={-1}
                  onChange={(event) => setperiodR(event.target.value)}
                >
                  <option disabled value="-1" hidden>
                    Période récolte
                  </option>
                  {periode.map((val, key) => {
                    return <option value={val.id}>{val.label}</option>;
                  })}
                </select>
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Quantité disponible</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setqteDispo(e.target.value);
                  }}
                  type="number"
                  placeholder="Quantité disponible pour ce lot en Tonne"
                  className="w-full p-1 border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Cultivar</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <Select
                  closeMenuOnSelect={false}
                  styles={customStyles}
                  components={animatedComponents}
                  isMulti
                  placeholder="Séléctionner le ou les cultivar"
                  options={cultivar}
                  defaultValue={cultivar.id}
                  onChange={handleChangeCultivar}
                  required
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item xs={12} md={12}>
              <div className="mt-2">
                <Divider />
              </div>

              <p>
                <u>
                  <b>Analyse chimique</b>
                </u>
              </p>
            </Grid>
            <Grid item md={2} xs={4}>
              <div>Acidité</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setaciditeValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Pourcentage acidité"
                  className="w-full p-1 border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>K232</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setk232Values(e.target.value);
                  }}
                  type="number"
                  placeholder="valeur K232"
                  className=" w-full p-1 border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>indice de peroxyde</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setindiceValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Valeur peroxyde"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>K270</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setk270Value(e.target.value);
                  }}
                  type="number"
                  placeholder="Valeur K270"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Delta K</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setdeltaKValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Valeur delta K"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item xs={12} md={12}>
              <div className="mt-2">
                <Divider />
              </div>

              <p>
                <u>
                  <b>Analyse sensorielle</b>
                </u>
              </p>
            </Grid>
            <Grid item md={2} xs={4}>
              <div>Fruité</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setfruiteValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Intensité fruité"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div>Remarques et paragraphe d'introduction : </div>
            </Grid>

            <Grid item md={2} xs={4}>
              <div>Amertume</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setamertumeValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Intensité amertume"
                  className="p-1 w-full  border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              {" "}
              <textarea
                onChange={(e) => {
                  setremark(e.target.value);
                }}
                rows=""
                cols=""
                placeholder="Remarques Panel. Les points forts. Les points faibles. Présentation du producteur. Usages. Recommandations."
                className="w-full h-[580%] 
                  border border-1 border-red-500 rounded-sm"
                style={{ resize: "none" }}
              ></textarea>
            </Grid>
            <Grid item md={2} xs={4}>
              <div>Piquant</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setpiquantValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Intensité piquant"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Équilibre</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setequilibreValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Intensité équilibre"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Green</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setgreenValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Intensité vert"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Ripe</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <input
                  onChange={(e) => {
                    setripeValue(e.target.value);
                  }}
                  type="number"
                  placeholder="Intensité ripe"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Couleur</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <select
                  placeholder="Séléctionner une couleur"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm text-gray-400"
                  defaultValue={-1}
                  onChange={(e) => {
                    setcolorValue(e.target.value);
                  }}
                >
                  <option disabled value="-1" hidden>
                    Séléctionner une couleur
                  </option>
                  {couleur.map((val, key) => {
                    return <option value={val.id}>{val.label}</option>;
                  })}
                </select>
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Aromes</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <Select
                  color="black"
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  placeholder="Séléctionner les aromes"
                  options={aromes}
                  defaultValue={aromes.id}
                  onChange={handleChangeAromes}
                  required
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
            <Grid item md={2} xs={4}>
              <div>Probabilité défauts sensoriels</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <select
                  placeholder="Sélectionner probabilité"
                  className="p-1 w-full border border-1 border-red-500 rounded-sm text-gray-400"
                  defaultValue={-1}
                  onChange={(e) => {
                    setpbDValue(e.target.value);
                  }}
                >
                  <option disabled value="-1" hidden>
                    Séléctionner probabilité
                  </option>
                  {pbDefauts.map((val, key) => {
                    return <option value={val.id}>{val.label}</option>;
                  })}
                </select>
              </div>
            </Grid>
            <Grid item md={6} xs={1} />

            <Grid item md={2} xs={4}>
              <div>Défauts fermentaires</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <Select
                  color="black"
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  placeholder="Séléctionner défauts fermentaires"
                  options={defaultF}
                  defaultValue={defaultF.id}
                  onChange={handleChangeDefautF}
                  required
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />

            <Grid item md={2} xs={4} style={{ marginBottom: "20px" }}>
              <div>Défauts oxydatifs</div>
            </Grid>
            <Grid item md={4} xs={7}>
              <div>
                <Select
                  color="black"
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  placeholder="Séléctionner défauts oxydatifs"
                  options={defaultO}
                  defaultValue={defaultO.id}
                  onChange={handleChangeDefautO}
                  required
                />
              </div>
            </Grid>
            <Grid item md={6} xs={1} />
          </Grid>
        </Box>
        {/* box pour bouton valider ajout lot d'huile */}
        <Box sx={{ flexGrow: 1 }}>
          <div className="h-15 mt-2">
            <Divider sx={{ borderBottomWidth: 5 }} />
          </div>

          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <div
                className="                   
            w-full h-[60%] m-5 justify-items-end border border-1 text-xl ml-[30%]
            border-black text-center hover:bg-black hover:text-white rounded-md p-2 font-[Serif] 
            hover:cursor-pointer bg-white"
                onClick={() => {
                  addLot(
                    nameValue,
                    categoryValue,
                    producerValue,
                    tagsValue,
                    price,
                    periodR,
                    qteDispo,
                    cultivarValue,
                    aciditeValue,
                    k232Value,
                    indiceValue,
                    k270Value,
                    deltaKValue,
                    fruiteValue,
                    amertumeValue,
                    piquantValue,
                    equilibreValue,
                    greenValue,
                    ripeValue,
                    colorValue,
                    aromesValue,
                    pbDValue,
                    defautFValue,
                    defautOValue,
                    remark
                  );
                }}
              >
                Valider ajout lot d'huile
              </div>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
