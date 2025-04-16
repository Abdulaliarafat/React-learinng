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
import Posts from './components/Posts/Posts'
import PostsDitals from './components/POstDitails/PostsDitals'

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
      loader:({params})=>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
          Component:UserDetails
        },
        {path:'Posts',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
          Component:Posts
        },
        {path:'Posts/:PostId',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`),
          Component:PostsDitals
        }

        
    ]
  }   
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
