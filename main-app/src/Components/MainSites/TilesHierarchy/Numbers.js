
import React from 'react';
import Tile from "../../Tile/Tile";

//import "../../Styles/MainSites/Numbers.css"
import "../../../Styles/MainSites/Grid_home.css"

const Numbers = () => {
    return (
        <div className={"grid-home"}>
            <Tile
                title="Random"
                subtitle="Learn random decimals"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/random-numbers"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Special"
                subtitle="Learn special numbers like pi and e"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/special-numbers"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Binary"
                subtitle="Learn binary numbers"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/binaries"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Own"
                subtitle="Learn your own saved numbers"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/own-numbers"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Numbers