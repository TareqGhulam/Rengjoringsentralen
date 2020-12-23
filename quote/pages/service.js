import React , {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Area from '../components/quote/area'
import { Container } from '@material-ui/core'
import Link from 'next/link'


const Service = (props)=>{
    const router = useRouter()
    const {name} = router.query
    const service_name = router.query.serviceQuery
    const service = router.query.service
    console.log(router)
    return(
        <div className="Quote_service">
            <Container fixed className="Quote_service_container">
            <div style={{float:'right', marginTop:"-1vh"}}>
              <Link href="/">
                  <a>

                    <img src="./static/image/Vector 5.png"/>
                  </a>
              </Link>
            </div> <br/> <br/> 
                
                <Area service_name={service_name} service={service}/>
            </Container>
        </div>
    )
}


export default Service

