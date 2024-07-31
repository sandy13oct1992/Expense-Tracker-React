
// import { NavLink } from "react-bootstrap";
// import { useContext } from "react";
// import CartContext from "../store/CartContext";

// const Header = () => {

//     const {isLoggedIn,logOutHandler} = useContext(CartContext);

// // const isLogin = userIsLoggedIn;  

//     //For Q. no. 7
//     // const logouthandler = () => {
//     //   // CartCtx.logOut();
//     // }
  
// return(
// <>
// {isLoggedIn && <p>Your profile is Incomplete</p>}
// {isLoggedIn && (
//   <NavLink to="/UpdateProfile">
//     <button>Update your Profile</button>
//   </NavLink>)
// }
// {isLoggedIn && (
//   <li>
//     <button onClick={logOutHandler}></button>
//   </li>
// )}
// </>
// )
// }
// export default Header;

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const Header = () => {
  const {isLoggedIn, logOutHandler} = useContext(CartContext);

  return (
    <>
      {isLoggedIn && <p>Your profile is Incomplete</p>}
      {isLoggedIn && (
        <NavLink to="/UpdateProfile">
          <button>Update your Profile</button>
        </NavLink>
      )}
      {isLoggedIn && (
        <li>
          <button onClick={logOutHandler}>Logout</button>
        </li>
      )}
    </>
  );
};

export default Header;
