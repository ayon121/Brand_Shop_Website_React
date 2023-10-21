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
import AddProduct from './Components/Pages/AddProduct';
import BrandDetails from './Components/Brands/BrandDetails';
import ProductDetails from './Components/Product/ProductDetails';
import ProductUpdate from './Components/Product/ProductUpdate';
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Mycart from './Components/Pages/Mycart';

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
      },
      {
        path : "/addproduct" , 
        element : <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path : "/brand/:brandname",
        element : <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>
      },
      {
        path : "/productDetails/:id" ,
        element : <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path : "/productUpdate/:id" ,
        element : <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-side-31efspzvl-ayons-projects.vercel.app/product/${params.id}`)
      },
      {
        path : "/mycart/:id",
        element :<PrivateRoute> <Mycart></Mycart></PrivateRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-side-31efspzvl-ayons-projects.vercel.app/carts/${params.id}`)

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
