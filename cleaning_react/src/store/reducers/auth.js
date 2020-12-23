import * as actionTypes from '../actions/actionTypes'

let initialState = {
    token :"",
    user:{}
}


const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token:action.token,
                user:action.user
            }
        case actionTypes.LOG_OUT:
            return{
                ...state,
                token:'',
                user:{}
            }
                 
        default :
         return state    
    }
}

export default reducer

