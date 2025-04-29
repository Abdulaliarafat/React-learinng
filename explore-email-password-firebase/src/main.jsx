import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/LogIn/Login.jsx'
import Register from './components/Register/Register.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

 const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        index:true,
        Component: Home
      },
     {
      path:'/Login',
      Component: Login
     },
     {
      path:'/Register',
      Component: Register
     },
     {path:'/SignUp',Component:SignUp}
    ]
  }
 ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
