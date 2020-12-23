import React from 'react'

import { Grid, Container, Button , Typography} from '@material-ui/core'

import Image from './assets/Ellipse 59.png'
import './Service.css'

const HomeOrApartment = ()=>{
    return(
        <Container className="">
       <div id="homeapartment" style={{paddingTop:"30px"}}></div>
       
        <Grid container style={{textAlign:"left"}}>
        <Grid item xs ={12} sm ={12} md={5} lg={4} style={{display:'block', alignItems:"center", justifyContent:'center'}}>
               <img  src={Image} width="80%"  alt="Image"/><br/><br/>
                
            </Grid>

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography  style={{ color:"black", fontSize:"40px", fontWeight:"bold"}}>Home/Apartment <br/>cleaning</Typography><br/><br/>

                    <p>
                    Come to a clean home where you can enjoy the sun streaming through clean windows while you do what you’ve dreamt of doing all day.

                    Our cleaners use only the best equipment with eco-friendly and safe cleaning products. They’ll go from roof to floor to ensure no dirt is left when they’re done.

                    Let us bother with the more challenging rooms. Just choose whichever rooms you’d like us to clean so you can make better use of your time.
                
                   
                     </p><br/>
                     <div style={{width:"100%", textAlign:"center"}}>
                    <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                    <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                   </div>
                    <div style={{paddingLeft:"30px"}}>
                        <h2><b> Kitchen Cleaning Service</b></h2>
                        <p>Floor, benches, cabinet doors, inside microwave and kitchen appliances.</p>
                        <h2><b> Bathroom Cleaning Service</b></h2>
                        <p>Disinfection and scrubbing of walls, tiles, toilet bowl, shower and cleaning of any glass and mirrors.</p>
                        <h2><b> Other services</b></h2>
                        <p>Cleaning of window sills, dust removal, spider web removal and tidying up.</p>
                        <h2><b> Special services upon request</b></h2>
                        <p>Upon request we offer, move in/out cleaning, windowash, cleaning the inside of oven, carpet cleaning and more</p>
                    </div>
                                            

                </div>

            </Grid>
           
        </Grid>
    </Container>
    )
}

export default HomeOrApartment