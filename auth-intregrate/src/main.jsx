import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Layout/Root';
import {createBrowserRouter,RouterProvider,} from "react-router";
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './signup/Signup';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'login',Component:Login},
      {path:'signup',Component:Signup}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
