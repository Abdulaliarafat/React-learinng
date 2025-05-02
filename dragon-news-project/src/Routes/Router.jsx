import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Componets/pages/Home";
import CategoryNews from "../Componets/pages/CategoryNews";

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
                loader:()=>fetch('/news.json')
                
            }
        ]
        
    },
    {
        path:'/auth',
        element: <h1>auth layout</h1>
    },
    {
        path:'/news',
        element: <h1>news layout</h1>
    },
    {
        path:'/*',
        element: <h1>error404</h1>
    },

])
export default router