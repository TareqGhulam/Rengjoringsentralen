import React, {useState} from 'react'
import {Container, Paper,TextField ,Button, Typography, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid} from '@material-ui/core'
import axios from 'axios'

import * as action from '../../store/actions/index'
import {connect} from 'react-redux'

const useStyles = makeStyles({
    root:{
        paddingTop:"10vh",

        display:"flex",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    papper:{
        width:"45vw",
        minWidth:"330px",
    },
    input: {
        width: '40vw',
        minWidth:"300px",
        paddingBottom:"20px",
        textAlign:"center"
    },
    input1: {
        width: '20vw',
        minWidth:"80%",
        paddingBottom:"20px",
        textAlign:"center"
    },
    select:{
        width: '40vw',
        minWidth:"300px",
        // paddingBottom:"20px",
        textAlign:"center"
    },
    button:{
        width: '40vw',
        minWidth:"300px",
        
    }
  })

const Registration = (props)=>{
    const [email, setEmail]= useState('')
    const [fname, setFname]= useState('')
    const [lname, setLname]= useState('')
    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [industryName, setIndustryName]= useState('')
    const [password, setPassword]= useState('')
    const [repassword, seRepassword]= useState('')
    const [step, setStep] = useState(0)
    const [industry, setIndustry] = useState('')
    const classes = useStyles();
        
    const signupHandler = (event)=>{
        event.preventDefault()
       
        let inputData={
            industryName:industryName,
            industry:industry,
            firstName:fname,
            lastName:lname,
            email:email,
            phone:phone,
            password:password,
            confirmPassword:repassword,
        }
        console.log(inputData)
      
        let headers= {
            "Content-Type": "application/json"
        }
        axios.post(process.env.REACT_APP_BASE_URL + 'api/user/' , inputData,
        {headers:headers})
         .then(result=>{
             console.log(result)
            const expiresIn = new Date(new Date().getTime()+ 5*3600*1000);

             props.onAuth(result.data.token,expiresIn, result.data.user)
         })
         .catch(error=>{
             console.log(error)
         })
        
      }
      let jsxbody = <div>
          <h4 style={{color: 'blue'}}>Welcome to Cleaning Company</h4>
            <Typography variant="h4" color="primary"><strong>Let's connect your business listing and Start getting reviews</strong></Typography><br/>
          
          <ListItem >
            <ListItemIcon><AccessTimeIcon color="primary" fontSize="large" /></ListItemIcon>
            <ListItemText><Typography variant="h6" color="primary">  2 steps | 3 minutes</Typography></ListItemText>
        </ListItem>
        <ListItem >
          
            <li>This automatically creates a landing page where customers can leave you reviews</li>
        </ListItem >
        <div style={{textAlign:"right"}}>
        <Button style={{color :"white",backgroundColor:"blue", borderRadius:"50px", right:"15px"}}
                onClick= {()=>setStep(1)}
        >
            Get Started &nbsp;<PlayCircleFilledIcon/></Button>
        </div>    
      </div>


      if(step === 1){
          jsxbody =<div >
               <div style={{textAlign:'left', padding : '20px'}}>
               <Typography variant="h6" color="primary"> step 1 of 2</Typography>
               <Typography variant="h4" color="primary"> Tell us about your business</Typography>
               </div>
               <TextField variant="outlined" required type="TEXT" 
                    className={classes.input} 
                    onChange={(event)=>setIndustryName(event.target.value)}
                        label="The Name"
                        placeholder="enter name here..."
                />
                {/* <FormControl >
                <InputLabel id="industry">Industry*</InputLabel>
                <Select
                required
                className={classes.input} 
                labelId="industry"
                id="industry"
                value={industry}
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={(e)=>setIndustry(e.target.value)}
                >
                
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl> */}
                 <br/><br/>
               <div style={{textAlign:"right"}}>

            <Button style={{color :"white",backgroundColor:"blue", borderRadius:"50px", right:"20px"}}
                    onClick= {()=>setStep(2)}
            >
            next &nbsp;<PlayCircleFilledIcon/></Button>
        </div>    
          </div>
      }
      if(step === 2){
          jsxbody =<div>
              <div style={{textAlign:'left', padding : '20px'}}>
               <Typography variant="h6" color="primary"> step 2 of 2</Typography>
               <Typography variant="h4" color="primary"> Tell us about your self:</Typography>
               </div>
                 <Grid container justify="center" spacing={3}>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <TextField variant="outlined" required type="text" 
                           className= {classes.input1}
                            onChange={(event)=>setFname(event.target.value)}
                                label="First name"
                                placeholder="enter first name..."
                        />
                     </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <TextField variant="outlined" required type="text" 
                            className= {classes.input1}
                            onChange={(event)=>setLname(event.target.value)}
                                label="Last name"
                                placeholder="enter last name here..."
                        />
                     </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <TextField variant="outlined" required type="email" 
                            className= {classes.input1}
                            onChange={(event)=>setEmail(event.target.value)}
                                label="Your Email"
                                placeholder='you email...'
                        />
                     </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <TextField variant="outlined" required type="phone" 
                            className= {classes.input1}
 
                            onChange={(event)=>setPhone(event.target.value)}
                                label="Your Phone"
                                placeholder="enter your phone..."
                        />
                     </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <TextField variant="outlined" required type="password" 
                           className= {classes.input1}

                            onChange={(event)=>setPassword(event.target.value)}
                                label="Password"
                                placeholder="enter password..."
                        />
                     </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                     <TextField variant="outlined" required type="password" 
                           className= {classes.input1}

                            onChange={(event)=>seRepassword(event.target.value)}
                                label="Confirm Password"
                                placeholder="confirm Password..."
                        />
                     </Grid>

                 </Grid>
                <Typography>By creating a our account you are accepting <span style={{color:"blue"}}>Our terms and services</span></Typography>
                 <div style={{textAlign:"right", marginTop:"10px"}}>
                <Button style={{color :"white",backgroundColor:"blue", borderRadius:"50px", right:"20px"}}
                        onClick= {signupHandler}
                >
                Singup</Button>
                </div>

          </div>
      }
    return(
        <Container fixed className={classes.root}>
            <Paper className={classes.papper}>
            <br/>
             {jsxbody}
             <br/> <br/>
            </Paper>
    </Container>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        onAuth:(token,expiresIn,user)=>dispatch(action.auth_start(token,expiresIn, user))
    }
}
export default connect(null,mapDispatchToProps)(Registration)