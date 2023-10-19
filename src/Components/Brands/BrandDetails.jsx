
// import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";

const BrandDetails = () => {
    const {brandname} = useParams()
    return (
        <div>
            <h1>{brandname}</h1>
        </div>
    );
};

BrandDetails.propTypes = {
    
};

export default BrandDetails;