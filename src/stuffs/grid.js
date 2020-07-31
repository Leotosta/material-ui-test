import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@material-ui/core'
import Header from './header'
import Content from '../stuffs/content'
import CircularProgress from '@material-ui/core/CircularProgress'
// import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import global from '../global'


function Gridd() {
  //classesNames 
  const [ isLoading, setLoading ] = useState(true)

  const classes = global()

  useEffect(() => {
    setLoading(false)
  }, [])

  if(isLoading)
    return <CircularProgress className={classes.forLoading} color="primary" />

    return (
      <>
      <Grid container direction="column" spacing={2} >
        <Grid item > 
            <Header />
        </Grid>

        <Grid item container >
            <Content />
        </Grid>
      </Grid>

      <Link to="/layout" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" > Layout </Button>
      </Link>
      </>
    )
}

export default Gridd
