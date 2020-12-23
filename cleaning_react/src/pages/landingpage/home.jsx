import React from 'react'
import { Grid, Container, Paper, Button , Typography, Modal} from '@material-ui/core'
import TopContent from './mainpage/TopContent'
import Services from './mainpage/OurService'
import WhyUs from './mainpage/WhyUs'
import Certification from './mainpage/Certification'
import About from './mainpage/AboutUs'
import Map from './mainpage/Map'

const Home = ()=>{
    return(
        <div>
            <TopContent/><br/><br/><br/><br/>
            <Services/><br/><br/><br/><br/>
            <WhyUs/><br/><br/><br/><br/>
            <Certification/><br/><br/><br/><br/>
            <About/><br/><br/><br/><br/>
            <Map/><br/><br/><br/><br/>
        </div>
        
    )
}

export default Home