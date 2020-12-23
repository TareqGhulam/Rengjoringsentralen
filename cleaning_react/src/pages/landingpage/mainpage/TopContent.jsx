import React from 'react'
import { Grid, Container, Paper, Button , Typography, Modal} from '@material-ui/core'
import Logo from '../assets/image 34.png'
import TopPerson from '../assets/Group 415.png'
import './MainPage.css'

import Pattern1 from '../assets/Vector-1.png'
import Pattern2 from '../assets/Vector.png'
import { useTranslation} from 'react-i18next'
const Top = ()=>{
    const {t} = useTranslation()
    return(
        <div>
            <div style={{position:"absolute", width:"100%"}}>
                <img src={Pattern1} width="60%" style={{height:"25vw", marginLeft:"40%"}} alt="patter"/>
                <img src={Pattern2} width="100%" alt="pattern"/>

            </div>
            <Container>
                
            <Grid container  style={{position:"relative", marginTop:"50px"}}>
                <Grid item xs ={12} sm ={6} md={6} lg={6}>
                    <div className="Left_Top_Grid">
                         {/* <img src={Logo} style={{marginLeft:"30px"}} alt="Logo"/>
                         <Typography variant="h4" style={{ color:"#23548B"}}>Rengjøringssentralen</Typography><br/><br/> */}
 
                         <Typography variant="h3" style={{color:"black", fontWeight:"bolder", paddingTop:"8vw" }}>Cleaning that delights</Typography><br/>
                         <p >Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nullam vivamus massa netus<br/> faucibus ante.</p><br/><br/>
                         <Button variant="contained" style={{backgroundColor:"#325FFF", width:"180px", height:"70px", color:"white", fontSize:"17px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get Quote</Button>
                         <Button variant="outlined" style={{border:"2px solid #325FFF", height:"70px", color:"black", fontSize:"17px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                         
                                                

                    </div>

                </Grid>
                <Grid item xs={12} sm ={6} md={6} lg={6} >
                <img className="TopPersonImage" src={TopPerson}  alt="Logo"/>

                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Top