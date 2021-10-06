import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Temperatura
        </Typography>
      <Typography component="p" variant="h4">
        30º C
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        11 de julho de 2021
      </Typography>
    
    </React.Fragment>
  );
}