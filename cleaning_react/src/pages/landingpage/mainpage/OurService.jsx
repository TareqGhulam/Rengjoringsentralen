
import React , {useState} from 'react'
import {Container, Typography, Grid , Button} from '@material-ui/core'
import Carpet_cleaning from '../assets/carbon_clean.png'
import MOveInorOut from '../assets/emojione-v1_delivery-truck.png'
import ConstructionCleaning from '../assets/emojione-v1_office-building.png'
import HomeOrApartmentCleaning from '../assets/flat-color-icons_home.png'
import OfficeCleaning from '../assets/Group 19.png'
import DayCareCleaning from '../assets/Group 29.png'
import AirBnbCleaning from '../assets/noto-v1_couch-and-lamp.png'
import InfectionControlForBusinesses from '../assets/info.png'



const dayCare = "Children’s bad habits make them incredible contagion spreaders. Secure your day care from infections like Hepatitis A and Diarrhea. Since the 1940s daycares have been sources of disease outbreaks, and with the more and more children being admitted to daycare there’s an even higher risk of infection. Without proper infection control and cleaning, the children are in danger for outbreaks of diseases like Hepatitis A and other infections."
const  Home = "Come to a clean home where you can enjoy the sun streaming through clean windows while you do what you’ve dreamt of doing all day. Our cleaners use only the best equipment with eco-friendly and safe cleaning products. They’ll go from roof to floor to ensure no dirt is left when they’re done.Let us bother with the more challenging rooms. Just choose whichever rooms you’d like us to clean so you can make better use of your time."
const Office = "How you take care of your building tells your customers how you’ll take care of them. Give them a good first impression to make future negotiations much easier."
const Construction = "Avoid unexpected fines while getting praise from grateful clients. Professional cleaning during and after construction guarantee proper sorting of building materials and garbage from the construction site. Once you’re done your clients will get a spotless new building ready for use right away. Unless you’re training your employees to be cleaning personnel, you risk getting fines from bad garbage sorting and wrong clean up after you’re done building. With experienced professionals, you can expect a clean construction site for your workers and no fines in your mail."
const Carpet ="You can hide the dust under the carpet, but all the dirt atop will sit and fester. Send your carpet to cleaned once a year to ensure a good as new and long-lasting carpet. Carpets are like a bank of dust in your house. Daily vacuuming can only take away 80-90% of dry dirt on the upper layers But in the roots, skin cells, mites, moisture and fungal spores get trapped in the fibres. These can cause allergic reactions and asthma problems unless properly cleaned."
const Move ="Don’t stop the moving party because someone hounds a spot you forgot, or begin the celebration as soon as you come into your new home. Whether you’re selling or moving in the cleanup is often bigger than expected. That’s why we go through every possible detail so your home shines to its full potential. The cleanup is often harder and longer than you might expect. You could start with the walls, move to the cabinets, but then suddenly the inside of the oven has to be scraped and in the end, you’ll have to go over every floor again. And finally, one last cleanup of the floor again to get the last dust away. Use that time to celebrate instead, while we make either your old, or new home shine."
const AIRBNB = "Don’t use more time than necessary on bad guests. Just put out fresh towels and bed linens, then we’ll take care of the cleaning and disinfecting while you do more important things."
const Infection = "Our cleaners are certified in infection control. They prevent cross-contamination from surfaces and ensure any infectious zones stay disinfected hours after cleaning."


  
  const list =[false, false, false, false, false, false, false, false]
