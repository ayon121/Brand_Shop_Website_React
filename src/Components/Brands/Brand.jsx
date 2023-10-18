
import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
    const { title, image } = brand
    return (
        <div className="card card-compact  w-auto bg-transparent ">
            <figure><img className='h-56 w-full rounded-full' src={image} alt="Brands" /></figure>
            <div className="card-body ">
                <h2 className="text-center text-3xl font-Script">{title}</h2>
            </div>
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.object
};

export default Brand;