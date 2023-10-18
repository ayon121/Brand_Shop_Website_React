
// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
// import Navbar from "../Shared/Navbar";

const Root = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;