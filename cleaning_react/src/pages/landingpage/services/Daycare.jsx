import React from 'react'
import { Grid, Container, Button , Typography} from '@material-ui/core'

import Image from './assets/Ellipse 58.png'
// import './MainPage.css'
import './Service.css'

const DayCare = (props)=>{
    
    return(
        <Container id={props.id} fixed >
       <div id="daycare" style={{paddingTop:"10px"}}></div>
       
            <Grid container >
                <Grid item xs ={12} sm ={12} md={7} lg={8}>
                    <div style={{textAlign:"left"}}>
                    
                         <Typography style={{ color:"black", fontSize:"40px", fontWeight:"bold"}}>Daycare cleaning</Typography><br/><br/>

                        <p>
                            Since the 1940s daycares have been sources of disease outbreaks, and with the more and more children being admitted to daycare there’s an even higher risk of infection. Without proper infection control and cleaning, the children are in danger for outbreaks of diseases like Hepatitis A and other infections.<br/><br/>
                            Also, there’s
                            Siden 1940 tallet har barnehager kilder for smittespredning og med flere og flere barn som blir satt inn på barnehage blir det mer og mer smittefare. Uten god infeksjonskontroll og rengjøring står barna i fare for massive utbrudd av sykdommer som hepatitt A og mange andre sykdommer.
                            These infections don’t have to come from physical contact, they can come from a table, a pencil, any surface that’s been touched by someone infected.
                            Infection control that eliminates cross-contamination
                            Our cleaners are certified in infection control.<br/><br/> They prevent cross-contamination from surfaces and ensure any infectious zones stay disinfected hours after cleaning.
                            Our system uses:
                            Colour coded equipment to avoid cross-contamination
                            Prioritised cleaning according to a thorough plan.
                            Resources for hygiene education for both children and employees.
                            A daycare that puts the children’s health as a priority is one that’s earned the parent’s trust.
                            </p><br/><br/>
                            <div style={{width:"100%", textAlign:"center"}}>
                                <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                                <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                            </div><br/>
                         {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                         <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call us</Button>
                          */}
                                                

                    </div>

                </Grid>
                <Grid item xs ={12} sm ={12} md={5} lg={4} style={{textAlign:"right"}}>
                   <img  src={Image} width="80%"  alt="Image"/><br/><br/>
                   {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                    <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"15px" ,fontWeight:"bold" , marginBottom:"20px", padding:"0 10px 0 10px" }}>Call us</Button>
                          */}
                </Grid>
            </Grid>
        </Container>
    )
}

export default DayCare