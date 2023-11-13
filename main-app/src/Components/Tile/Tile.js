import "../../Styles/Tile.css"


import React from 'react';
import {Link} from 'react-router-dom';


import CornerImage from "./CornerImage";

const Tile = ({title, subtitle, cornerImageUrl, tooltipContent, linkTo}) => {
    return (
        <Link to={linkTo}>
            <div className="tile">

                <CornerImage imageUrl={cornerImageUrl} tooltipContent={tooltipContent}/>

                <div className="tile-content">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>

            </div>
        </Link>
    );
};
export default Tile;
