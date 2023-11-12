// Navigation.js
import React from 'react';
import NavPoint from './NavPoint';
import "../../Sytles/Navigation.css"

const Navigation = ({ navItems, title}) => {
    return (
        <div className="navigation-container">
            <div className="navigation-bar">
                {navItems.map((item, index) => (
                    <NavPoint key={index} content={item.content} linkTo={item.linkTo}/>
                ))}
            </div>
        </div>
    );
};

export default Navigation;

