import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../ErrorPages/Error';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:[
        {
           index:true,
           loader:()=>fetch('book.json'),
           path:'/',
           Component:Home
        },
        {
           path:'/about',
           Component:About
        },
        {
          path:'/bookDetails/:id',
          loader:()=>fetch('./book.json'),
          Component:BookDetails
        }
    ]
    },
    
  ]);