import React , {useState } from 'react'
import {Container, Paper,TextField , FilledInput ,Button, Typography ,Grid, ListItem, li } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
// import Final from './final'
// import ReviewSlider from './review_slider'
const Preview =(props)=>{
    const classes = useStyles();
    // const [progress, setProgress]  = useState(props.progress)



    let services = props.selctedService.map((service,rootIndex)=>
    // <Grid item key={rootIndex} xs={6} sm={4} md={3} lg={3}>
       <Paper variant="outlined"  key={rootIndex} style={{padding:"20px",display:"inline-block", backgroundColor:"#325FFF", textAlign:"center", margin:"20px", minWidth:"300px", borderRadius:"15px"}}>
           <h4 style={{color:"white"}}>{service.area}</h4>
           
           <div style={{textAlign:"left", marginLeft:"10px", minHeight:"150px"}}>
               {
                   service.tasks.map((title,index)=>
                      
                      <Typography key={index} style={{color:"white"}}>
                           <Checkbox
                            checked
                            style ={{
                                color: "white",
                                // backgroundColor:"black"
                              }}
                            color="primary"
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox secondary checkbox' }}
                        />
                          {title.name}
                          {console.log(title.name)}
                      </Typography>
                   )
               }
           </div>
       </Paper>
    // </Grid>
)
    return(
        <Container>
             <br/> <br/>
       
          <Typography variant="h4" style={{paddingBottom:"20px", color:"#D4DFFF"}} >Overview</Typography>
          <Typography variant="h6" style={{paddingBottom:"20px", color:"#325FFF"}} >{props.service+" Cleaning Service"}</Typography>
       
           <div className="Review scroll_bar">
           {/* <ReviewSlider items ={services}/> */}

                {services}
           </div><br/><br/>
        

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