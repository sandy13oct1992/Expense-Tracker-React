import CartContext from "./CartContext";
import { useState, useEffect,useContext } from "react";


const CartProvider = (props) => {
// const [isLogin, setIsLogin] = useState(false);

const [token, setToken] = useState(null);

const userIsLoggedIn = !!token;

const logInHandler = (token) => {
    setToken(token)
}

const logOutHandler = () => {
    setToken(null);
}

const contextValue = {
    token:token,
    isLoggedIn:userIsLoggedIn,
    logIn:logInHandler,
    logOut:logOutHandler,
    
}
return(
    <>
    <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
    </>
)

}
export default CartProvider;