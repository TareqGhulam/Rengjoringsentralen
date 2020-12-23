import React from 'react'
import DayCare from './services/Daycare'
import HomeApartment from './services/HomeOrApartment'
import Office from './services/Office'
import MoveInOut from './services/MoveInOrOut'
import Construction from './services/Construction'
import Airbnb from './services/Airbnb'
import Carpet from './services/Carpet'
import Infection from './services/Infection'
import Logo2 from  './assets/image 34.png'
import {Container} from '@material-ui/core'
const Srvices = ()=>{
    return(
        <div>

           
           <Container>

            {/* <p style={{ color:"#23548B"}}>  <img src={Logo2} style={{width:"100px", paddingLeft:"50px"}} alt="Logo"/> <br/>Rengjøringssentralen</p> */}
           </Container>
           
            <DayCare /><br/><br/><br/>
            <HomeApartment/><br/><br/><br/>
            <Office/><br/><br/><br/>
            <MoveInOut/><br/><br/><br/>
            <Construction/><br/><br/><br/>
            <Airbnb/><br/><br/><br/>
            <Carpet/><br/><br/><br/>
            <Infection/><br/><br/><br/>

        </div>
    )
}

export default Srvices

// <div id="DayCare"><DayCare /></div><br/><br/><br/>
// <div id="HomeApartment"><HomeApartment/></div><br/><br/><br/>
// <div id="Office"><Office/></div><br/><br/><br/>
// <MoveInOut/><br/><br/><br/>
// <div id="Construction"> <Construction/></div><br/><br/><br/>
// <div  id="Airbnb"><Airbnb/></div><br/><br/><br/>
// <div id="Carpet"><Carpet/></div>
// <div id="Infection"><Infection/></div>