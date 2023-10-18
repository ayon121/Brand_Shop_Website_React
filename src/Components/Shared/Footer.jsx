

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white font-Mukta">
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav>
        <form>
          <header className=" text-white text-2xl"><a className="font-Script normal-case text-3xl text-white font-semibold "><span className="text-5xl text-[#afe1f0] font-bold">G</span>lamgy</a></header> 
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-slate-300">Enter your email address</span>
            </label> 
            <div className="relative w-3/4 md:w-full">
              <input type="text" placeholder="username@site.com" className="input input-bordered rounded-full  w-full  pr-8 md:pr-16" /> 
              <button className="btn bg-[#00301e]  text-white absolute top-0 right-0 rounded-l-none rounded-full">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    );
};

export default Footer;