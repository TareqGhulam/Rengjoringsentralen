import React , {useState, useEffect} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
import { Container } from '@material-ui/core'
import { API } from '../config'
import fetch from 'isomorphic-unfetch'
import {Typography, Button ,Paper, Grid} from '@material-ui/core'

import Area from  '../components/quote/area'

const active = [false,false,false,false,false,false,false,false,false]
const isTrue = true
const Quote = (props)=>{
    const router = useRouter()
    const [progress, setProgress]  = useState(0)

    // let [services, setServices] = useState(props.list.services)
    // let [services, setServices] = useState()
    const [activeSr, setActivesr] = useState([...active])

    const [service_name, setServiceName] = useState('')
    // const [company_id, setCompanyId] = useState('')
    const [service, setService] = useState('')
    const [showService, setShowService] = useState(isTrue)
  console.log("here")

    const handleServiceId = (service_name, service, index)=>{
        const activtaed = [...active]
        activtaed[index] = true
        setServiceName(service_name)
        setService(service)
        setActivesr(activtaed)
            setProgress(30)
    }
    const handleNextCall = ()=>{
        setShowService(false)
    }
        
    // let servicelist = "Loading...."
    // if(services){
    //     servicelist = services.map((category, index)=>
    //         // <Grid item key={category._id} xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
    //         //     <Paper 
    //         //      style={{textAlign:"center",padding:"10px", backgroundColor:"#D4DFFF"}}
    //         //      className="Quote_service_container_papper" 
    //         //      onClick={()=>handleServiceId(category._id, category.company_id, category.service)}>
    //         //          <div style={{height:"120px"}}>
    //         //                 <img src={API+category.image}  alt={category.service} />
    //         //         </div>  <br/> 
    //         //         <div  style={{height:"50px"}}>
    //         //            <Typography style={{textAlign:"center"}}>{category.service}</Typography><br/>
    //         //         </div>       
    //         //     </Paper><br/>
    //         // </Grid>
    //         )
    // }
    return(
        <div className="Quote_service">
            
            <Container fixed className="Quote_service_container">
                <br/>
            <div style={{float:'right', marginTop:"-3vh"}}>
              <Link href="/">
                  <a>

                    <img src="./static/image/Vector 5.png"/>
                  </a>
              </Link>
            </div> <br/> <br/> 
             {  showService &&  <div>

               <span className="Quote_service_container_title" >Take few steps before <br/>perfect clean place</span><br/><br/><br/><br/>
       
                    <img className="quote_progress_left_icon"  style={{marginLeft:`${progress}%`}}src="./static/image/progress.png"/>
            

                    <img className="quote_progress_right_icon"  src="./static/image/destination.png"/>
                <div className="quote_progress">
                        <div style={{width:`${progress+2}%`}} className="quote_progress_done"></div>
                </div>
                <p className="quote_progress_left_text"  style={{marginLeft:`${progress}%`}}>{progress}%</p>
                <p className="Quote_service_title">Choice category</p>
                <Grid container  justify="center" style={{padding:"10px"}}>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
                        <div 
                        className={activeSr[0] ? "Quote_service_container_div_active" :"Quote_service_container_papper"} 
                        onClick={()=>handleServiceId("DayCare","DayCare cleaning", 0 )}
                        >
                            <div style={{height:"100px"}}>
                                    <img src="./static/image/DayCare.png"  alt="DayCare" />
                            </div>  
                            <div  style={{height:"50px"}}>
                            <p className="Quote_service_text">DayCare<br/> cleaning</p><br/>
                            </div>       <br/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
                        <div 
                        className={activeSr[1] ? "Quote_service_container_div_active" :"Quote_service_container_papper"} 
                        onClick={()=>handleServiceId("Home/Apartment","Home/Apartment cleaning", 1 )}
                        >
                            <div style={{height:"100px"}}>
                                    <img src="./static/image/Apartment.png"  alt="Home/Apartment" />
                            </div>  
                            <div  style={{height:"50px"}}>
                            <p className="Quote_service_text">Home/Apartment cleaning</p><br/>
                            </div>       <br/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
                        <div 
                        className={activeSr[2] ? "Quote_service_container_div_active" :"Quote_service_container_papper"} 
                        onClick={()=>handleServiceId("Office","Office cleaning", 2 )}
                        >
                            <div style={{height:"100px"}}>
                                    <img src="./static/image/Office.png"  alt="Office" />
                            </div>  
                            <div  style={{height:"50px"}}>
                            <p className="Quote_service_text">Office <br/> cleaning</p><br/>
                            </div>       <br/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
                        <div 
                        className={activeSr[3] ? "Quote_service_container_div_active" :"Quote_service_container_papper"} 
                        onClick={()=>handleServiceId("Construction","Construction cleaning", 3 )}
                        >
                            <div style={{height:"100px"}}>
                                    <img src="./static/image/Construction.png"  alt="Construction" />
                            </div>  
                            <div  style={{height:"50px"}}>
                            <p className="Quote_service_text">Construction <br/> cleaning</p><br/>
                            </div>       <br/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
                        <div 
                        className={activeSr[4] ? "Quote_service_container_div_active" :"Quote_service_container_papper"} 
                        onClick={()=>handleServiceId("Carpet","Carpet cleaning", 4 )}
                        >
                            <div style={{height:"100px"}}>
                                    <img src="./static/image/Carpet.png"  alt="Carpet" />
                            </div>  
                            <div  style={{height:"50px"}}>
                            <p className="Quote_service_text">Carpet<br/> cleaning</p><br/>
                            </div>       <br/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
                        <div 
                        className={activeSr[5] ? "Quote_service_container_div_active" :"Quote_service_container_papper"} 
                        onClick={()=>handleServiceId("Move in/out","Move in/out cleaning",5 )}
                        >
                            <div style={{height:"100px"}}>
                                    <img src="./static/image/Move.png"  alt="Move in/out" />
                            </div>  
                            <div  style={{height:"50px"}}>
                            <p className="Quote_service_text">Move in/out <br/>cleaning</p><br/>
                            </div>       <br/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
                        <div 
                        className={activeSr[6] ? "Quote_service_container_div_active" :"Quote_service_container_papper"} 
                        onClick={()=>handleServiceId("AIRBNB","AIRBNB cleaning", 6 )}
                        >
                            <div style={{height:"100px"}}>
                                    <img src="./static/image/AIRBNB.png"  alt="AIRBNB" />
                            </div>  
                            <div  style={{height:"50px"}}>
                            <p className="Quote_service_text">AIRBNB <br/> cleaning</p><br/>
                            </div>       <br/>
                        </div>
                    </Grid>
                  {/* {servicelist} */}
                </Grid>
                <Button variant="outlined" color="primary" style={{marginRight:"15px"}}>     
                    <Link href="/">
                       <a>Back</a>
                    </Link>
                </Button>
                <Button variant="contained" color="primary" onClick={handleNextCall} style={{backgroundColor:"#325FFF", }}>     
                    <Link href={`/service/?serviceQuery=${service_name}&service=${service}`}>
                        <a style={{textDecoration:"none",color:"white"}}>
                        Next
                        </a>
                    </Link>
                </Button>
                </div>}

                {/* {!showService && <Area service_name={service_name} service={service}/>} */}
                
            </Container>

        </div>
    )
}

// Quote.getInitialProps = async ({req}) => {
//     // console.log(API)
//     console.log(req)
//     //  const host =  req.headers.host  
//     // console.log(host)
//     const res = await fetch(`${API}api/service/customer/localhost:3000`)
//     const json = await res.json()
//     // console.log(json)
//     return { list: json }
//   }

export default Quote