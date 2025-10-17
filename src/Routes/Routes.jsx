import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";

import Homepage from "../Pages/Homepage";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import Signup from "../Pages/Signup";



  export const router =createBrowserRouter([

    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                index:true,
                element:<Homepage></Homepage>,

            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>,
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    },
 ])