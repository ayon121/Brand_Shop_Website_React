
// import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const BrandDetails = () => {
    const {brandname} = useParams()
    const [products , setProduct] = useState()
    
    useEffect(() => {
        fetch('http://localhost:5000/productDetails')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1>{brandname}</h1>
        </div>
    );
};

BrandDetails.propTypes = {
    
};

export default BrandDetails;