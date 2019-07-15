import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import memoryUtils from '../utils/memoryUtils'
// import {Route,Switch} from 'react-router-dom'
export default class Admin extends React.Component{
    render(){
        const user = memoryUtils.user
        //const user = JSON.parse(localStorage.getItem('user_key') || '{}')
        if(!user._id){
        //  this.props.history.replace('./login')
        return <Redirect to="/"/>
        }
    return(
    <div>
            houyuankang,{
                 user.username
            }
    </div>
    )
    }
    }