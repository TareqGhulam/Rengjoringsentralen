import React, {useState} from 'react'
import {Typography, Container, Grid,Paper} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
const Services = (props)=>{
    let services = props.selctedService.map((service,rootIndex)=>
        <Grid item key={rootIndex} xs={12} sm={6} md={4} lg={4}>
           <Paper variant="outlined"  style={{padding:"5px", }}>
               <Typography variant="h6" color="primary">{service.name}</Typography>
               <hr/>
               <div style={{textAlign:"left", marginLeft:"10px"}}>
                   {
                       service.serivice.map((title,index)=>
                          
                          <Typography key={index}>
                               <Checkbox
                                
                                onClick={()=>props.setServices(rootIndex, index) }
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                              {title.title}
                          </Typography>
                       )
                   }
               </div>
           </Paper>
        </Grid>
    )
    return(
        <Container fixed>
            <Typography variant="h4" style={{color:"white", paddingBottom:"20px",}} >Choice a Services </Typography>
            <Grid container spacing={0}>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                    <div style={{width:"100%", height:"30px" ,backgroundColor:"white", border:"3px solid yellow",borderRadius:"30px"}}>
                        <div style={{width:"20%",height:"100%", backgroundColor:"#FF5733",borderRadius:"30px"}}></div>
                    </div>
                </Grid>
                    <Grid  item xs={1} sm={1} md={1} lg={1}>
                        <Typography  variant="h4" style={{color:"#FF5733"}}>20%</Typography>
                    </Grid>
            </Grid><br/>
          
          
            <Grid container spacing={2} >
                {services}
           </Grid>
        </Container>
    )
}

export default Services