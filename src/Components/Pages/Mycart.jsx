
// import PropTypes from 'prop-types';

// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Cart from "../Cart/Cart";

const Mycart = () => {
  
    const carts  = useLoaderData()
    
    return (
        <div>
            <div className='h-44'>
            <Navbar></Navbar>
            </div>
            <h1 className="text-4xl font-Script mt-5 text-center" >My Cart {carts.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 mt-6">
                {
                    carts.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
                }
            </div>
            
        </div>
    );
};

Mycart.propTypes = {
    
};

export default Mycart;