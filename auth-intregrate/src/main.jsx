import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Layout/Root';
import {createBrowserRouter,RouterProvider,} from "react-router";
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './signup/Signup';
import AuthProvider from './context/AuthProvider';
import Order from './Order/Order';
import Profile from './Profile/Profile';
import PrivateRoute from './Route.jsx/PrivateRoute';
import DashBoard from './DashBoard/DashBoard';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'login',Component:Login},
      {path:'signup',Component:Signup},
      {path:'order', element:<PrivateRoute><Order></Order></PrivateRoute>},
      {path:'profile', element:<PrivateRoute><Profile></Profile></PrivateRoute>},
      {path:'dashboard',element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
