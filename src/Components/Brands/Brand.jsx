
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Brand = ({ brand }) => {
    const { title, image } = brand

    return (
        <div className="card card-compact  w-auto bg-transparent ">
            <figure><img className='h-56 w-full rounded-3xl' src={image} alt="Brands" /></figure>
            <div className="card-body flex flex-col justify-center">
                <h2 className="text-center text-3xl font-Script">{title}</h2>
                <Link to={`/brand/${title}`}><button className="px-4 w-full rounded-3xl py-2 text-center bg-black text-white ">Details</button></Link>
            </div>
        </div> 
    );
};

Brand.propTypes = {
    brand: PropTypes.object
};

export default Brand;