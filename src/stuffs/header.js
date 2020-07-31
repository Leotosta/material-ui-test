import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/styles';
import { blue, red } from '@material-ui/core/colors';

const useStyles = makeStyles( () => ({
    typografyStyles: {
        flex:1
    }
}))

function Header() {

    const classes = useStyles()

    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography className={ classes.typografyStyles } > take up scape for header </Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
