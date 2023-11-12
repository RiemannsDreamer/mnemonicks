import "../../Sytles/Tile.css"


import React from 'react';
import { Link } from 'react-router-dom';
import CornerImage from "./CornerImage"; // Stelle sicher, dass du den korrekten Pfad angibst

const Tile = ({ title, subtitle, cornerImageUrl, tooltipContent }) => {
    return (

            <div className="tile">
                <CornerImage imageUrl={cornerImageUrl} tooltipContent={tooltipContent} />
                <div className="tile-content">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>
            </div>

    );
};

export default Tile;
