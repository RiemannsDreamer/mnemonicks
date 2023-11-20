import React from 'react';

//import "../../Styles/NavPoint.css"
import {Link} from "react-router-dom";


//<img className={"menu-img"} src={logoSrc} alt={"Logo"}/>
const NavPoint = ({ content, linkTo }) => {
    return (
        <Link to={linkTo} className={"nav-link p-4 hover:bg-gray-200k"}>
            <div className={"text-center"}>
                <p>{content}</p>
            </div>
        </Link>
    );
};

export default NavPoint;
