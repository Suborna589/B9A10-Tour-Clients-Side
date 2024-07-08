
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import LogIn from "../Home/Navbar/LogIn/LogIn";
import SignUp from "../Home/Navbar/SignUp/SignUp";
import AllTourSpot from "../pages/AllTourSpot/AllTourSpot";
import MyList from "../pages/AllTourSpot/MyList/MyList";
import AddTourSpot from "../pages/AllTourSpot/AddTourSpot/AddTourSpot";
import ViewDetails from "../Home/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import App from "../../../App";
import UpdateSpot from "../pages/AllTourSpot/AddTourSpot/UpdateSpot";
import Users from "../Home/Navbar/LogIn/Users";

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
                loader:()=>fetch('http://localhost:5000/spot')
            },

            {
                path:"/allspot",
                element:<AllTourSpot></AllTourSpot> , 
                loader:()=>fetch("/tourism.json"),
               
            },
            {
                path:'/details',
                element:<ViewDetails></ViewDetails>, 
                
            } ,
            { 
                path:'list/updateSpot/:id',
                element:<UpdateSpot></UpdateSpot>, 
                loader:({params})=> fetch (`http://localhost:5000/spot/${params.id}`)

            }, 
            {
                path:"/users",
                element:<Users></Users> ,
                loader:()=> fetch('http://localhost:5000/user')
            }
          

        ]

    },

 
]) 


export default router;