
import React from 'react';
import Navigation from './Navigation';

import "../../Sytles/Header.css"

const Header = ({ navItems, title }) => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img className="logo" src="../../Images/logo512.png" alt="Logo" />
                </div>
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
