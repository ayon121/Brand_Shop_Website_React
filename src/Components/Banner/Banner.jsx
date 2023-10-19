// import PropTypes from 'prop-types';

import Navbar from "../Shared/Navbar";

const Banner = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-row max-h-screen font-Mukta mb-6 pb-7">
                <div className="flex-1 pt-4 md:pt-5 pb-4 lg:pt-11 px-8 bg-slate-100">
                    <h1 className="text-4xl md:text-3xl font-bold">All your brands in one place</h1>
                    <p className="w-4/5 mt-5 ">Welcome to the real tech paradise, where innovation and excellence converge. </p>
                    <button className="btn mt-4 rounded-3xl bg-[#00301e] text-white">Join Now</button>
                </div>
                <div className=" flex-1 hidden md:block">
                    <img className="h-full w-full" src="https://i.ibb.co/vjgWS5Y/dai-ke-Gkra-Tr-CYA-0-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {

};

export default Banner;