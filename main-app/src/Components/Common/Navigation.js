// Navigation.js
import React from 'react';
import NavPoint from './NavPoint';
//import "../../Styles/Navigation.css"

import "../../App.css"

const Navigation = ({ navItems}) => {
    return (
        <div className={"text-center"}>
            <div className={"flex justify-center space-x-4"}>
                {navItems.map((item, index) => (
                    <NavPoint key={index} content={item.content} linkTo={item.linkTo} />
                ))}
            </div>
        </div>
    );
};

export default Navigation;

