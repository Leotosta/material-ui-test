import React, { useState, useEffect } from 'react'
import { Button, Paper } from '@material-ui/core'
import  Typography  from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'
import global from './global'


function Home(props) {
    const [isLoading, setLoading ] = useState(true)
    const classes = global(props)

    useEffect(() => {
        setLoading(false)
    }, [])

    if(isLoading)
        return <CircularProgress className={classes.forLoading} color="primary" />
    
    return (
        <Paper>
            <Typography variant="h2" align="center"> helloaaaaaaa </Typography>
            <Button variant="contained" className={classes.buttonStyle}  > the button </Button>
            <Link to="/" style={{ textDecoration: 'none' }} >
                <Button variant="outlined" color="primary" > 
                NExt
                 </Button>
            </Link>
        </Paper>
    )
}

export default Home
