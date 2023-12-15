
import React from 'react';
import NavPoint from './NavPoint';

import "../../App.css"


/**
 * Simple Navigation bar. Mapping NavPoints in one line, text aligned right.
 * Used as Application Menus in Header and Footer.
 *
 * @param navItems
 * @returns {Element}
 * @constructor
 */
const Navigation = ({ navItems}) => {
    return (
        <div className={"flex justify-center ml-auto space-x-6 mr-10"}>
            <div className={"flex justify-center ml-auto space-x-6"}>
                {navItems.map((item, index) => (
                    <NavPoint key={index} content={item.content} linkTo={item.linkTo} />
                ))}
            </div>
        </div>
    );
};

export default Navigation;

