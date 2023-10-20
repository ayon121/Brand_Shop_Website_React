
// import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProviers';
const ProductDetails = ()=> {
    const { id } = useParams()
    const [currentproduct, setProduct] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://brand-shop-server-side-k1n8nlw6c-ayons-projects.vercel.app/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { name, price, image, description, category, brands  } = currentproduct
    const email = user?.email
    const userid = email?.slice(0,5)
    
    const Cart = {...currentproduct , userid}

    const addtocart = (Cart) => {
        fetch('https://brand-shop-server-side-k1n8nlw6c-ayons-projects.vercel.app/Mycarts', 
           {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(Cart)
           } 
        )
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast("Product Added Successfully")
            
            }
        })
    }
    
    return (
        <div>
            <div className='h-44'>
            <Navbar></Navbar>
            </div >
            <h1 className='text-4xl text-center mt-4 font-Script'>{name}</h1>
            <div className='max-w-5xl mx-auto mt-4 px-3 border-black border-4 rounded-3xl h-96'>
                <img className='w-full h-full rounded-3xl' src={image} alt="" />
            </div>
            <div className='max-w-5xl mx-auto px-3 mt-4 font-Mukta'>
                <p>{description}</p>
                <p className='text-2xl font-bold mt-3'>{category} , {brands}</p>
                <h1 className='text-3xl md:text-5xl mt-3'>${price}</h1>
                <button onClick={() => addtocart(Cart)} className="btn mt-3 bg-black text-white">Add to Cart</button>
            </div>
            <ToastContainer />
        </div>
    );
};

ProductDetails.propTypes = {
    
};

export default ProductDetails;