// Navigation.js
import React from 'react';
import NavPoint from './NavPoint';
import "../../Styles/Navigation.css"

const Navigation = ({ navItems}) => {
    return (
        <div className="navigation-container">
            <div className="navigation-bar">
                {navItems.map((item, index) => (
                    <NavPoint key={index} logoSrc={item.logoSrc} tooltipContent={item.tooltip} content={item.content} linkTo={item.linkTo} />
                ))}
            </div>
        </div>
    );
};

export default Navigation;

