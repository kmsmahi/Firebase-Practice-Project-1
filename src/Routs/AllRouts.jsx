import { createBrowserRouter } from "react-router";
import RootLayOut from "../Roots/RootLayOut";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    children:[
        {
            index: true,
            element:<Home></Home>,
        },
        {
            path:'about',
            element:<AboutUs></AboutUs>,
        },
        {
            path: 'signin',
            element:<SignIn></SignIn>,
        },
        {
            path:'signup',
            element:<SignUp></SignUp>,
        },
    ]
  },
]);