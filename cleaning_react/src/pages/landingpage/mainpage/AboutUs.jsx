import Reatc from 'react'
import {Container, Grid, Typography, ListItem, Button, ListItemIcon, ListItemText} from '@material-ui/core'
import Certification_image from '../assets/Group 417.png'
import Wipper from '../assets/Ellipse 37.png'
import PhoneCll from '../assets/phone-call.png'
import ListAll from '../assets/mdi.png'
import Brush from '../assets/carbon.png'

import Pattern1 from '../assets/about pattern 1.png'
import Pattern2 from '../assets/about pattern 2.png'

const About_Us = ()=>{
    return(
        <div>
           
        <Container style={{marginTop:"30px"}}>
            <Typography variant="h3" style={{fontWeight:"bold"}}>About <span style={{color:"#0051AA"}}>us</span></Typography><br/>

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
            <div style={{textAlign:"left", position:"relative"}}>
            <Typography  variant="h4" style={{fontWeight:"bold"}}> <span style={{color:"#0051AA"}}>3 easy steps</span> to have us solve all</Typography><br/>
            <Typography  variant="h4" style={{fontWeight:"bold"}}>your <span style={{color:"#0051AA"}}>Cleaning Challenge</span></Typography><br/>
            </div>
           </Container> 
           <div style={{position:"absolute", width:"100%", marginTop:"-130px"}}>
                <img src={Pattern2} width="70%" alt="pattern" style={{marginRight:"30%",  height:"25vw"}}/>
                <img src={Pattern1} width="100%"alt="patter" style={{ height:"30vw"}}/>

            </div>
            <Container>
            <Grid container justify="center" spacing={3} style={{position:"relative"}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    {console.log(Wipper)}
                    <img src={Wipper} width="100%" alt="wipper"/>
                </Grid>
                <Grid  item xs={12} sm={8} md={8} lg={8} >
                    <ListItem style={{textAlign:"center"}}>
                        <ListItemIcon><img src={ListAll} alt="img"/></ListItemIcon>
                        <ListItemText><Typography variant="h5" style={{fontWeight:"bold"}}>  Choose a service and what you’d rather not clean yourself.</Typography></ListItemText>
                    </ListItem><br/><br/>
                    <ListItem style={{textAlign:"center"}}>
                        <ListItemIcon><img src={PhoneCll} alt="img"/></ListItemIcon>
                        <ListItemText><Typography variant="h5" style={{fontWeight:"bold"}}> Call for a quote based on the number of rooms and requirements.</Typography></ListItemText>
                    </ListItem><br/><br/>
                    <ListItem style={{textAlign:"center"}}>
                        <ListItemIcon><img src={Brush} alt="img"/></ListItemIcon>
                        <ListItemText><Typography variant="h5" style={{fontWeight:"bold"}}>Relax while we clean based on your desres.</Typography></ListItemText>
                    </ListItem><br/><br/>
                    <p >Relax while we clean based on your requirements.</p><br/>
                    <Button variant="contained" style={{backgroundColor:"#325FFF", width:"180px", height:"70px", color:"white", fontSize:"17px", fontWeight:"bold" , marginRight:"2vw", marginBottom:"20px" }}>Get a Quote</Button>
                         <Button variant="outlined" style={{border:"2px solid #325FFF",  height:"70px", color:"black", fontSize:"17px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                         
                </Grid>
            </Grid>

        </Container>
        
      </div>
    )
}

export default About_Us