import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Error = () => {
    return (
        <div>
            <div className="h-44">
                <Navbar></Navbar>
            </div>
            <div className="flex justify-center items-center max-h-screen">
                <div className="mb-7">
                    <h1 className="text-5xl text-red-600 font-Script ">404</h1>
                    <p className="text-xl text-black font-Mukta">Page Not Found</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;