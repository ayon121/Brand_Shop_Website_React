
// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviers";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const email = user.email
    const userid = email.slice(0,5)
    const handlelogOut = () => {
        logout()
            .then()
            .catch()
    }

    const navlinks = <>
        <li className="text-lg"><NavLink to="/" className={({ isActive }) => isActive ? 'text-black bg-white  text-xl' : 'bg-transparent'}>Home</NavLink></li>
        {/* <li className="text-lg"><NavLink to="/About" className={({ isActive }) => isActive ? 'text-black bg-white text-xl' : 'bg-transparent'}>About Us</NavLink></li> */}
        {
           <li className="text-lg"><NavLink to="/addproduct" className={({ isActive }) => isActive ? 'text-black bg-white text-xl' : 'bg-transparent'}>AddProduct</NavLink></li>
        }
        {
           user &&  <li className="text-lg"><NavLink to={`/mycart/${userid}`} className={({ isActive }) => isActive ? 'text-black bg-white text-xl' : 'bg-transparent'}>My Cart</NavLink></li>
        }
        
    </>
        return (
        <div className="py-2 px-4 sticky top-0 bg-black font-Mukta">
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-black text-white rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center ">
                    <a className="font-Script normal-case text-3xl text-white font-semibold "><span className="text-5xl text-[#afe1f0] font-bold">G</span>lamgy</a>
                </div>
                <div className="navbar-end">
                    {/* <button className="btn bg-white rounded-3xl text-black">Login</button> */}
                    {
                        user ? <button onClick={handlelogOut} className="btn bg-white rounded-3xl text-black">Logout</button>
                            :
                            <Link to="/login">
                                <button className="btn bg-white rounded-3xl text-black">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
        );
};

        Navbar.propTypes = {

        };

        export default Navbar;