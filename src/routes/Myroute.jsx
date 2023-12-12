import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/mainLayout/root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";


const Myroute = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            }
        ]
    }

])

export default Myroute;