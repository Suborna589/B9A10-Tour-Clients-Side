
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import LogIn from "../Home/Navbar/LogIn/LogIn";
import SignUp from "../Home/Navbar/SignUp/SignUp";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>  , 
        errorElement:<NotFound></NotFound>,

        children:[ 

            {
                path:'/', 
                loader:()=>fetch("/tourism.json"),
                element:<Home></Home>
            }, 

            {
                path:'/login', 
                element:<LogIn></LogIn>
            },
            {
                path:'/signup', 
                element:<SignUp></SignUp>
            },
          

        ]

    },

 
]) 


export default router;