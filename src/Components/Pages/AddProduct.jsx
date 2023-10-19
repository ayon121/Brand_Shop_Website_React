
// import PropTypes from 'prop-types';

import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Shared/Navbar";

// react toast
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const price = form.get('Price')
        const image = form.get('image')
        const ratings = form.get('ratings')
        const category = form.get('category')
        const description = form.get('description')
        const brands = form.get('brands')
        const Products = {name , price , image , ratings ,category ,description,brands};
        console.log(Products);

        fetch('http://localhost:5000/productDetails', 
           {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(Products)
           } 
        )
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast("Product Added Successfully")
                form.reset()
            }
        })

    }
    return (
        <div>
            <div className='h-52 bg-base-200'>
                <Navbar></Navbar>
            </div>
            <div className='font-Bebas min-h-screen bg-base-200 px-4'>

                <div className="w-3/4 pt-3 font-Mukta mx-auto">
                    <h1 className='text-3xl md:text-4xl text-center pt-3 pb-1 font-Script'>Add Product</h1>
                    <form className=" " onSubmit={handleAddProduct}>
                        <div>
                            <div className="flex flex-col md:flex-row gap-3 px-3">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered w-full " required />
                                </div>
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name='Price' className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 px-3">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" placeholder="Image Url" name='image' className="input input-bordered w-full " required />
                                </div>
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="text" placeholder="write between 1 to 5" name='ratings' className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 px-3">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <div>
                                        <select name="category" id=""  className="input input-bordered w-full bg-white">
                                            <option value="Phone" >Phone</option>
                                            <option value="Computer">Computer</option>
                                            <option value="Car">Car</option>
                                            <option value="Camera">Camera</option>
                                            <option value="EarBugs">Earbugs</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Brand</span>
                                    </label>
                                    <div>
                                        <select name="brands" id=""  className="input input-bordered w-full bg-white">
                                            <option value="Apple" >Apple</option>
                                            <option value="Samsung">Samsung</option>
                                            <option value="Sony">Sony</option>
                                            <option value="Google">Google</option>
                                            <option value="Intel">Intel</option>
                                            <option value="Tesla">Tesla</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 px-3">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" name='description' className="input input-bordered w-full py-7" required />
                                </div>
                    
                            </div>
                            <input className="btn px-6 mx-4 mt-7 rounded-3xl bg-black text-white" type="submit" value="Add Product" />
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

AddProduct.propTypes = {

};

export default AddProduct;