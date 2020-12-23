import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'

import TopImage from './services/assets/Group 414.png'
import Jan from './services/assets/Ellipse 13.png'
import Lovorka from './services/assets/Ellipse 14.png'
import Alice from './services/assets/Ellipse 15.png'
import Elle from './services/assets/Ellipse 16.png'
import Monica from './services/assets/Ellipse 17.png'

import Certification from './mainpage/Certification'


import Pattern1 from './assets/Vector-1.png'
import Pattern2 from './assets/Vector.png'
import Pattern3 from './assets/team pattern.png'
import Logo2 from  './assets/image 34.png'
import LogoTest from  './assets/logo2.png'



const  Team = ()=>{
    return(
        <div style={{marginTop:"50px"}}>
               <div style={{position:"absolute", width:"100%"}}>
                <img src={Pattern1} width="60%" style={{height:"20vw", marginLeft:"40%"}} alt="patter"/>
                <img src={Pattern2} width="100%" alt="pattern" style={{ marginTop:"-200px", height:"20vw"}}/>

              </div>
            

         <Container fixed  style={{position:"relative"}}>
             {/* <img  src={LogoTest} width="30%"/> */}
              {/* <p style={{ color:"#23548B"}}>  <img src={Logo2} style={{width:"100px", paddingLeft:"50px"}} alt="Logo"/> <br/>Rengjøringssentralen</p> */}
            <Grid container>
        

                <Grid item xs ={12} sm ={12} md={6} lg={7}>
                    <div style={{textAlign:"left"}}>
                    
                        <Typography variant="h3" style={{  fontWeight:"bold"}}>About <span style={{ color:"#23548B"}}>us</span></Typography><br/><br/>

                        <p>
                        Cleaning that you can enjoy
                        Rengjøringssentralen is proud of the quality of service we provide our clients. We’re always looking forward to new and interesting challenges where we can go further than expected. We renew floors, washes and disinfect to a thorough and professional level so you can take it easy for the rest of the day.
                        Do you have a challenge for us? Look at our offers and find what fits you

                        </p><br/><br/><br/><br/>
                        <div style={{width:"100%", textAlign:"center"}}>

                            <Button variant="contained" style={{backgroundColor:"#325FFF", width:"180px", height:"70px", color:"white", fontSize:"17px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                            <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"70px", color:"black", fontSize:"17px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                        </div>
                            
                    
                    </div>

                </Grid>
                <Grid item xs ={12} sm ={12} md={6} lg={5} style={{textAlign:"right"}}>
                <img  src={TopImage} width="70%"  alt="Image"/><br/><br/>
                    
                </Grid>
            
            </Grid>
        </Container>
        <div style={{ height:"auto", position:"relative" ,backgroundColor:"#E5EBFF",marginTop:"50px"}}><br/>
                <Typography variant="h5" style={{fontWeight:"bold"}}>Our Team</Typography>
            <Container fixed  style={{marginTop:"50px"}}>
                <Grid container justify="center" spacing={3}>
                    <Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src={Jan} alt="jan" width="70%"/><br/>
                        <h4><b>Jan</b></h4>
                    </Grid>
                    <Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src={Lovorka} alt="Lovorka" width="70%"/><br/>
                        <h4><b>Lovorka</b></h4>
                    </Grid><Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src={Alice} alt="Alice" width="70%"/><br/>
                        <h4><b>Alice</b></h4>
                    </Grid><Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src={Elle} alt="Elle" width="70%"/><br/>
                        <h4><b>Elle</b></h4>
                    </Grid><Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src={Monica} alt="Monica" width="70%"/><br/>
                        <h4><b>Monica</b></h4>
                    </Grid>

                </Grid>
            </Container>

        </div>
             <div style={{position:"absolute", width:"100%"}}>
                <img src={Pattern1} width="60%" style={{height:"20vw", marginLeft:"40%"}} alt="patter"/>
                <img src={Pattern2} width="100%" alt="pattern" style={{ marginTop:"-100px", height:"25vw"}}/>

              </div>
            <div style={{position:"relative"}}><Certification/></div>

            {/* <div style={{position:"absolute", width:"100%"}}>
               
                <img src={Pattern3} width="100%" alt="pattern" style={{ marginTop:"200px", height:"20vw"}}/>

              </div> */}
        <Container fixed style={{marginTop:"60px", position:"relative"}}>
            <Typography variant="h3" style={{fontWeight:"bold",marginTop:"60px"}}>About <span style={{color:"#0051AA"}}>us</span></Typography><br/>

            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md ={4} lg={4} >
                <Typography variant="h1" style={{color:"#0051AA", fontWeight:"bold"}}>7</Typography><br/>
                <Typography variant="h5"><span style={{fontWeight:"bold"}}>YEARS</span> IN BUSINESS</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md ={4} lg={4} >
                <Typography variant="h1" style={{color:"#0051AA" ,fontWeight:"bold"}}>3000</Typography><br/>
                <Typography variant="h5">Cleaning<br/> <span style={{fontWeight:"bold"}}>HOURS</span> DELIVERED</Typography>
                
                </Grid>

                <Grid item xs={12} sm={6} md ={4} lg={4} >
                <Typography variant="h1" style={{color:"#0051AA", fontWeight:"bold"}}>5</Typography><br/>
                <Typography variant="h5"><span style={{fontWeight:"bold"}}>CITIES</span> Offer our <br/>service</Typography>
                
                </Grid>

            </Grid><br/><br/>
        </Container>
    </div>
    )
}

export default Team