import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navigation.css"
import {Container, Typography, Grid , ListItem, ListItemIcon,  Button} from '@material-ui/core'
import CallIcon from '../../assets/callicon.png'
import { useTranslation } from 'react-i18next';
import {useHistory} from 'react-router-dom'
import Logo from '../../assets/nablogo.png'
import LogoAbove from '../../assets/logo2.png'
const Navigation = (props)=>{
  const {i18n } = useTranslation();
  const history = useHistory()
    const handleChange = (lang)=>{
        i18n.changeLanguage(lang);
      }
      console.log(history)
    return (
      <Container fixed >
          <br/>
          <img src={LogoAbove}/>
            <Grid container >
                {/* <Grid  item xs={2} sm={2} md={2} lg={2}>
                <ul className="NavigationLandingPage">
                        {history.location.pathname != '/' &&   <li ><NavLink  to="/" exact><img src={Logo} alt="logo" width="50px" height="auto"/></NavLink></li> }
                 </ul>
                </Grid> */}
                <Grid item xs={10} sm={10} md={6} lg={6} >
                    <ul className="NavigationLandingPage">
                        <li><NavLink  to="/" exact>HOME</NavLink></li>
                        <li><NavLink  to="/service" exact>SERVICES</NavLink></li>
                        {/* <li><NavLink  to="/services">SERVICES</NavLink> </li>  */}
                        <li><NavLink  to="/team">TEAM</NavLink> </li>
                

                    </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <ul className="NavigationLandingPage">
                        <li><NavLink  to="#" exact><img  src={CallIcon} alt="CallIcon"/></NavLink></li>
                        <li><NavLink  to="#"><Typography variant="h6" style={{color:"#0051AA", fontWeight:"bold"}}>8 400 324 123</Typography></NavLink> </li> 
                      
                    </ul>
                 
                </Grid>
                {/* <Grid item xs={12} sm={12} md={6} lg={6} className="PhoneNumber"> */}
                    {/* <Button variant="contained" onClick={()=>handleChange('en')}>
                        English
                    </Button>
                    <Button variant="contained" onClick={()=>handleChange('no')}>
                         Norway
                    </Button> */}

                    {/* <ListItem>
                        <ListItemIcon><img  src={CallIcon} alt="CallIcon"/></ListItemIcon>
                        <li> <Typography variant="h6" style={{color:"#0051AA", fontWeight:"bold"}}>8 400 324 123</Typography></li>
                    </ListItem> */}
                    
                   
                {/* </Grid> */}
               
          
            </Grid>
    
            </Container>
)}

export default Navigation