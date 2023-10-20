
// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviers";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from 'react-icons/cg';
import DarkMode from "../Darkmode/DarkMode";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const email = user?.email
    const userid = email?.slice(0, 5)
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
            user && <li className="text-lg"><NavLink to={`/mycart/${userid}`} className={({ isActive }) => isActive ? 'text-black bg-white text-xl' : 'bg-transparent'}>My Cart</NavLink></li>
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
                            <div className=" mx-2  md:hidden flex border rounded-3xl text-center border-white py-2 mb-2 justify-center">
                                <h1 className="text-sm text-white">{user?.displayName ?? user?.email ?? ''}</h1>
                            </div>
                            {navlinks}
                            {
                                user ?
                                    <button onClick={handlelogOut} className=" md:hidden w-full   flex items-center gap-1 justify-center px-3 py-2 md:px-5 md:py-3 rounded-lg bg-white text-black">
                                        {
                                            <span>{user?.photoURL ? <img className="w-4 border-double rounded-full" src={user.photoURL} alt="" /> : <CgProfile></CgProfile>}</span>
                                        }

                                        <span>Logout</span></button>
                                    :
                                    <Link to="/Login">
                                        <button className=" md:hidden  w-full flex px-3 py-2 md:px-5 md:py-3 rounded-lg  bg-white text-black ">Login</button>
                                    </Link>


                            }

                            <DarkMode></DarkMode>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center ">
                    <a className="font-Script normal-case text-3xl text-white font-semibold "><span className="text-5xl text-[#afe1f0] font-bold">G</span>lamgy</a>
                </div>
                <div className="navbar-end">
                    <div className="pl-4 mx-2 hidden  md:flex">
                        <h1 className="text-sm text-white">{user?.displayName ?? user?.email ?? ''}</h1>
                    </div>
                    {/* <button className="btn bg-white rounded-3xl text-black">Login</button> */}
                    {
                        user ?
                            <button onClick={handlelogOut} className=" hidden  md:flex items-center gap-1 justify-center px-3 py-2 md:px-5 md:py-3 rounded-3xl bg-white text-black">
                                {
                                    <span>{user?.photoURL ? <img className="w-4 border-double rounded-full" src={user.photoURL} alt="" /> : <CgProfile></CgProfile>}</span>
                                }

                                <span>Logout</span></button>
                            :
                            <Link to="/Login">
                                <button className=" hidden  md:flex px-3 py-2 md:px-5 md:py-3 rounded-3xl  bg-white text-black">Login</button>
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