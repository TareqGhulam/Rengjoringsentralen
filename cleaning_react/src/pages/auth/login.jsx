import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Container, Paper,TextField ,Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import * as action from '../../store/actions/index'
import {connect} from 'react-redux'
const useStyles = makeStyles({
    root:{
        paddingTop:"20vh",
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
        paddingBottom:"20px"
    },
    button:{
        width: '40vw',
        minWidth:"300px",
        
    }
  })

const Login = (props)=>{
    const [email, setEmail]= useState('')
    const [password, setpassword]= useState('')
    // const [islogin , setIsLogIn] = useState(true)
    const classes = useStyles();
        
    // const changelongintoSignup = ()=>{
    //     setIsLogIn(false)
    // }
    const loginHandler = (event)=>{
        event.preventDefault()
       
        let headers= {
            "Content-Type": "application/json"
        }
        const inputData={
            email,password
        }
        console.log(inputData)
        axios.post(process.env.REACT_APP_BASE_URL + 'api/user/login' , inputData,
        {headers:headers})
        .then(result=>{
            console.log(result)
            const expiresIn = new Date(new Date().getTime()+ 5*3600*1000);
            props.onAuth(result.data.token, expiresIn , result.data.user)
        })
        .catch(error=>{
            console.log(error)
        })
      }
      
       
        let jsx_body = <div>
             <h4 style={{color:"grey"}}>Welcome back</h4>
            <h2><strong>Login to your Account</strong></h2>
             <br/>
                <TextField variant="outlined" required type="email" 
                    className={classes.input} 
                    onChange={(event)=>setEmail(event.target.value)}
                        label="Email"
                        placeholder="enter you mail..."
                />
                <TextField variant="outlined" required type="password" 
                    className={classes.input} 
                    onChange={(event)=>setpassword(event.target.value)}
                    label="password"
                    placeholder="********"
                />
                 <Button variant="contained" color="primary" size="large"  className={classes.button} onClick={loginHandler}>Login</Button><br/> <br/>
               <Typography variant="body1" style={{left:"0%", fontWeight:"bold"}}>Not Registered Yet? <NavLink to="/register" >Register</NavLink> </Typography> <br/>

        </div>
   
    return(
        <Container fixed className={classes.root}>
            <Paper className={classes.papper}>

                 <br/>
                 {jsx_body}
                <br/><br/>
              
            </Paper>
    </Container>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        onAuth:(token, expiresIn, user)=>dispatch(action.auth_start(token,expiresIn, user))
    }
}
export default connect(null,mapDispatchToProps)(Login)