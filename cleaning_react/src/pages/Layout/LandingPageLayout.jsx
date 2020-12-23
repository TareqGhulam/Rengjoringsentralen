import React,{useState}  from 'react'
import Toolbar from '../../components/Toolbar/LandingPageToolBar'


const  Layout = (props)=>{
   
    const [sideDrawer , setSideDrawer] = useState(false)

    const SidedrawerControllHandler = ()=>{
        setSideDrawer(!sideDrawer)
    }
    
   
    const cancleDrawerHandler=()=>{
        setSideDrawer(false)
    }
    
        return(
            <div >
                <Toolbar 
                // SidedrawerControll={SidedrawerControllHandler}
                // cancleDrawer={cancleDrawerHandler}
                />
                

                <main>
                    {props.children}
                </main>
             
            </div>
        )
    
}


  
export default Layout