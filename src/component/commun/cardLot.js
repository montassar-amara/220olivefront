// Nom du composant : CardLot : detail de chaque lot lors de clique
// Les States :
// Les fonctions :
// chooseColor : pour attribuer couleur au card selon type de categorie 
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//  attribuer couleur au card lot 
function chooseColor(tags: any,hover=false) {
  if (tags === "border-regular") return (hover?"hover:bg-regular":"bg-regular");
  if (tags === "border-premium") return (hover?"hover:bg-premium":"bg-premium");
  if (tags === "border-good") return (hover?"hover:bg-good":"bg-good");
  if (tags === "border-organic") return (hover?"hover:bg-organic":"bg-organic");
  if (tags === "border-organicPremium") return (hover?"hover:bg-organicPremium":"bg-organicPremium");
}
export default function CardLot({ data, color, colorImage }) {
  // recuperer le couleur
  const colorBg = chooseColor(color);
  // style de ligne de la card
  const stylehr = " h-1 my-2 " + colorBg;
  // style card de lot
  const stylecardbg=`hover:cursor-pointer group ${chooseColor(color,true)}`
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full">

        <Card style={{height:"100%"}} className="w-[220px]">
           <CardContent style={{paddingBottom:"0px"}} className={stylecardbg}>
             {/* detail */}
            <div className="group-hover:opacity-0 w-full flex-row flex justify-between">
              <span className="font-bold text-lg">{data.name}</span>
              <span className="font-bold text-lg text-right">{data.price}</span>
            </div>

            <div className="group-hover:opacity-100 relative top-[-20px] left-0 opacity-0 w-full">
              <span className="text-sm text-white "
                       style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} 
              > {data.cultivar.map((val) => { 
              return <p className=""> {val.label}, </p>;
            })} </span>
            </div>
            
            
            <div className="group-hover:opacity-0 w-full flex-row flex justify-between">
              <span className=" text-[80%]">{data.category.label}</span>
              <span className="text-sm text-right">$/Kg</span>
            </div>

            <div
              style={{ marginRight: "-20px", marginLeft: "-20px" }}
              className={stylehr+" group-hover:opacity-0"}
            ></div>

            <div className="group-hover:opacity-0 relative top-0 left-0">
              <img
                src={require("../../img/huileBranche.png")}
                alt=""
                className="relative top-0 left-0"
              />
              <img
                src={require("../../img/" + colorImage + ".png")}
                alt=""
                className="-rotate-90  absolute top-0 left-0 "
              />
              <div className="group-hover:opacity-0 w-full flex-row flex justify-between absolute bottom-1">
              <span className=" text-sm"> K232:{data.k232}</span>
              <span className="text-sm text-right">FFA:{data.ffa} %</span>
            </div>
            </div>
            {/* hover sur la card */}
            <div className="group-hover:opacity-100 relative top-[-160px] left-0 opacity-0 w-full text-sm text-white flex-row flex justify-around">
            <span className="font-bold w-full">Fruitiness  </span>
            <span  className="px-2 font-bold">Bitterness</span>
            <span className="font-bold">Pungency</span>
            </div>
            <div className="group-hover:opacity-100 relative top-[-160px] left-0 opacity-0 w-full text-md text-white flex-row flex justify-around">
            <span className="font-bold">{data.fruitiness}</span>
            <span  className="font-bold"> {data.bitterness}</span>
            <span className="font-bold"> {data.pungency}</span>
            </div>
            <div className="group-hover:opacity-100 relative top-[-20px] left-0 opacity-0 w-full">
              <span className="text-sm text-white "
                       style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} 
              > {data.armoes.map((val) => { 
              return <p className=""> {val.label}, </p>;
            })} </span>
            </div>
          </CardContent>

        </Card>
      </Container>
    </React.Fragment>
  );
}
