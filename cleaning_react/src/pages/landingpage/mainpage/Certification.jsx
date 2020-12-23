import Reatc from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
import Certification_image from '../assets/Group 417.png'
const Certification = ()=>{
    return(
        <Container style={{marginTop:"30px"}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md ={6}lg={7}  style={{textAlign:"left"}}>
                    <Typography variant="h3" style={{fontWeight:"bold"}}>Our unique cleaning <br/>program</Typography><br/>
                     <p>
                     We are more than cleaners, we’re infection control experts
                    Infectious diseases have always been a problem many can ignore. But the new pandemic has opened all our eyes to the risks of poor cleaning and disinfecting. We will never ignore those 30 000+ people who die from diseases due to antibiotic immunity.<br/><br/> And these diseases spread fast, Only one cleaner without the proper training can infect an entire building with a disease that could have been on a single table. Proper cleaning means more than just aesthetic cleanliness.
                    Our cleaners go deeper than that to ensure a healthier area after the cleaning is done. All our employees are certified to prevent cross-contamination and make an area safe again after an outbreak.<br/><br/>
                    The infection control system was made in cooperation with several doctors to guarantee the effects. With us you’re not just getting cleaners, you’re infection control experts who happen to be cleaners.

                     </p>
                </Grid>
                <Grid item xs={12} sm={12} md ={6}lg={5} style={{textAlign:"center"}}>
                    <img src={Certification_image} width="90%" alt="Certification"/>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Certification