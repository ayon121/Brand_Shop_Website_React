
// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [allbrands, setBrands] = useState([])
    useEffect(() => {
        fetch('Brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, [])

    console.log(allbrands);
    return (
        <div className="font-Mukta">
            <h1 className="text-4xl text-center">ReKnowed Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 mt-5">
                {
                    allbrands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

Brands.propTypes = {

};

export default Brands;