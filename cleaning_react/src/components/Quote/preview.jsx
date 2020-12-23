import React from 'react'
import {Container, Paper,TextField , FilledInput ,Button, Typography ,Grid, ListItem, li } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const Preview =(props)=>{
    const classes = useStyles();

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
                            checked={title.selected}
                        
                            color="primary"
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox secondary checkbox' }}
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
        <Container>
          <Grid container spacing={0}>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                    <div style={{width:"100%", height:"30px" ,backgroundColor:"white", border:"3px solid yellow",borderRadius:"30px"}}>
                        <div style={{width:"80%",height:"100%", backgroundColor:"#00FFF8",borderRadius:"30px"}}></div>
                    </div>
                </Grid>
                    <Grid  item xs={1} sm={1} md={1} lg={1}>
                        <Typography  variant="h4" style={{color:"#00FFF8 "}}>80%</Typography>
                    </Grid>
            </Grid><br/>   
          <Typography variant="h4" style={{color:"white", paddingBottom:"20px",}} >Overview</Typography>
          <Typography variant="h6" style={{color:"white", paddingBottom:"20px",}} >{props.image+" Cleaning Service"}</Typography>
          <img src={props.imageB64}  alt={props.image} style={{border:"10px solid rgb(255, 251, 0)"}}/><br/><br/>
        
          <Typography variant="h4" style={{color:"white", paddingBottom:"20px",}} >Selected Service</Typography>

          <Grid container spacing={2} >
                {services}
           </Grid><br/>
          <Typography variant="h4" style={{color:"white", paddingBottom:"20px",}} >Your Profile Info</Typography>

           <TextField variant="outlined" required type="text" disabled
                            className= {classes.input1}
                         
                           value={props.name}
             /><br/><br/>
              <TextField variant="outlined" required type="email" disabled
                            className= {classes.input1}
                        
                           value={props.email}
             /><br/><br/>
              <TextField variant="outlined" required type="text" disabled
                            className= {classes.input1}
                          
                           value={props.phone}
             />


        </Container>
    )
}

export default Preview

const useStyles = makeStyles({
    input1: {
        width: '50vw',
        textAlign:"center",
        backgroundColor:'white',
        borderRadius:"5px"
    },
  
  })