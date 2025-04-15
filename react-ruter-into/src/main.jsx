import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,  } from 'react-router'
import Root from './components/Root/Root'
import Home from './components/home/Home'
import Mobiles from './components/Mobiles/Mobiles'
import Laptops from './components/Mobiles/Laptops/Laptops'



const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index:true,Component:Home},
      {path:'Mobiles',Component:Mobiles},
      {path:'Laptops',Component:Laptops}
    ]
  },
   {
    path:'/about',
    element:<div>about me</div>
   },
   {
    path:'/blog',
    element:<div>blog</div>
   },
   
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
