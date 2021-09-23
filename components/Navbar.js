import { Block } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';




const Navbar = () => {

  const useStyles = makeStyles((theme) => ({
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: 'block',
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  }));


  const classes = useStyles();


  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.logoLg}>
          Navbar
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          NAV
        </Typography>
        <div className={classes.search}>

        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
