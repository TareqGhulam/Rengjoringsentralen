import React from 'react'

import {Container, Grid, Typography,Button, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import map from '../assets/map.PNG'
import Location from '../assets/Ellipse 38.png'

import Message from '../assets/ic_outline-mail.png'
import call from '../assets/eva_phone-outline.png'
import LocationMap from '../assets/grommet-icons_map.png'



import Pattern1 from '../assets/map pattern 1.png'
import Pattern2 from '../assets/map pattern 2.png'
import LocationCityIcon from '@material-ui/icons/LocationCity';
const Map =()=>{
    return(
        <div>
            <div style={{position:"absolute", width:"100%", marginTop:"-40px"}}>
                <img src={Pattern1} width="70%"alt="patter" style={{ height:"20vw",marginTop:"20px", marginLeft:"30%"}}/>
                <img src={Pattern2} width="100%" alt="pattern" style={{ height:"20vw"}}/>

            </div>
            <Container style={{marginTop:"30px", position:"relative"}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md ={6}lg={6}  style={{textAlign:"left"}}>
                    {/* <Typography variant="h3" style={{fontWeight:"bold"}}>Location we  <span style={{color:"#325FFF"}} >clean</span></Typography><br/><br/><br/> */}
                 

                     <Typography variant="h3" style={{fontWeight:"bold"}}>Contacts </Typography><br/>
                    
                    <ListItem>
                        <ListItemIcon><img src={Message} alt="Message"/></ListItemIcon>
                        <ListItemText >
                         post@renest.no
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><img src={call} alt="call"/></ListItemIcon>
                        <ListItemText>
                          51 49 51 55
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><img src={call} alt="call"/></ListItemIcon>
                        <ListItemText>
                          995 10 801
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><img src={LocationMap} alt="LocationMap"/></ListItemIcon>
                        <ListItemText>
                          Kutterveien 29, 4374 EGERSUND
                        </ListItemText>
                    </ListItem>

                </Grid>
                <Grid item xs={12} sm={12} md ={6}lg={6} style={{textAlign:"center"}}>
                    <img src={map} width="90%" height="300px" style={{border:"10px solid #325FFF", borderRadius:"20px"}} alt="map"/>
                </Grid>

            </Grid>
            <br/><br/><br/>
          
        </Container>
        </div>
    )
}

export default Map
