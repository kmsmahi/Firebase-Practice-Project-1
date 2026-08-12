import { createBrowserRouter } from "react-router";
import HomeLayOuts from "../LayOuts/HomeLayOuts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import CategoryNews from "../Componenets/CategoryNews";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AuthLayout from "../Componenets/AuthLayout";
import Logout from "../Pages/Logout";
import NewsDetails from "../Componenets/NewsDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayOuts></HomeLayOuts>,
    children:[
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/career',
            element:<Career></Career>
        },
        {
            path:'/category/:id',
            element:<CategoryNews></CategoryNews>,
            loader:()=>fetch('/news.json'),
            hydrateFallbackElement:<h1>.......loading</h1>
        },

    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'/auth/register',
        element:<RegisterPage></RegisterPage>
      },
      // {
      //   path:'/newsDetails/:id',
      //   element:<NewsDetails></NewsDetails>
      // }
    ]
  },
  {
        path:'/newsDetails/:id',
        element:<NewsDetails></NewsDetails>,
        loader:()=>fetch('/news.json'),
        hydrateFallbackElement:<h1>.......loading</h1>
  },
  {
    path: "/*",
    element: <h1>Error404</h1>,
  }
]);
export default router;
