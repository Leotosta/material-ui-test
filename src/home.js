import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles(theme => ({
    buttonStyle: props => {
        return {
            background: 'blue',
            [theme.breakpoints.down('sm')] : {
                background: 'purple'
            },

            color: props.caaa ? "orange" : "yellow"
        }
    }
}))

function Home(props) {

    const classes = useStyle(props)

    return (
        <div>
            <Button className={classes.buttonStyle} > the button </Button>
        </div>
    )
}

export default Home
