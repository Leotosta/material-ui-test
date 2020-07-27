import React from 'react'
import { Grid } from '@material-ui/core'
import OutlinedCard from './cadr'
import MakerObj from '../stuffs/makersList'

function Content(){

    function getMaker(makerObj){
        return (
            <Grid item xs={0} sm={3}  > 
                <OutlinedCard {...makerObj} />     
            </Grid>

        )
    }

    return (
        <Grid container spacing={1} >   
            { MakerObj.map(makerobj =>  (
                getMaker(makerobj)
            ))}
        </Grid>
    )
}

export default Content