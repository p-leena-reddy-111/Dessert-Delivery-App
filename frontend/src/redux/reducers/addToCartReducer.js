const initialState={
    desserts:[{}],
    total:0,
    amount:0
}

const addToCartReducer=(state=initialState,action)=>
{
    if (action.type==="ADD_TO_CART")
    {
            const {name,_id,price,...rest}=action.payload; //item=dessert

            const existingItemIndex=state.desserts.findIndex(item=>item._id===_id);
            if(existingItemIndex!==-1)
            {
                const updatedDesserts = [
                    ...state.desserts.slice(0, existingItemIndex),
                    { ...state.desserts[existingItemIndex], quantity: state.desserts[existingItemIndex].quantity + 1 },
                    ...state.desserts.slice(existingItemIndex + 1)
                  ];
                return {
                    ...state,
                    desserts: updatedDesserts,
                    total: state.total + 1,
                    amount: state.amount+ price
                };
            }
            const quantity=1;
            const newDessert={name,_id,price,quantity,...rest};
            return {
                ...state,
                desserts:[...state.desserts,newDessert],
                total:state.total + 1,
                amount: state.amount+ price
            }

    }
    else if(action.type==='REMOVE_FROM_CART')
    {
        const {_id,price,...rest}=action.payload; 
        const existingItemIndex=state.desserts.findIndex(item=>item._id===_id);
        if(existingItemIndex===-1)
        {
            return state;
        }
        
        const updatedQuantity=state.desserts[existingItemIndex].quantity-1;
       
        if(updatedQuantity>0)
        {
            const updatedDesserts = [
                ...state.desserts.slice(0, existingItemIndex),
                { ...state.desserts[existingItemIndex], quantity:updatedQuantity},
                ...state.desserts.slice(existingItemIndex + 1)
            ];
            return{
                ...state,
                desserts:updatedDesserts,
                total: state.total - 1,
                amount: state.amount-price
            }
        }
        return {
            ...state,
            desserts:[...state.desserts.slice(0,existingItemIndex),...state.desserts.slice(existingItemIndex+1)],
            total:state.total-1,
            amount:state.amount-price
        }
    }
    else if(action.type==='CLEAR_CART')
    {
        return{
            ...state,
            desserts:undefined,
            total:0,
            amount:0
        }
    }
    else
    {
        return state;
    }
};
export default addToCartReducer;