import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Pages/Home';

import Register from './Components/Users_Functions/Register';
import Authproviders from './Providers/AuthProviers';
import Login from './Components/Users_Functions/Login';
import Error from './Components/Pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path : "/login" ,
        element : <Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <RouterProvider router={router} />
    </Authproviders>

  </React.StrictMode>,
)
