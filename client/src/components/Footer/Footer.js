import React from "react";
import initialFont from "../NavBar/initialFont.png";
import "./Footer.css";

function Footer() {
    return (
        <div className="footModule-Border-Wrap1">
            <div className="footer">
                <div className="footerShadow"></div>
                <img className="footerInitial" src={initialFont} alt="initialFont" />
                <p id="fFont" className="footerP">Coded in React</p>
                <p className="footerP">&copy; 2019 Clint Forster</p>
            </div>
        </div>
    );
}

export default Footer;