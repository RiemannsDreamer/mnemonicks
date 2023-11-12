
import React from 'react';
import Tile from "../Tile/Tile";

import "../../App.css"

const Numbers = () => {
    return (
        <div>
            <Tile
                title="Random"
                subtitle="Learn random decimals"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/route1"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Special"
                subtitle="Learn special numbers like pi and e"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/route1"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Binary"
                subtitle="Learn binary numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/route1"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Own"
                subtitle="Learn your own saved numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/route1"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Numbers