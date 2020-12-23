import React from 'react'
import {Container, Typography} from '@material-ui/core'
import Why_Us from '../assets/whyus_image.PNG'
import './MainPage.css'
const WhyUs = ()=>{
    return(
        <Container fixed style={{marginTop:"50px", position:"relative"}}>
             <Typography  variant="h3" style={{ fontWeight:"bold",}}>Why our customers choose us?</Typography><br/><br/>
            
                 <img src={Why_Us} alt="why us" width="85%" height="auto"/>
             
                {/*             
                 <p  className="Why_Timeline_1_text_1">100 % Satisfaction <br/> guaranteed</p >
                 <p  className="Why_Timeline_1_text_2">Only the best for our clients, we guarantee <br/>you’ll be satisfied with the results.
                 </p > */}

           
        </Container>
    )
}

export default WhyUs