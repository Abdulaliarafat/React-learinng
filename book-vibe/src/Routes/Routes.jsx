import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../ErrorPages/Error';
import Home from '../pages/Home/Home';
export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:[
        {
           index:true,
           path:'/',
           Component:Home
        }
    ]
    },
    
  ]);