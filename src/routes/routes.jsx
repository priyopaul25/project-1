import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Signup from '../pages/Signup';

export const routes = createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,
    children: [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "/signup",
        element: <Signup/>
      }
    ]
  }
])

