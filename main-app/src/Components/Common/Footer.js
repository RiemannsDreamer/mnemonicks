// Footer.js

import React from 'react';

import "../../Sytles/Footer.css"
import Navigation from "./Navigation";
const Footer = ({navItems}) => {
    return (
        <footer className="footer">
            <Navigation navItems={navItems}/>
            <p>&copy; 2023 Mnemonicks. all rights reserved.</p>
        </footer>
    );
};

export default Footer;
