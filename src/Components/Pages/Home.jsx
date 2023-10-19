
// import PropTypes from 'prop-types';

import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import OurProducts from "../OurProducts/OurProducts";
import OurServices from "../Our_Services/OurServices";
import Footer from "../Shared/Footer";
// import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <OurServices></OurServices>
            <OurProducts></OurProducts>
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;