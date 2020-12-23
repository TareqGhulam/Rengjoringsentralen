import React from 'react'

import { Grid, Container, Button , Typography, ListItem, ListItemIcon, li} from '@material-ui/core'

import Image from './assets/Ellipse 64.png'
import Elipse from './assets/Ellipse 65.png'

import './Service.css'

const Office = ()=>{
    return(
        <Container fixed >
       <div id="office" style={{paddingTop:"30px"}}></div>
       
        <Grid container >
            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"black", fontSize:"40px", fontWeight:"bold"}}>Office cleaning</Typography><br/><br/>

                    <p>
                    How you take care of your building tells your customers how you’ll take care of them. Give them a good first impression to make future negotiations much easier.<br/><br/>
                    Not only that, but you risk the infection spreading among your employees. Bacteria fly in the air by attaching themselves to dust that’s kicked up by people and wind. These bacteria have the potential to cause allergic reactions or spread infection from one employee to the next. The bacteria spread to any surface they can reach either by touch or dust. And visitors or customers have the potential to take these with them and spread the bacteria even further.<br/><br/>

                    Our cleaning removes dirt and prevents cross-contamination with effective disinfection. In cooperation with you, we’ll make a plan that fits your needs perfectly and gives your employees and customers a healthy environment.
                   </p><br/><br/>
                     {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                     <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call us</Button>
                      */}
                    <div style={{width:"100%", textAlign:"center"}}>
                    <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                    <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                </div><br/>                  
              
                    <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                        <Typography variant="h5" style={{fontWeight:"bold"}}>Our cleaning includes.</Typography>
                    </ListItem>
                    <div style={{paddingLeft:"50px"}}>
                        <p>  
                        Kitchen cleaning<br/>
                        Vacuuming<br/>
                        Garbage pickup<br/>
                        Infection control of surfaces<br/>
                        toilet cleaning.

                        </p>
                    </div> 
                    
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

export default Office