
import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Login from './pages/Login';
import admin from './pages/admin';
export default class App extends React.Component{
    render(){
    return(
    <div>
        <Switch>
        <Route path='/hou' component={admin}/>
        <Route path='/' component={Login}/>
      
        </Switch>

    </div>
    )
    }
    }

