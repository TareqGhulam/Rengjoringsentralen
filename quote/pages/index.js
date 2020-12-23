import {Container , Typography,Button} from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'
const Index = ()=>{
    const service="Construction"
    const serviceQuery="Construction cleaning"

    return(
        <Container>
            <Typography>Welcome to app</Typography>
            <Button >
                <Link href="/quote">
                    <a>
                       Get quote
                    </a>
                </Link>
        </Button>
        <Button >
        {/* <Link href={{ pathname:"/service/service", query:{serviceQuery:serviceQuery, service:service}}}> */}

                <Link href={`/service/?serviceQuery=${serviceQuery}&service=${service}`}>
                    <a>
                       Construction
                    </a>
                </Link>
        </Button>
        </Container>
    )
}


export default Index