
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import LogIn from "../Home/Navbar/LogIn/LogIn";
import SignUp from "../Home/Navbar/SignUp/SignUp";
import AllTourSpot from "../pages/AllTourSpot/AllTourSpot";
import MyList from "../pages/AllTourSpot/MyList/MyList";
import AddTourSpot from "../pages/AllTourSpot/AddTourSpot/AddTourSpot";

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
            {
                path:'/addspot', 
                element:<AddTourSpot></AddTourSpot>
            }, 

            {
                path:'/list', 
                element:<MyList></MyList>,
            },

            {
                path:"/allspot",
                element:<AllTourSpot></AllTourSpot>
            }
          

        ]

    },

 
]) 


export default router;