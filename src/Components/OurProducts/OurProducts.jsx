

const OurProducts = () => {
    return (
        <div className="max-w-5xl mt-4 mb-7 px-3 mx-auto">
            <h1 className="text-4xl font-Mukta text-center mb-4 mt-4">Our Best Products</h1>
            <div className="carousel w-full  max-h-96 rounded-3xl border-black border-4">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/3cxFfSJ/andres-urena-i-U8f-DX7xnz-M-unsplash.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/YpKw5Kc/pexels-mohi-syed-47261.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/dDKnr9Y/charlie-deets-Akg-ALpp-FIwo-unsplash.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/hB0G58f/onur-binay-ep-M08-OIf-Gqk-unsplash.jpg" className="w-full" />
                </div>
                
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default OurProducts;