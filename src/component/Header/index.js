import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
const Header = props => {
    return(
        <header className="header">
                <ul className="headerMenu">
                    <li ><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-us">AboutUs</NavLink></li>
                    <li><NavLink to="/contact-us">ContactUs</NavLink></li>
                </ul>
                <div className="socialMediaImage">
                <img src={require('../../assest/icons/download.png')} alt="post image"/>
                <img src={require('../../assest/icons/instra.png')} alt="post image"/>
                <img src={require('../../assest/icons/link.png')} alt="post image"/>
                </div>
        </header>
    );
}
export default Header;