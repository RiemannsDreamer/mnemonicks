
import React from 'react';
import Tile from "../Tile/Tile";

import "../../Sytles/MainSites/Numbers.css"

const Numbers = () => {
    return (
        <div className={"numbers-container"}>
            <Tile
                title="Random"
                subtitle="Learn random decimals"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/random-numbers"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Special"
                subtitle="Learn special numbers like pi and e"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/special-numbers"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Binary"
                subtitle="Learn binary numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/binaries"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Own"
                subtitle="Learn your own saved numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/own-numbers"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Numbers