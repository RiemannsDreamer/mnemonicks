import React from 'react';

import "../../Styles/NavPoint.css"
import {Link} from "react-router-dom";
import CornerImage from "../Tile/CornerImage";

//<img className={"menu-img"} src={logoSrc} alt={"Logo"}/>
const NavPoint = ({ logoSrc,tooltipContent, content, linkTo }) => {
    return (
        <Link to={linkTo} className={"nav-link"}>
            <div className="nav-point">

                <CornerImage imageUrl={logoSrc} tooltipContent={tooltipContent}/>
                <p>{content}</p>
            </div>
        </Link>
    );
};

export default NavPoint;
