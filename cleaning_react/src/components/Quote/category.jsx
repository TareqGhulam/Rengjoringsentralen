import React from 'react'
import {Typography, Container,Grid} from '@material-ui/core'
import './quote.css'
const Category = (props)=>{
    
    let images = props.categories.map(category=>
        <Grid item key={category.name} xs={12} sm={6} md={4} lg={3}>
            <img src={category.image.type} className="Image_Category" alt={category.name} value={category.name} onClick={()=>props.setCategory(category.name, category.image.type)}/>
        </Grid>
        )
    return(
        <Container fixed >
            <Typography variant="h4" style={{color:"white", paddingBottom:"20px",}} >Choice a Category </Typography>
            <Grid container spacing={0}>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                    <div style={{width:"100%", height:"30px" ,backgroundColor:"white", border:"3px solid yellow",borderRadius:"30px"}}>
                        <div style={{width:"0%",height:"100%", backgroundColor:"blue",borderRadius:"30px"}}></div>
                    </div>
                </Grid>
                    <Grid  item xs={1} sm={1} md={1} lg={1}>
                        <Typography  variant="h4" style={{color:"White"}}>0%</Typography>
                    </Grid>
            </Grid><br/>
            <Grid container justify="center" spacing={1}>
                {images}
            </Grid>
        </Container>
    )
}

export default Category