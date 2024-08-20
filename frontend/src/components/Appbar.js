import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  appBar: {
    backgroundColor: '#424242', // Indigo background color for the AppBar
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    color: 'fafafa', // White color for the text
    flexGrow: 1,
    textAlign: 'center', // Center align the text
  },
}));

export default function Appbar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
           <b>Spring Boot React Full Stack Application </b> 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
