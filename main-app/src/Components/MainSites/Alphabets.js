
import React from 'react';
import Tile from "../Tile/Tile";

//import "../../Styles/MainSites/Alphabets.css"

import "../../Styles/MainSites/Grid_home.css"

const Alphabets = () => {
    return (
        <div className={"grid-home"}>
            <Tile
                title="Plants"
                subtitle="An alphabet with only Plants"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/plant-alphabet"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Alphabets