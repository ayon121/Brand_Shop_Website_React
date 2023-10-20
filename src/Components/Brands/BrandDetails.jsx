
// import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Navbar from "../Shared/Navbar";
const BrandDetails = () => {
    const { brandname } = useParams()
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/poducts/${brandname}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [brandname])

    
    return (
        <div>
            <div className='h-44'>
            <Navbar></Navbar>
            </div>
            <h1 className="text-4xl font-Script mt-5 text-center" >{brandname}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 mt-6">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

BrandDetails.propTypes = {

};

export default BrandDetails;