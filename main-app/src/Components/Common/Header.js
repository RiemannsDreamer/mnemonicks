import React from 'react';
import Navigation from './Navigation';

import "../../Styles/Header.css"

const Header = ({ navItems, title }) => {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo-img" src="../../Images/Main_Logo.jpg" alt="Logo" />
            </div>
            <div className="header-content">

                <Navigation navItems={navItems} />
            </div>
            <div className="title">
                <h1>{title}</h1>
                <h4>This Website is under CONSTRUCTION:</h4>
                <h4>Use at your own risk!</h4>
                <strong>Learn how to memorize everything!</strong>
            </div>
        </header>
    );
};

export default Header;
