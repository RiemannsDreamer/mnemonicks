import React from 'react';

import {Link} from "react-router-dom";


/**
 * Simple Menu Item for the Navigation Bars.
 * Contains a text content and a link within react router dom.
 *
 *
 * @param content
 * @param linkTo
 * @returns {Element}
 * @constructor
 */
const NavPoint = ({ content, linkTo }) => {
    return (
        <Link to={linkTo} className={"nav-link "}>
            <div className={"text-center  p-4 rounded-2xl hover:bg-gradient-to-tr from-cyan-400 to-cyan-800 hover:opacity-70"}>
                <p className={"text-white"}>{content}</p>
            </div>
        </Link>
    );
};

export default NavPoint;
