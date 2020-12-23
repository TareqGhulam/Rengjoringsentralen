import React , {useState}from 'react'
import {Container, Paper, Typography  } from '@material-ui/core'


const Final = (props)=>{
    const [progress, setProgress]  = useState(props.progress)
  
    return(
        <Container fixed><br/>
   

            <img className="quote_progress_right_icon"  src="./static/image/destination.png"/>
            <div className="quote_progress">
                    <div style={{width:`${progress}%`}} className="quote_progress_done"></div>
            </div>
            <p className="quote_progress_left_text_final"  >{progress}%</p>
            <br/> 
            <Typography style={{ paddingBottom:"20px",fontSize:"4vw", color:"#0051AA", fontWeight:"bolder"}} >
                Congratulation! your quote <br/>is on the way
                </Typography><br/>
  
            <Typography  style={{color:"rgb(3, 46, 124)", fontSize:"4vw"}}>Rengjøringssentralen</Typography><br/>
            <img src="./static/image/logo2.png" style={{width:"50%"}} alt="Rengjøringssentralen"/>
           
        </Container>
    )
}

export default Final



