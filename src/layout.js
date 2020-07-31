import React from 'react'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import global from './global'


function Layout(){

    const classes = global()

    return(
        <>
            <Grid container direction="column" spacing={1} >
                <Grid item lg={12} >
                    <Paper className={classes.headerStyle} > header </Paper>
                </Grid>
                
                <Grid container item lg={12} sm={12} xs={12} spacing={1} >
                    <Grid item lg={6} sm={6} xs={6} >
                        <Paper className={classes.sect} > hi </Paper>
                    </Grid>

                    <Grid item lg={6} sm={6} xs={6}>
                        <Paper className={classes.sect} > hi </Paper>
                        <Paper className={classes.sect} > hi </Paper>
                        <Paper className={classes.sect} > hi </Paper>
                    </Grid>  
                </Grid>

                <Grid item lg={12}  >
                     {/* <Paper className={classes.foot} > hi </Paper> */}
                     <footer  className={classes.foot} > helow </footer>
                </Grid>

            </Grid>
        </>
    )
}

export default Layout