const Services =(props)=>{

    const [showtext, setShowtext] = useState([...list])

    const changeRead= (val)=>{
        let listBoool = [...showtext]
        listBoool[val]= !listBoool[val]
        setShowtext(listBoool)
        
    }
    return(
        <Container fixed style={{marginTop:"30px"}}>
            <Typography variant="h3" style={{fontWeight:"bold"}}>Our services</Typography><br/>
            <Grid container spacing ={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <img src={DayCareCleaning} width="150px" height="142" alt="DayCareCleaning" className="ServicessImg"/>
                    <Typography variant="h4" className="ServicesTitle">DayCare<br/>cleaning</Typography><br/>
                    <p  className="ServicesText">
                        Children’s bad habits make them incredible contagion spreaders. Secure your day care from infections like Hepatitis A and Diarrhea. 
                     {! showtext[0] && <span>....</span>}<br/>
                    { showtext[0] && <span> Since the 1940s daycares have been sources of disease outbreaks, and with the more and more children being admitted to daycare there’s an even higher risk of infection. Without proper infection control and cleaning, the children are in danger for outbreaks of diseases like Hepatitis A and other infections.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(0)}} >Read {showtext[0] ? " Less" :" More"}</p>
             
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <img src={HomeOrApartmentCleaning} width="150px" height="150" alt="HomeOrApartmentCleaning" className="ServicessImg"/>
                    <Typography variant="h4"  className="ServicesTitle">Home/Apartment<br/>cleaning</Typography><br/>
                    <p  className="ServicesText">
                    Come to a clean home where you can enjoy the sun streaming through clean windows while you do what you’ve dreamt of doing all day. 
                       { !showtext[1] && <span >...</span>}<br/>
                       {showtext[1] && <span>Our cleaners use only the best equipment with eco-friendly and safe cleaning products. They’ll go from roof to floor to ensure no dirt is left when they’re done.Let us bother with the more challenging rooms. Just choose whichever rooms you’d like us to clean so you can make better use of your time.</span>}
                   </p>
                
                 <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(1)}} >Read {showtext[1] ? " Less" :" More"}</p>
              
                   
                        
                   
                </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                    <img src={OfficeCleaning} width="150px" height="140" alt="OfficeCleaning" className="ServicessImg"/>
                    <Typography variant="h4"  className="ServicesTitle">Office<br/>cleaning</Typography><br/>
                    <p  className="ServicesText">
                    How you take care of your building tells your customers how you’ll take care of them. Give them a good first impression to make 
                     {! showtext[2] && <span>....</span>}
                    { showtext[2] && <span> future negotiations much easier.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(2)}} >Read {showtext[2] ? " Less" :" More"}</p>
                     
                </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                
                    <img src={ConstructionCleaning} width="150px" height="140" alt="ConstructionCleaning" className="ServicessImg"/>
                    <Typography variant="h4" className="ServicesTitle">Construction<br/>cleaning</Typography><br/>
                    <p  className="ServicesText">
                    Avoid unexpected fines while getting praise from grateful clients. Professional cleaning during and after construction guarantee
                     {! showtext[3] && <span>....</span>}
                    { showtext[3] && <span> proper sorting of building materials and garbage from the construction site. <br/> Once you’re done your clients will get a spotless new building ready for use right away. Unless you’re training your employees to be cleaning personnel, you risk getting fines from bad garbage sorting and wrong clean up after you’re done building. With experienced professionals, you can expect a clean construction site for your workers and no fines in your mail.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(3)}} >Read {showtext[3] ? " Less" :" More"}</p>
                   
                </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                <img src={Carpet_cleaning} width="150px" height="150" alt="Carpet_cleaning" className="ServicessImg"/>
                    <Typography variant="h4"  className="ServicesTitle">Carpet<br/>cleaning</Typography><br/>
                 
                    <p  className="ServicesText">
                    You can hide the dust under the carpet, but all the dirt atop will sit and fester. Send your carpet to cleaned once a year to ensure a good as
                     {! showtext[4] && <span>....</span>}
                    { showtext[4] && <span> new and long-lasting carpet. <br/>Carpets are like a bank of dust in your house. Daily vacuuming can only take away 80-90% of dry dirt on the upper layers But in the roots, skin cells, mites, moisture and fungal spores get trapped in the fibres. These can cause allergic reactions and asthma problems unless properly cleaned.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(4)}} >Read {showtext[4] ? " Less" :" More"}</p>
                    </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                <img src={MOveInorOut} width="153px" height="152" alt="MOveInorOut" className="ServicessImg"/>
                    <Typography variant="h4"  className="ServicesTitle">Move in/out<br/>cleaning</Typography><br/>
                 
                    <p  className="ServicesText">
                    Don’t stop the moving party because someone hounds a spot you forgot, or begin the celebration as soon as you come into your new home.
                     {! showtext[5] && <span>....</span>}<br/>
                    { showtext[5] && <span> Whether you’re selling or moving in the cleanup is often bigger than expected. That’s why we go through every possible detail so your home shines to its full potential. The cleanup is often harder and longer than you might expect. You could start with the walls, move to the cabinets, but then suddenly the inside of the oven has to be scraped and in the end, you’ll have to go over every floor again. And finally, one last cleanup of the floor again to get the last dust away. Use that time to celebrate instead, while we make either your old, or new home shine.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(5)}} >Read {showtext[5] ? " Less" :" More"}</p>
                    </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                      <img src={AirBnbCleaning} width="150px" height="150" alt="AirBnbCleaning" className="ServicessImg"/>
              
                    <Typography variant="h4"  className="ServicesTitle">AIRBNB<br/>cleaning</Typography><br/>
                  
                    <p  className="ServicesText">
                    Don’t use more time than necessary on bad guests. Just put out fresh towels and bed linens, then we’ll take care of the cleaning and
                     {! showtext[6] && <span>....</span>}
                    { showtext[6] && <span>  disinfecting while you do more important things.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(6)}} >Read {showtext[6] ? " Less" :" More"}</p>
               
                </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                    <img src={InfectionControlForBusinesses} width="150px" height="150" alt="InfectionControlForBusinesses" className="ServicessImg"/>
              
                    <Typography variant="h4"  className="ServicesTitle">
                        Infection control<br/>for businesses
                        </Typography><br/>
                        <p  className="ServicesText">
                        Our cleaners are certified in infection control. They prevent cross-contamination from surfaces and ensure any infectious zones stay
                     {! showtext[7] && <span>....</span>}
                    { showtext[7] && <span> disinfected hours after cleaning.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(7)}} >Read {showtext[7] ? " Less" :" More"}</p>
                   
                        
               
                
                </Grid>
                

            </Grid><br/><br/>
            <Button variant="contained" style={{backgroundColor:"#325FFF",  color:"white", fontSize:"17px", fontWeight:"bold" , padding:"20px",marginRight:"20px", marginBottom:"20px" }}>Get Quote</Button>
            <Button variant="outlined" style={{border:"2px solid #325FFF", color:"black", fontSize:"17px" ,fontWeight:"bold" , marginBottom:"20px" , padding:"20px"}}>Call (8 400 324 123)</Button>
                         
        </Container>
    )
}

export default Services