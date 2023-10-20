
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
const Product = ({ product }) => {
    const { name, price, image, _id , ratings} = product
    return (
        <div className="card w-auto h-96 bg-base-100 shadow-xl font-Mukta mt-2 mb-2">
            <figure className=" pt-10">
                <img src={image} alt="product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}
                <p className='text-orange-500 flex flex-row items-center justify-center'>({ratings} <AiFillStar></AiFillStar>)</p></h2>
                <p>${price}</p>
                
                <div className="card-actions flex flex-row">
                    <Link to={`/productDetails/${_id}`}><button className="btn bg-black text-white">View Details</button></Link>
                    <Link to={`/productUpdate/${_id}`}><button className="btn bg-black text-white">Update Details</button></Link>

                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
};

export default Product;