
import React from 'react';
import Tile from "../Tile/Tile";

import "../../Sytles/MainSites/Cards.css"

const Cards = () => {
    return (
        <div className={"cards-container"}>
            <Tile
                title="52-Poker"
                subtitle="Learn a poker-set"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/poker"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Cards