import React from 'react'
import {Switch , Route, Redirect} from 'react-router-dom'

import { Grid, Container, Paper, Button , Typography, Modal} from '@material-ui/core'
import Layout from '../Layout/LandingPageLayout'
import Home from './home'
import Services from './services'

import Footer from './footer'
import './LandingApp.css'
const LandingApp = ()=>{
    return(
        <div className="LandingApp">
            <Layout>
                <Route path='/' component={Home}>
                    <Route path='/services' component={Services} />
                    <Route path="/" exact component={Home}/>
                    <Redirect  to="/"/>
                </Route>
            </Layout>
            <Footer/>
        </div>
    )
}

export default LandingApp

