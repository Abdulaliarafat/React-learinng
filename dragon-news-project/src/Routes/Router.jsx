import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Componets/pages/Home";
import CategoryNews from "../Componets/pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import LoginPage from "../Componets/pages/LoginPage";
import Register from "../Componets/pages/Register";
import NewsDetails from "../Componets/pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Componets/pages/Loading";

const router=createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element:<Home></Home>
            },
            {
                path:'category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:()=>fetch('/news.json'),
                hydrateFallbackElement:<Loading></Loading>
            }
        ]    
    },
    {
        path:'/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/news-details/:id',
        element:(<PrivateRoute>
             <NewsDetails></NewsDetails>
                </PrivateRoute>),
        loader:()=>fetch('/news.json'),
        hydrateFallbackElement:<Loading></Loading>
    },
    {
        path:'/*',
        element: <h1>error404</h1>
    },

])
export default router