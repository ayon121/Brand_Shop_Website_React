
// import PropTypes from 'prop-types';

const Navbar = () => {
    return (
        <div className="py-2 px-4 bg-[#F4F7F7] font-Mukta">
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-[#F4F7F7] rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="font-Script normal-case text-3xl text-[#1F4E5F] font-semibold "><span className="text-5xl text-[#50717B] font-bold">G</span>lamgy</a>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#1F4E5F] text-[#F4F7F7] ">Login</button>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;