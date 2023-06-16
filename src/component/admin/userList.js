// Nom du composant : UserList
// Les States :
// data, setData: récupérer la list des utilisateurs
// Les fonctions :
// useEffect:  pour récupérer la list des utilisateurs
// IMPORT
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import apiKeys from "../../key/apiKeys";

export default function UserList() {

  //  pour la list des utilisateurs 
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(apiKeys.URL+"users/userRegisterList/").then(
      (data) => {
        setData(data.data);
      }, 
      (error) => {
        // console.log("Error Reading data " + error);
      }
    );  
  }, []); 
  return (
    <Grid container spacing={1} className="p-8">
      <Grid item xs={12}>
        <div className="sm:text-sm md:text-4xl text-blue-900 mb-5">
          List des utilisateurs 
        </div>
      </Grid>
      {/* tableau */}
      <Grid item xs={12}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 'full' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <div className="text-blue-800 text-xl">Mail</div>
                  </TableCell>
                  <TableCell align="right">
                    <div className="text-blue-800 text-xl">UserName</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.email}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.email}
                    </TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}
