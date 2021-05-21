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



    return (
        <div className="nav">
            <input type="checkbox" className="nav-checkbox" id="nav__toggle" onClick={(e) => handleNavToggle(e)} />
            <label for="nav__toggle" className="nav__button" >
                <div className="nav__icon">
                    {navToggle ? <CloseIcon style={{ fontSize: 30, color: "var(--clr-yellow)" }} /> :  <MenuIcon style={{ fontSize: 30, color: "var(--clr-yellow)"  }} />}
                </div>
            </label>
            <div className="container nav__container">
                <div className="nav__logo">
                    <h1>BOCCOR<spam className="nav__dot">.</spam></h1>
                </div>

                <div className="container">
                    <ul className="nav__list">
                        <a href="#" id="active">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Team</a>
                        <a href="#">Contact</a>
                        <CustomButton name={"Get Started"} id="getStarted" btnBox="nav--btn" />
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
