import * as actionTypes from './actionTypes'


export const auth_success =( token,user)=>{

    return{
        type:actionTypes.AUTH_SUCCESS,
        token:token,
        user
    }
}


export const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('ExpiresIn')
    localStorage.removeItem('email')
    localStorage.removeItem('industry')
    localStorage.removeItem('industryName')


    return{
        type:actionTypes.LOG_OUT

    }
}

export const auth_time_out = (expiresIn)=>{
    const time = new Date(expiresIn).getTime()-new Date().getTime()
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout())
        },time)
    }
    
}


export const auth_start = (token,expiresIn,user)=>{
    return dispatch =>{
    
        localStorage.setItem('token',token)
        localStorage.setItem('ExpiresIn', expiresIn)
        localStorage.setItem('email', user.email)
        localStorage.setItem('industry', user.industry)
        localStorage.setItem('industryName', user.industryName)

        let userInfo ={
            email:user.email,
            industry:user.industry,
            industryName :user.industryName
        }
        dispatch(auth_success(token,userInfo))
        dispatch(auth_time_out(expiresIn))
  

    }
}


export const auth_check = ()=>{
    return dispatch=>{
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }
        else{
            let expiresIn = new Date(localStorage.getItem('ExpiresIn'))
            if(expiresIn<= new Date()){
                dispatch(logout())
            } 
            else{
            const email = localStorage.getItem('email')
            const industry = localStorage.getItem('industry')
            const industryName = localStorage.getItem('industryName')

             
                let userInfo ={
                    email,
                    industry,
                    industryName
                }
            
               dispatch(auth_success(token,userInfo))
               dispatch(auth_time_out(expiresIn))

            }
            
        }

    }
} 