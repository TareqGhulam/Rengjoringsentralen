import React, {useState} from 'react'
import {Container, Grid} from '@material-ui/core'
import DayCare from './services/Daycare'
import HomeApartment from './services/HomeOrApartment'
import Office from './services/Office'
import MoveInOut from './services/MoveInOrOut'
import Construction from './services/Construction'
import Airbnb from './services/Airbnb'
import Carpet from './services/Carpet'
import Infection from './services/Infection'
import Logo2 from  './assets/image 34.png'

const list =[false, false, true, false, false, false, false, false,false]

const Reviews = ()=>{
    const [showtext, setShowtext] = useState([...list])

    const changeRead= (val)=>{
        let listBoool = [false, false, false, false, false, false, false, false, false]
        
        listBoool[val]= true
        setShowtext(listBoool)
        
    }
    const style={
        backgroundColor:"white"
    }
    
    return(
        
    <div className="Review-component">
        
        <Container>
        {/* <p style={{ color:"#23548B"}}>  <img src={Logo2} style={{width:"100px", paddingLeft:"50px"}} alt="Logo"/> <br/>Rengjøringssentralen</p> */}
            
           <Grid container justify="center" spacing={2} style={{backgroundColor:"#e5ebff"}}>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[0] && "white" }}>
                  <p className="Review"  onClick={()=>{changeRead(0)}} >Airbnb</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1}   style={{backgroundColor: showtext[1]&&"white" }}>
                  <p className="Review"  onClick={()=>{changeRead(1)}} >DayCare</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[2] && "white" }} >
                  <p className="Review"  onClick={()=>{changeRead(2)}} >Home</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[3] && "white" }}>
                  <p className="Review"  onClick={()=>{changeRead(3)}} >Office</p>
               </Grid>
               <Grid item sx= {3} sm={3} md={2} lg={2} style={{backgroundColor: showtext[4] && "white" }}>
                  <p className="Review"  onClick={()=>{changeRead(4)}} >Constractions</p>
               </Grid>
               <Grid item sx= {3} sm={3} md={2} lg={2} style={{backgroundColor: showtext[5] && "white" }}>
                  <p className="Review"  onClick={()=>{changeRead(5)}} >Move in/out</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[6] && "white" }}>
                  <p className="Review"  onClick={()=>{changeRead(6)}} >Carpet</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[7] && "white" }}>
                  <p className="Review"  onClick={()=>{changeRead(7)}} >Infection</p>
               </Grid>

           </Grid>
           <div style={{backgroundColor:"white", paddingBottom:"20px", width:"100%"}}>

           {showtext[0] && <Airbnb/>}
           {showtext[1] && <DayCare/>}
           {showtext[2] && <HomeApartment/>}
           {showtext[3] && <Office/>}
           {showtext[4] && <Construction/>}
           {showtext[5] && <MoveInOut/>}
           {showtext[6] && <Carpet/>}
           {showtext[7] && <Infection/>}

           </div>

           
        </Container>
    </div>
    )
}

export default Reviews