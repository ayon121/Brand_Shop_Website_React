
// import PropTypes from 'prop-types';

import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Footer from "../Shared/Footer";
// import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;