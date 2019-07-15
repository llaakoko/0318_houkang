import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App'
import './api'


ReactDOM.render(
    <BrowserRouter> <App/> </BrowserRouter>


,document.getElementById('root'))