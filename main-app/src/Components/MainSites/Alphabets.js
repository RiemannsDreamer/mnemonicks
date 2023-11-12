
import React from 'react';
import Tile from "../Tile/Tile";

import "../../Sytles/MainSites/Alphabets.css"

const Alphabets = () => {
    return (
        <div className={"alphabets-container"}>
            <Tile
                title="Plants"
                subtitle="An alphabet with only Plants"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/plant-alphabet"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Alphabets