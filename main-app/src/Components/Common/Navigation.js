// Navigation.js
import React from 'react';
import NavPoint from './NavPoint';
import "../../Sytles/Navigation.css"

const Navigation = ({ navItems, title }) => {
    return (
        <div className="navigation-container">
            {title && <div className="title">{title}</div>}
            <div className="navigation-bar">
                {navItems.map((item, index) => (
                    <NavPoint key={index} content={item.content} />
                ))}
            </div>
        </div>
    );
};

export default Navigation;

