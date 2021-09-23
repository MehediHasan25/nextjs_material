import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';



const Test = () => {



  const useStyles = makeStyles((theme) => ({
    button: {
      color: "white",
      backgroundColor: theme.palette.primary.main,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <p>Hello world</p>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
      >
        Material UI
      </Button>
    </div>
  )
}

export default Test
