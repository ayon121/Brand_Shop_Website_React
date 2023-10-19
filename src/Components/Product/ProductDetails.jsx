
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const ProductDetails = ()=> {
    const { id } = useParams()
    const [currentproduct, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { name, price, image, description, category, brands  } = currentproduct
    return (
        <div>
            <div className='h-44'>
            <Navbar></Navbar>
            </div>
            <h1 className='text-4xl text-center mt-4 font-Script'>{name}</h1>
            <div className='max-w-5xl mx-auto mt-4 border-black border-4 rounded-3xl h-96'>
                <img className='w-full h-full rounded-3xl' src={image} alt="" />
            </div>
            <div className='max-w-5xl mx-auto mt-4 font-Mukta'>
                <p>{description}</p>
                <p className='text-2xl font-bold mt-3'>{category} , {brands}</p>
                <h1 className='text-3xl md:text-5xl mt-3'>${price}</h1>
                <button className="btn mt-3 bg-black text-white">Add to Cart</button>
            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    
};

export default ProductDetails;