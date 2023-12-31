import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


 const NavBar = ()=>{
  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon/>
        </IconButton>
        
        <Typography variant="h6">
          Live score
        </Typography>
      </Toolbar>
    </AppBar>
  )
 }

 export default NavBar;