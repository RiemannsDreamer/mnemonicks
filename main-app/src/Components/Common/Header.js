import React from 'react';
import Navigation from './Navigation';

import "../../Styles/Header.css"


/**
 * Simple Header with Logo, Title and Application Menu. Contains Navigation (Site Menu)
 *
 * @param navItems
 * @param title
 * @returns {Element}
 * @constructor
 */
const Header = ({ navItems, title }) => {
    return (
        <header id={"header"} className="header">
            <div className="flex items-center justify-between">
                <img className="logo-img m-5 shadow-2xl opacity-60" src="../../Images/Logos/Main_Logo.jpg" alt="Logo" />
                <div className={"text-center mx-auto"}>
                    <h1 className={"text-center text-white text-5xl"}>{title}</h1>
                    <strong className={"text-center text-white text-3xl"}>Learn how to memorize everything!</strong>
                </div>
            </div>
            <div className="header-content">

                <Navigation navItems={navItems} />
            </div>

        </header>
    );
};

export default Header;
