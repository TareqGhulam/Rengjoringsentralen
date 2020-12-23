import React from 'react'
import './LandingApp.css'
import { Container, Grid ,ListItem , ListItemIcon} from '@material-ui/core'
import Logo from './assets/whitepnglogo.png'
import Fb from './assets/Group 364.png'
import Wp from './assets/jam_whatsapp.png'
import In from './assets/Group 372.png'
import Uk from './assets/Group 365.png'
import {NavLink, useHistory} from 'react-router-dom'
import ForumIcon from '@material-ui/icons/Forum';

const Footer = ()=>{
    const history =useHistory()
    return(
        <div>
          
               {/* <ForumIcon fontSize="large" style={{marginLeft:"80%"}} /> */}
           
        <div className="Footer" >
              <Container fixed>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={2} md={2} lg={2}>
                        <img src={Logo}/>
                    </Grid>
                    <Grid item xs={4} sm={2} md={2} lg={2}>
                        <a href="#" onClick={()=>history.push('/')} style={{color:"white",fontWeight:"bold", textDecoration:"none"}}>Home</a>
   
                    </Grid>
                    <Grid item xs={4} sm={2} md={2} lg={2} style={{textAlign:"left"}}>
                        <a href="#" style={{fontWeight:"bold",color:"white", textDecoration:"none"}} onClick={() => history.push('/services')}>Services</a><br/><br/>
                        <a href="#daycare" style={{color:"white", textDecoration:"none"}} onClick={() => history.push('/services')}>Daycare</a><br/><br/>
                        <a href="#office" style={{color:"white", textDecoration:"none"}} onClick={() => history.push('/services')}>Office</a><br/><br/>
                        <a href="#moveinout" style={{color:"white", textDecoration:"none"}} onClick={() => history.push('/services')}>Move in/out</a><br/><br/>
                        <a href="#airbnb" style={{color:"white", textDecoration:"none"}} onClick={() => history.push('/services')}>Arnbnb</a><br/><br/>
                        <a href="#construction" style={{color:"white", textDecoration:"none"}} onClick={() => history.push('/services')}>Constraction</a><br/><br/>


                    </Grid>
                    {/* <Grid item xs={4} sm={2} md={2} lg={2} style={{textAlign:"left"}}>
                        <p style={{fontWeight:"bold"}}>Gift Cards</p>
                        <p >Daycare</p>
                        <p >Home</p>
                        <p >OFFICE</p>
                        <p >move in/out</p>
                        <p >Arnbnb</p>
                        <p >constraction</p>


                    </Grid> */}
                    <Grid item xs={4} sm={2} md={2} lg={2} style={{textAlign:"left"}}>
                    <a href="#" style={{fontWeight:"bold",color:"white", textDecoration:"none"}} onClick={() => history.push('/team')}>Team</a><br/><br/>


                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4} style={{textAlign:"left"}}>
                    <ListItem style={{textAlign:"center"}}>
                        <ListItemIcon><img src={In} alt="In"/></ListItemIcon>
                        <ListItemIcon><img src={Wp} alt="Wp"/></ListItemIcon>
                        <ListItemIcon><img src={Fb} alt="Fb"/></ListItemIcon>
                        <ListItemIcon><img src={Uk} alt="Uk"/></ListItemIcon>
                        
                    </ListItem><br/><br/>
        

                    </Grid>
                </Grid>
                </Container>
        </div>
        </div> 
    )
}

export default Footer