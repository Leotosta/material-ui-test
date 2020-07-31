import React, { useState, useEffect } from 'react'
import { Button, Paper, ThemeProvider, createMuiTheme, Switch } from '@material-ui/core'
import  Typography  from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'
import global from './global'


function Home(props) {
    const [isLoading, setLoading ] = useState(true)
    const [ darkMode, setDarkMode ] = useState(false)
    const classes = global(props)
    
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light'
        }
    })

    useEffect(() => {
        setLoading(false)
    }, [])

    if(isLoading)
        return <CircularProgress className={classes.forLoading} color="primary" />
    
    return (
    <ThemeProvider theme={theme}>
        <Paper elevation="12" square style={{height: '100vh'}} >
            <Typography variant="h2" align="center"> helloaaaaaaa </Typography>
            <Button variant="contained" className={classes.buttonStyle}  > the button </Button>
            <Link to="/" style={{ textDecoration: 'none' }} >
                <Button variant="outlined" color="primary" > 
                    NExt
                </Button>
            </Link>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode) }> </Switch>
        </Paper>

    </ThemeProvider>
    )
}

export default Home
