import React, {useState} from 'react'
import {Container, Paper,TextField , FilledInput ,Button, Typography ,Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const Info = (props)=>{
    const classes = useStyles();
    return(
        <Container fixed>
            <Typography variant="h4" style={{color:"white", paddingBottom:"20px",}} >Fill Out Your Info</Typography>
           
            <Grid container spacing={0}>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                    <div style={{width:"100%", height:"30px" ,backgroundColor:"white", border:"3px solid yellow",borderRadius:"30px"}}>
                        <div style={{width:"60%",height:"100%", backgroundColor:"#00FF43",borderRadius:"30px"}}></div>
                    </div>
                </Grid>
                    <Grid  item xs={1} sm={1} md={1} lg={1}>
                        <Typography  variant="h4" style={{color:"#00FF43"}}>60%</Typography>
                    </Grid>
            </Grid><br/>
           
           
            <Grid container justify="center" spacing={1}>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <FilledInput variant="outlined" required type="text" 
                           className= {classes.input1}
                           color="primary"
                            onChange={(event)=>props.addName(event.target.value)}
                                placeholder="enter name..."
                        />
                     </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <FilledInput variant="outlined" required type="text" 
                            className= {classes.input1}
                            onChange={(event)=>props.addPhone(event.target.value)}
                                color="primary"
                                placeholder="enter phone..."
                        />
                     </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <FilledInput variant="outlined" required type="email" 
                            className= {classes.input1}
                            onChange={(event)=>props.addEmail(event.target.value)}
                           color="primary"
                                placeholder="enter email..."
                        />
                     </Grid>
                </Grid>     
        </Container>
    )
}

export default Info


const useStyles = makeStyles({
    input1: {
        width: '20vw',
        minWidth:"80%",
        textAlign:"center",
        backgroundColor:'white',
    },
  
  })
