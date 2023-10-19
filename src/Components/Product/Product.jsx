
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, price, image, _id } = product
    return (
        <div className="card w-auto h-96 bg-base-100 shadow-xl font-Mukta mt-2 mb-2">
            <figure className=" pt-10">
                <img src={image} alt="product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <div className="card-actions">
                    <Link to={`/productDetails/${_id}`}><button className="btn bg-black text-white">View Details</button></Link>
                    <button className="btn bg-black text-white">Update Details</button>

                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
};

export default Product;