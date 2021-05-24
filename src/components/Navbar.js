import React, {useState} from 'react';
import CustomButton from './CustomButton';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Navbar() {

    const [navToggle, setNavToggle] = useState(null)

    const handleNavToggle = (e) => {
        setNavToggle(e.target.checked)
        console.log(e.target.checked)
    }

    const [isActive, setIsActive] = useState("nav__home")

    const handleIsActive = (id) => {
        setIsActive(id)
    }



    return (
        <div className="nav">
            <input type="checkbox" className="nav-checkbox" id="nav__toggle" onClick={(e) => handleNavToggle(e)} />
            <label htmlFor="nav__toggle" className="nav__button" >
                <div className="nav__icon">
                    {navToggle ? <CloseIcon style={{ fontSize: 30, color: "var(--clr-yellow)" }} /> :  <MenuIcon style={{ fontSize: 30, color: "var(--clr-yellow)"  }} />}
                </div>
            </label>
            <div className="container nav__container">
                <div className="nav__logo">
                    <h1>BOCCOR<span className="nav__dot">.</span></h1>
                </div>

                <div className="container" id="nav">
                    <ul className="nav__list">
                        <a href="#nav"  className="nav__home" id={`${isActive === "nav__home" ? "active" : null }`} onClick={(e) => {handleIsActive(e.target.className)}}>Home</a>
                        <a className="nav__about" id={`${isActive === "nav__about" ? "active" : null }`} onClick={(e) => {handleIsActive(e.target.className)}} href="#about">About Us</a>
                        <a className="nav__services" id={`${isActive === "nav__services" ? "active" : null }`} onClick={(e) => {handleIsActive(e.target.className)}} href="#services">Services</a>
                        <a className="nav__portfolio" id={`${isActive === "nav__portfolio" ? "active" : null }`} onClick={(e) => {handleIsActive(e.target.className)}} href="#portfolio">Portfolio</a>
                        <a className="nav__team" id={`${isActive === "nav__team" ? "active" : null }`} onClick={(e) => {handleIsActive(e.target.className)}} href="#team">Team</a>
                        <a className="nav__contact" id={`${isActive === "nav__contact" ? "active" : null }`} onClick={(e) => {handleIsActive(e.target.className)}} href="#contact">Contact</a>
                        <CustomButton name={"Get Started"} id="getStarted" btnBox="nav--btn" />
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
