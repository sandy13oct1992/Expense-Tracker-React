
import { NavLink } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const Header = () => {

    const {isLogin} = useContext(CartContext);
return(
<>
{isLogin && <p>Your profile is Incomplete</p>}
{isLogin && (
  <NavLink to="/UpdateProfile">
    <button>Update your Profile</button>
  </NavLink>)
}
</>
)
}
export default Header;