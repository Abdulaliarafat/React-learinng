import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,  } from 'react-router'
import Root from './components/Root/Root'
import Home from './components/home/Home'
import Mobiles from './components/Mobiles/Mobiles'
import Laptops from './components/Mobiles/Laptops/Laptops'
import Users from './components/Users/Users'
import Users2 from './components/Users2/Users2'
import UserDetails from './components/UserDetailds/UserDetails'

const usersPromise=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index:true,Component:Home},
      {path:'Mobiles',Component:Mobiles},
      {path:'Laptops',Component:Laptops},
      {
        path:'Users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users},
        {path:'Users2',
          element:<Suspense fallback={<h3>Loading.......</h3>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        },
        {path:'Users/:UserId',
          loader:({params})=>fetch(''),
          Component:UserDetails
        }
        
    ]
  }   
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
