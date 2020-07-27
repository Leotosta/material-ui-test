import React from 'react';
import { Button, Typography } from '@material-ui/core'
// import './App.css';
import { makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  helloThereSytles: {
    fontStyle: 'oblique',
    fontSize: '200px'
  }
})

function App() {

  const classes = useStyles()

  return (
    <div >
      <Typography color="secondary" className={classes.helloThereSytles} variant="h1" >
        Hi Bro
      </Typography>

      <Button color="primary" variant="outlined"  >  hi there </Button>
    </div>
  );
}

export default App;
