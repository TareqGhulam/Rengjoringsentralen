import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'

import Image from './assets/Ellipse 79.png'
import Elipse from './assets/Ellipse 65.png'
import './Service.css'

const Infection = ()=>{
    return(
        <Container className="">
         <div id="infection" style={{paddingTop:"30px"}}></div>
       
        <Grid container style={{textAlign:"left"}}>
       

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"black", fontSize:"40px", fontWeight:"bold"}}>Infection control for<br/> businesses</Typography><br/><br/>

                    <p>
                   
                    With a new pandemic raging across the world it’s more important with infection control than ever before. Bacteria from surfaces attach themselves to dust in the air and spread from people to people. A single cleaner without a good grip on infection control can risk cross-contaminating surfaces with more bacteria than there were original. The first rag gathers the bacteria and transfers them to the next surface.<br/><br/> This is dangerous for both private homes and businesses. That’s why our cleaners are fully certified in infection control with the knowledge and equipment necessary to rid you of harmful bacteria.

                     </p><br/><br/>
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
                        toilet cleaning.<br/>


                        </p>
                    </div>  
                   
                </div>

            </Grid>
            <Grid item xs ={12} sm ={12} md={5} lg={4} style={{textAlign:"right"}}>
               <img  src={Image} width="80%"  alt="Image"/><br/><br/>
               {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call us</Button>
                      */}
            </Grid>
           
        </Grid>
    </Container>
    )
}

export default Infection