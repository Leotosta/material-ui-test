import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Gridd from '../src/stuffs/grid' 
import Home from './home'

function RouterDom(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Gridd} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default RouterDom