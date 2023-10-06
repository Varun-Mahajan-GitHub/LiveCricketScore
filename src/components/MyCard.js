import { Button, Card, CardContent, Typography,CardActions, Grid, Dialog, DialogTitle, DialogContentText, DialogActions } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetails } from "../api/api";
import { Height } from "@material-ui/icons";
const MyCard = ({match})=>{
  const [detail,setDetail] = useState({})
  const [open,setOpen] = useState(false)
  const handleClick = (id)=>{
    getMatchDetails(id).then(data=>{
      console.log("Match Data:",data);
      setDetail(data);
      handleOpen()
    }).catch((error)=>console.log("Error:",error))
  }

  const handleClose = ()=>{
    setOpen(false)
  }
  const handleOpen =()=>{
    setOpen(true)
  }

  const getMatchCard=()=>{
    return (
      <Card style={{marginTop:15}}>
        <CardContent>
          <Grid container alignItems="center" justify="center" spacing={4}>
            <Grid item><Typography variant="h5">{match['teams'][0]}</Typography></Grid>
            <Grid item>
              <img style={{width:60}} src={require("../img/vs.png")} alt=""></img>
            </Grid>
            <Grid item><Typography variant="h5">{match['teams'][1]}</Typography></Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center" spacing={4}>
            <Grid item>
            <Button onClick={()=>{
              handleClick(match['id'])
            }} item variant="contained" color="primary">
              Show detail
            </Button>
            </Grid>
            <Grid item>
            <Button item variant="contained" color="primary">
              Start Time {new Date(match['dateTimeGMT']).toLocaleString()}
            </Button>
            </Grid>
            
          </Grid>
        </CardActions>
      </Card>
    )
  }
  const getDialog = ()=>
  {
    return( <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Match Details ..."}</DialogTitle>
      <DialogContentText id="alert-dialog-description">
        <Typography>
          {detail['status']}
        </Typography>
        <Typography>
          Match<span style={{fontStyle:"italic",fontWeight:"bold"}}>
          {detail['matchStarted']?"Started":"Not Started yet"}
          </span>
        </Typography>
        <Typography>
          Score
          <span style={{fontStyle:"italic",fontWeight:"bold"}}>
          {detail['score']}
          </span>
        </Typography>
      </DialogContentText>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
      </DialogActions>
    </Dialog>);
  }
  return <Fragment>
    {getMatchCard()}
    {getDialog()}
  </Fragment>
}

export default MyCard;