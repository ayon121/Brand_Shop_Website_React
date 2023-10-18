

import { useContext } from 'react';


import { Link } from 'react-router-dom';
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProviers';
import Navbar from '../Shared/Navbar';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRgister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        if (password.length < 6) {
            toast('Password should be more than 6 characters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast('Password should have capital letter characters')
            return
        }
        else if (!/^[a-zA-Z0-9_]*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]+[a-zA-Z0-9_]*$/.test(password)) {
            toast('Password should have a special character')
            return
        }
        // create user
        createUser(email, password)
            .then(toast("Register SuccessFull Go to Login"))
            .catch(error => toast(error.message))


    }

    return (
        <div>
            <div className='h-52 bg-base-200'>
            <Navbar></Navbar>
            </div>
            <div className='font-Bebas min-h-screen bg-base-200 px-4'>
                <div className="hero pt-11 font-Mukta">
                    <div className="card border-4 border-[#00301e] flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-12">
                        <h1 className='text-3xl md:text-4xl text-center pt-3 pb-1 font-Script'>Register Now</h1>
                        <form className="card-body " onSubmit={handleRgister}>
                            <div className="form-control ">
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
                                    <Link to="/Login" className='underline'>Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="px-3 py-2 md:px-5 md:py-3 bg-black rounded-3xl text-white">R e g i s t e r</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

Register.propTypes = {

};

export default Register;