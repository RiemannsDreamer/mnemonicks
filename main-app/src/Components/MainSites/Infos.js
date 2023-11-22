
import React from 'react';
import Tile from "../Tile/Tile";

// import "../../App.css"
//import "../../Styles/MainSites/Infos.css"

import "../../Styles/MainSites/Grid_home.css"

const Infos = () => {
    return (
        <div className={"grid-home"}>
            <Tile
                title="Web-Reference"
                subtitle="Some (good) references"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/reference"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Wiki articles"
                subtitle="Some selected articles"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/wikis"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Books"
                subtitle="Some Books in English and German"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Own"
                subtitle="Own material"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/own"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Infos
