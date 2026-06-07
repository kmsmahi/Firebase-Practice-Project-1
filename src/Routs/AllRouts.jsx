import { createBrowserRouter } from "react-router";
import RootLayOut from "../Roots/RootLayOut";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
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
    ]
  },
]);