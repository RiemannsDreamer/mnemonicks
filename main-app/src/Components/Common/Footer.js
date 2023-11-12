// Footer.js

import React from 'react';
import {Link} from "react-router-dom";

import "../../Sytles/Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <nav>
            <ul>
                <li>Impressum</li>
                <li>Contact Form</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Credits</li>
            </ul>
        </nav>
            <p>&copy; 2023 Mnemonicks. all rights reserved.</p>
        </footer>
    );
};

export default Footer;
