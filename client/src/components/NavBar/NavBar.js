import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../pages/Home/Content/profilePic.PNG";
import "./NavBar.css";

function NavBar(props) {

    // const style = {
    //     opacity: 0
    // };

    return (
        <div className="wrapper">
            <div className="navbarModule-border-wrap3"></div>
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link to="/portfolio" className="nav-a text-secondary" >
                                PORTFOLIO
        </Link>
                        </li>
                        <li>
                            <div className="profilePicDiv">
                                <div className="titleModule-border-wrap3">
                                    <div className="titleModule">
                                        <img className="titleProfilePic" src={profilePic} alt="profilePic" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-a text-secondary" >
                                CONTACT
        </Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
}

export default NavBar;