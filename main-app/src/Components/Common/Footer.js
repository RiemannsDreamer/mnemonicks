import React from 'react';

import Navigation from "./Navigation";


/**
 * Simple Footer mapping a menu with standard infos of the website. Footer.
 * Contains Navigation (footer menu).
 *
 * @param navItems
 * @returns {Element}
 * @constructor
 */
const Footer = ({navItems}) => {
    return (
        <footer className={"footer"}>
            <Navigation navItems={navItems}/>
            <p className={"text-center text-white"}>&copy; 2023 Mnemonicks. all rights reserved.</p>
        </footer>
    );
};

export default Footer;
