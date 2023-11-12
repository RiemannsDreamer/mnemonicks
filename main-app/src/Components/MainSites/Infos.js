
import React from 'react';
import Tile from "../Tile/Tile";

import "../../Sytles/MainSites/Infos.css"

const Infos = () => {
    return (
        <div className={"infos-container"}>
            <h1>Someday I will write this all down</h1>
            <Tile
                title="Web-Reference"
                subtitle="Some (good) references"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/reference"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Wiki articles"
                subtitle="Some selected articles"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/wikis"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Books"
                subtitle="Some Books in English and German"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/books"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Own"
                subtitle="Own material"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/own"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Infos
