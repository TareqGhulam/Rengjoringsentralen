import React from 'react'

import { Grid, Container, Button , Typography} from '@material-ui/core'

import Image from './assets/Ellipse 52.png'
import './Service.css'

const Carpet = ()=>{
    return(
        <Container fixed className="">
       <div id="carpet" style={{paddingTop:"30px"}}></div>
        <Grid container >
          <Grid item xs ={12} sm ={12} md={5} lg={4} style={{display:'block', alignItems:"center", justifyContent:'center'}}>
               <img  src={Image} width="80%"  alt="Image"/><br/><br/>
               
            </Grid>

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"black", fontSize:"40px", fontWeight:"bold"}}>Carpet cleaning</Typography><br/><br/>

                    <p>
                    Carpets are like a bank of dust in your house. Daily vacuuming can only take away 80-90% of dry dirt on the upper layers But in the roots, skin cells, mites, moisture and fungal spores get trapped in the fibres. These can cause allergic reactions and asthma problems unless properly cleaned.

                    What can you do
                    Old wisdom and advice are effective yo a degree, but none of them will work for all types of carpets.<br/><br/>
                    Kjerringråd er effektive til en viss grad, men ingen råd vil virke for alle typer tepper. Du kan skade fibrene, ødelegge fargene, eller etterlate farlige kjemikalier. Et teppe trenger kun dyprensning en gang hver 12-18. måned. Så spar deg selv for risikoen og få et godt som nytt teppe tilbake ved å sende det til oss.
                   </p><br/><br/>
                   {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                  <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"15px" ,fontWeight:"bold" , marginBottom:"20px", padding:"0 10px 0 10px" }}>Call us</Button>
                  
                                             */}
                <div style={{width:"100%", textAlign:"center"}}>
                <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
            </div><br/>     

                </div>

            </Grid>
         
        </Grid>
    </Container>
    )
}

export default Carpet