
import PropTypes from 'prop-types';

const Product = ({ product }) => {
    const { name, price, image, ratings, description, category, brands } = product
    return (
        <div className="card w-auto h-96 bg-base-100 shadow-xl font-Mukta mt-2 mb-2">
            <figure className=" pt-10">
                <img src={image} alt="product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <div className="card-actions">
                    <button className="btn bg-black text-white">View Details</button>
                    <button className="btn bg-black text-white">Add to Cart</button>

                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
};

export default Product;