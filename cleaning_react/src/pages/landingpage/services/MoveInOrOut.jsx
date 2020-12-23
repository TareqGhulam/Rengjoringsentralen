import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'

import Image from './assets/Ellipse 66.png'
import Elipse from './assets/Ellipse 65.png'
import './Service.css'

const MoveInOut = ()=>{
    return(
        <Container className="">
         <div id="moveinout" style={{paddingTop:"30px"}}></div>
        <Grid container style={{textAlign:"left"}}>
        <Grid item xs ={12} sm ={12} md={5} lg={4} style={{display:'block', alignItems:"center", justifyContent:'center'}}>
               <img  src={Image} width="80%"  alt="Image"/><br/><br/>
               {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call us</Button>
                      */}
            </Grid>

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"black", fontSize:"40px", fontWeight:"bold"}}>Move In/Out Cleaning</Typography><br/><br/>

                    <p>
                    Don’t stop the moving party because someone hounds a spot you forgot, or begin the celebration as soon as you come into your new home.
                    The cleanup is often harder and longer than you might expect. You could start with the walls, move to the cabinets, but then suddenly the inside of the oven has to be scraped and in the end, you’ll have to go over every floor again. And finally, one last cleanup of the floor again to get the last dust away.
                    <br/><br/>
                    Use that time to celebrate instead, while we make either your old, or new home shine.

                     </p><br/><br/>
                     <div style={{width:"100%", textAlign:"center"}}>
                                <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                                <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                        </div><br/>
                     <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                        <Typography variant="h5" style={{fontWeight:"bold"}}>Move out</Typography>
                    </ListItem>
                    <div style={{paddingLeft:"50px"}}>
                        <p>  
                        When you move out the home needs to be spotless, or else you risk losing your deposit or being called back by the new owners to clean up the last spots. Save yourself from that bill, we’ll take full responsibility for your home’s cleanliness. Even areas you wouldn’t have thought of will be thoroughly cleaned and spotless once we’re done.
                        So celebrate your new step forward without fear for an unexpected bill.


                        </p>
                    </div> 
                    <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                       <Typography variant="h5" style={{fontWeight:"bold"}}>Move in</Typography>
                    </ListItem>
                    <div style={{paddingLeft:"50px"}}>
                        <p>  
                        You can come to a brand new shining home that’s ready for decoration, or celebration. Whatever you want. The actual moving should be the most exciting part of the process. We guarantee you’ll come home to detail-oriented cleaning that secures you the excellent air quality in your home. From Roof to floor, even the inside of refrigerators, ovens and cabinets.



                        </p>
                    </div>   
                    <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                      <Typography variant="h5" style={{fontWeight:"bold"}}>Move in/out services</Typography>
                    </ListItem>
                    <div style={{paddingLeft:"50px"}}>
                        <p>  
                        Bedroom and living room cleaning<br/>
                        Dust removal, floor cleaning. Cleaning for windowsills, inside of cabinets, refrigerators, ovens and lights.
                        Bathroom<br/>
                        Cleaning and disinfecting of the toilet bowl, floor, sink, shower, mirror and cabinets
                        Kitchen<br/>
                        Inside of cabinets, refrigerator, oven. Cleaning of benches and windowsills.

                        </p>
                    </div>               

                </div>

            </Grid>
           
        </Grid>
    </Container>
    )
}

export default MoveInOut