import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'

import Image from './assets/Ellipse 70.png'
import Elipse from './assets/Ellipse 65.png'
import './Service.css'

const Construction = ()=>{
    return(
        <Container className="">
       <div id="construction" style={{paddingTop:"30px"}}></div>
         
        <Grid container style={{textAlign:"left"}}>
       

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"black", fontSize:"40px", fontWeight:"bold"}}>Construction Cleaning</Typography><br/><br/>

                    <p>
                   
                        Unless you’re training your employees to be cleaning personnel, you risk getting fines from bad garbage sorting and wrong clean up after you’re done building. With experienced professionals, you can expect a clean construction site for your workers and no fines in your mail.
                        Your workers can focus on doing what they do best, while you can make sure the work is done right. That way you can save both time and money.

                     </p><br/><br/>
                     <div style={{width:"100%", textAlign:"center"}}>
                        <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                        <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                    </div><br/>
                     <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                        <Typography variant="h5" style={{fontWeight:"bold"}}>Happy clients</Typography>
                    </ListItem>
                    <div style={{paddingLeft:"50px"}}>
                        <p>  
                        Once you’re done your clients will congratulate you once they see that what you’ve built is ready for use right away. We’ll make sure every detail shines and that what you’ve built is shining to its full potential.<br/>
                        We ensure happy clients with<br/>
                        Proper sorting and cleaning of construction materials that saves you fines.<br/>
                        A shining new building that’s ready for use right away.<br/>
                        Easing a burden off your employees so they can do their best work.


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

export default Construction