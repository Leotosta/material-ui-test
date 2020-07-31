import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Gridd from '../src/stuffs/grid' 
import Layout from './layout'
import Home from './home'
import SignIn from './login'

function RouterDom(){

    return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Gridd} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/layout" exact component={Layout} />
                    <Route path="/SignIn" exact component={SignIn}/>
                </Switch>
            </Router>
    )
}

export default RouterDom