
// import UpdateProfile from "./UpdateProfile";
// import {Route, Routes} from 'react-router-dom';
// import Message from "./Message";
// const Routes = () => {

//     return(
//         <Routes>
//             <Route path='/UpdateProfile' element={<UpdateProfile/>}></Route>
//             <Route path='/Message' element={<Message/>}></Route>
//         </Routes>
//     )
// }
// export default Routes;

import UpdateProfile from "./UpdateProfile";
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Message from "./Message";
import Home from "./Home";

const AppRoutes = () => {
    return(
        <RouterRoutes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/UpdateProfile' element={<UpdateProfile/>}></Route>
            <Route path='/Message' element={<Message/>}></Route>
        </RouterRoutes>
    );
}

export default AppRoutes;
