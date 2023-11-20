//import "../../Styles/Tile.css"


import React from 'react';
import {Link} from 'react-router-dom';


const Tile = ({title, subtitle, cornerImageUrl, linkTo}) => {
    return (
        <Link to={linkTo} className={""}>
            <div className={"bg-cover bg-center aspect-w-1 aspect-h-1 p-20 w-1/2 h-1/2"} style={{ backgroundImage: `url(${cornerImageUrl})` }} >
                <div className={"text-black-400 text-center"} >
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>

            </div>
        </Link>
    );
};
export default Tile;
