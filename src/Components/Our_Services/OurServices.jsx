

const OurServices = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 mt-2 mb-5">
            <h1 className="text-4xl font-Mukta text-center mt-3 mb-3">Our Popularity</h1>
            <div className="stats shadow w-full mx-auto">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">29.6K</div>
                    <div className="stat-desc">29% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.9M</div>
                    <div className="stat-desc">28% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    </div>
                    <div className="stat-value">99%</div>
                    <div className="stat-title">Authentic Product</div>
                    <div className="stat-desc text-secondary">On time delivery</div>
                </div>

            </div>
        </div>
    );
};

export default OurServices;