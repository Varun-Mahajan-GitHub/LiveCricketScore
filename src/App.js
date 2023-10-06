import React, { Fragment, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid, Typography } from "@material-ui/core";
function App() {
  const [matches,setMatches] = useState([]);
  useEffect(() => {
    getMatches()
      .then((response) => {
        console.log(response.data)
        if (response && response.data){
          setMatches(response.data)
      }})
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography variant="h4" style={{marginTop:20,marginBottom:10}}>Welcome to Cricket live updates. Sit Back and enjoy</Typography>
      <Grid container>
        <Grid item sm="2"></Grid>
        <Grid item sm="8">
          {matches.map((match)=>(
            <Fragment>
              {match.matchType=="odi"? <MyCard key={match['id']} match={match}/>:""}
            </Fragment>
          ))}
        </Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
}

export default App;
