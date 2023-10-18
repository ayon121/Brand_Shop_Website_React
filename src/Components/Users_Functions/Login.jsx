
// import PropTypes from 'prop-types';

import { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
// import {BsGoogle } from 'react-icons/bs';
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProviers';
import Navbar from '../Shared/Navbar';

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const { loginUser, GoogleLogin } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                toast("Login Success")
                // navigate after login
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                toast(error.message)
            })


    }

    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result)
                toast("Login Success")
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => toast(error.message))
    }


    return (
        <div>
            <div className='h-52 bg-base-200'>
            <Navbar></Navbar>
            </div>
            <div className='font-Bebas min-h-screen bg-base-200 px-4'>
                
                <div className="hero pt-11 font-Mukta">

                    <div className="card  border-4 border-[#00301e] flex-shrink-0 w-full max-w-sm shadow-2xl  mb-12">
                        <h1 className='text-3xl md:text-4xl text-center pt-3 pb-1 font-Script'>Login Now</h1>
                        <form className="card-body " onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                                <label className="label flex">
                                    <Link to="" className='underline'>Forgot password?</Link>
                                    <Link to="/Register" className='underline'>Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <button className="px-3 py-2 md:px-5 md:py-3  bg-black rounded-3xl text-white">L o g i n</button>
                                <button onClick={HandleGoogleLogin} className="px-3 py-2 md:px-5 md:py-3  bg-black rounded-3xl text-white mt-3 flex items-center gap-2 justify-center"><span className='text-xl'></span>Login With Google</button>




                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;