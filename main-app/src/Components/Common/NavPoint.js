import React from 'react';

import "../../Styles/NavPoint.css"
import {Link} from "react-router-dom";


const NavPoint = ({ content, linkTo }) => {
    return (
        <Link to={linkTo}>
            <div className="nav-point">
                {content}
            </div>
        </Link>
    );
};

export default NavPoint;
