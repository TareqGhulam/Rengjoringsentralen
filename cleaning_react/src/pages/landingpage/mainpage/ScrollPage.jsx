import React from 'react'

import {NavLink} from 'react-router-dom'
import { Link  } from 'react-scroll'
import {useHistory} from 'react-router-dom'

const ScrollToPage = (props)=>{
    const history = useHistory()

    return(
        <div>
            {/* <Link
            onClick={() => history.push('/services')}
            to={props.value}
            spy={true}
            smooth={true}
            hashSpy={true}
            isDynamic={true}
            >
                {props.children}
            </Link> */}
            <NavLink to={props.link}
                >
             {props.children}
         </NavLink>
        </div>
    )
}

export default ScrollToPage