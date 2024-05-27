
import UpdateProfile from "./UpdataProfile";
import {Route, Routes} from 'react-router-dom';
import Message from "./Message";
const Routes = () => {

    return(
        <Routes>
            <Route path='/UpdateProfile' element={<UpdateProfile/>}></Route>
            <Route path='/Message' element={<Message/>}></Route>
        </Routes>
    )
}
export default Routes;