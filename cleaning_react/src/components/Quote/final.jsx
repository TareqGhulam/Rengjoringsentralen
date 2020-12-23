import React from 'react'
import {Container, Paper, Typography ,Grid, ListItem, li } from '@material-ui/core'
import {connect} from 'react-redux'

const Final = (props)=>{
  
    return(
        <Container fixed><br/>
        <Grid container justify="center" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div style={{width:"100%", height:"60px" ,backgroundColor:"white", border:"3px solid yellow",borderRadius:"30px"}}>
                        <div style={{width:"100%",height:"100%", backgroundColor:"#7900FF",borderRadius:"30px"}}></div>
                    </div>
                </Grid>
                    <Grid  item xs={3} sm={3} md={3} lg={3}>
                        <Typography  variant="h4" style={{color:"#7900FF"}}>100%</Typography>
                    </Grid>
            </Grid><br/>
            <Typography variant="h3" style={{color:"white", paddingBottom:"20px",}} >
                Congratulation your Qoute <br/>is on the way
                </Typography><br/>
  
            <Typography variant="h3" style={{color:"rgb(3, 46, 124)"}}>{props.user.industryName}</Typography>
           
        </Container>
    )
}
const mapStateToProps = state =>{
    return {
        token : state.auth.token,
        user:state.auth.user
        
    }
}
export default connect(mapStateToProps)(Final)



