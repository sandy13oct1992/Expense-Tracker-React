// import { createContext } from "react";

// const CartContext = createContext({
//     // token:'',
//     // isLoggedIn:false,
//     // logIn: (token) =>{},
//     // logOut: ()=>{},
//     userIsLoggedIn: false,
//     logInHandler: (token) => {},
//     logOutHandler: () => {},
// });

// export default CartContext;

import { createContext } from "react";

const CartContext = createContext({
  userIsLoggedIn: false,
  logInHandler: (token) => {},
  logOutHandler: () => {},
  setEmail: (email) => {}
});

export default CartContext;
