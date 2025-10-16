import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";



 const router =createBrowserRouter([

    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                index:true,
                element:<Home></Home>,

            }
        ]
    },
 ])