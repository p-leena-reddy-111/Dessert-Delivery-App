import {combineReducers} from "redux";
import cartReducer from "./cartReducer";
import addToCartReducer from "./addToCartReducer";
import authReducer from "./authReducer"
const reducers=combineReducers({
    number:cartReducer,
    cartAddedItems:addToCartReducer,
    userLoggedIn:authReducer
})

export default reducers;