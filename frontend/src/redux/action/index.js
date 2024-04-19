export const increment=(number)=>{
    return (dispatch)=>{
        dispatch({
            type:'increment',
            payload:number
        })
    }
}
export const decrement=(number)=>{
    return (dispatch)=>{
        dispatch({
            type:'decrement',
            payload:number
        })
    }
}


export const addToCart=(menuItem)=>{
    //console.log(menuItem);
    return (dispatch)=>{
        dispatch({
            type:"ADD_TO_CART", 
            payload:menuItem
        })
    }
}

export const removeFromCart=(menuItem)=>{
    return (dispatch) =>{
        dispatch({
            type:'REMOVE_FROM_CART',
            payload:menuItem
        })
    }
}

export const clearCart=()=>{
    return (dispatch)=>{
        dispatch({
            type:'CLEAR_CART'
        })
    }
}

export const loginRequest=(email,password)=>{
    return (dispatch)=>{
        dispatch({
            type:'LOGIN_REQUEST',
             payload:{email,password}
        })
    }
}

export const loginSuccess=(username)=>{
    return (dispatch)=>{
        dispatch({
            type:'LOGIN_SUCCESS',
             payload:username
        })
    }

}

export const loginFailure=(error)=>{
    return (dispatch)=>{
        dispatch({
            type:'LOGIN_FAILURE',
            payload:error
        })
    }
}

export const loginOut=()=>{
    return (dispatch)=>{
        dispatch({
            type:'LOG_OUT'
        })
    }
}


