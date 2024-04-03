const cartReducer=(state=0,action)=>{
    if(action.type==='increment')
    {
        return state+action.payload
    }
    else if(action.type==='decrement')
    {
        if(state-action.payload>=0)
        {
            return state-action.payload
        }
        return 0;
    }
    else
    {
        return state;
    }
}
export default cartReducer;