// Navigation.js
import React from 'react';
import NavPoint from './NavPoint';
//import "../../Styles/Navigation.css"

import "../../App.css"

const Navigation = ({ navItems}) => {
    return (
        <div className={"flex justify-center ml-auto space-x-6"}>
            <div className={"flex justify-center ml-auto space-x-6"}>
                {navItems.map((item, index) => (
                    <NavPoint key={index} content={item.content} linkTo={item.linkTo} />
                ))}
            </div>
        </div>
    );
};

export default Navigation;

