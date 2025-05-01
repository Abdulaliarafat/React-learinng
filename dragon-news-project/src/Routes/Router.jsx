import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router=createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>
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