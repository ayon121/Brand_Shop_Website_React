
// import PropTypes from 'prop-types';

const DarkMode = () => {
    const setDarkmode = () => {
        document.querySelector("body").setAttribute("data-theme" , "dark")
    }
    const setLightmode = () => {
        document.querySelector("body").setAttribute("data-theme" , "light")
    }

    const toggletheme = e => {
        if(e.target.checked) {
            setDarkmode()
        }
        else{
            setLightmode()
        }
    }
    return (
        <div className="mt-2 px-3 mb-2">
            <input onChange={toggletheme} type="checkbox" className="toggle"/>
        </div>
    );
};

DarkMode.propTypes = {
    
};

export default DarkMode;