import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'

import Image from './assets/Ellipse 75.png'
import Elipse from './assets/Ellipse 65.png'
import './Service.css'
const Construction = (props)=>{
    return(
        <Container fixed  className="">
         <div id="airbnb" style={{paddingTop:"30px"}}></div>
       
        <Grid container style={{textAlign:"left"}}>
       

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"black", fontSize:"40px", fontWeight:"bold"}}>Airbnb Cleaning</Typography><br/><br/>

                    <p>
                   
                 
                        Don’t use more time than necessary on bad guests. Just put out fresh towels and bed linens, then we’ll take care of the cleaning and disinfecting while you do more important things.


                     </p><br/>
                     <div style={{width:"100%", textAlign:"center"}}>
                    <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                    <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                   </div>
                     <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                        <Typography variant="h6" >Wash and vacuum all floors.</Typography>
                    </ListItem>
                    <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                        <Typography variant="h6" >Disinfection of all surfaces and items while avoiding the risk of cross-contamination.</Typography>
                    </ListItem>  
                    
                <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                       <Typography variant="h6" >Beddings and towels washed</Typography>
                    </ListItem>         
                   <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src={Elipse} alt="img"/></ListItemIcon>
                        <Typography variant="h6" >Disinfection and cleaning of bathroom and kitchen.</Typography>
                    </ListItem>        
            
                   
                   
                   
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