// import CartContext from "./CartContext";
// import { useState, useEffect,useContext } from "react";


// const CartProvider = (props) => {
// // const [isLogin, setIsLogin] = useState(false);
// // const initialToken = localStorage.getItem('token');
// const [token, setToken] = useState(null);
// const [email, setEmail] = useState('');
// const [isLoggedIn, setIsLoggedIn] = useState(false);

// // const userIsLoggedIn = !!token;

// const logInHandler = (token) => {
//     setIsLoggedIn(true)
//     setToken(token)
//     // localStorage.setItem('token', token)
// }

// const logOutHandler = () => {
//     setIsLoggedIn(false);
//     setToken(null);
//     // localStorage.removeItem('token');
// }

// // const contextValue = {
// //     token:token,
// //     isLoggedIn:isLogin,
// //     setIsLogin,
// //     logOut:logOutHandler,
    
// // }
// return(
//     <>
//     <CartContext.Provider value={{isLoggedIn,setEmail,logInHandler,logOutHandler}}>{props.children}</CartContext.Provider>
//     </>
// )

// }
// export default CartProvider;

import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = (token) => {
    setIsLoggedIn(true);
    setToken(token);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  return (
    <CartContext.Provider value={{isLoggedIn, setEmail, logInHandler, logOutHandler}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
