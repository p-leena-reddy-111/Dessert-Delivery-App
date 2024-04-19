const initialState={
    isLoggedIn:false,
    username:'',
    loading:false,
    error:null,
};

const authReducer=(state=initialState,action)=>{
    if(action.type==='LOGIN_REQUEST')
    {
        return{
            ...state,
            loading:true,
        }
    }
    else if (action.type === 'LOGIN_SUCCESS') 
    {
        return {
            ...state,
            isLoggedIn:true,
            username:action.payload,
            loading:false,
        }
    }
    else if(action.type==="LOGIN_FAILURE")
    {
        return{
            ...state,
            loading:false,
            error:action.payload
        }
    }
    else if(action.type==="LOG_OUT")
    {
        return{
            ...state,
            isLoggedIn:false,
            username:'',
            loading:false,
        }
    }
    else
    {
        return state;
    }
}
export default  authReducer;