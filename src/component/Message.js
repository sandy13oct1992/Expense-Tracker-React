import {Navlink} from "react-router-dom";
const Message = () => {

    return(
        <div>
            <h1>Your Prifile is Incomplete</h1>
            <Navlink to="/UpdateProfile">
                <button type="button"/>
                Update Your Profile
            </Navlink>
        </div>
    )
}
export default Message;