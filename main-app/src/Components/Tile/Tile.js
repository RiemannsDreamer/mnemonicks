//import "../../Styles/Tile.css"


import React from 'react';
import {Link} from 'react-router-dom';


const Tile = ({title, subtitle, cornerImageUrl, linkTo}) => {
    return (
        <Link to={linkTo} className={""}>
            <div className={"bg-cover bg-center w-1/1 h-1/1 rounded-2xl opacity-80 hover:opacity-60"}>

                <img className={"rounded-2xl shadow-2xl"} src={cornerImageUrl}/>
                <div className={"shadow-2xl text-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-cyan-800"}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>
            </div>
        </Link>
    );
};
export default Tile;
