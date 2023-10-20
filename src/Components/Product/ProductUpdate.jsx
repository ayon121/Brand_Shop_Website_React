
// import PropTypes from 'prop-types';
import Navbar from '../Shared/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductUpdate = () => {
    const currentProduct = useLoaderData()

    const { id } = useParams()
    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const price = form.get('Price')
        const image = form.get('image')
        const ratings = form.get('ratings')
        const category = form.get('category')
        const description = form.get('description')
        const brands = form.get('brands')
        const UpdateProduct = {name , price , image , ratings ,category ,description,brands};
        fetch(`http://localhost:5000/products/${id}` , {
            method : 'PUT', 
            headers : {
                'content-type' : 'application/json',

            },
            body : JSON.stringify(UpdateProduct)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast("Product Updated")
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
                    <h1 className='text-3xl md:text-4xl text-center pt-3 pb-1 font-Script'>Update Product</h1>
                    <form className=" " onSubmit={handleUpdateProduct}>
                        <div>
                            <div className="flex flex-col md:flex-row gap-3 px-3">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' defaultValue={currentProduct?.name} className="input input-bordered w-full " required />
                                </div>
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name='Price' defaultValue={currentProduct?.price} className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 px-3">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" placeholder="Image Url" name='image' defaultValue={currentProduct?.image} className="input input-bordered w-full " required />
                                </div>
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="text" placeholder="write between 1 to 5" name='ratings' defaultValue={currentProduct?.ratings} className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 px-3">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <div>
                                        <select name="category" id="" defaultValue={currentProduct?.category} className="input input-bordered w-full bg-white">
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
                                        <select name="brands" id="" defaultValue={currentProduct.brands}  className="input input-bordered w-full bg-white">
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
                                    <input type="text" placeholder="Description" defaultValue={currentProduct.description} name='description' className="input input-bordered w-full py-7" required />
                                </div>
                    
                            </div>
                            <input className="btn px-6 mx-4 mt-7 rounded-3xl bg-black text-white" type="submit" value="Update Product" />
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

ProductUpdate.propTypes = {
    
};

export default ProductUpdate;