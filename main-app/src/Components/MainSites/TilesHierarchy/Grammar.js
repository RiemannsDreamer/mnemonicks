import React from 'react';
import Tile from "../../Tile/Tile";


import "../../../Styles/MainSites/Grid_home.css"

// TODO: Add links in router

const Grammar = () => {

    const tileData = [
        {
            title: "German",
            subtitle: "Plant Alphabet",
            cornerImageUrl: "../../Images/Logos/Numbers2.jpg",
            linkTo: "/german",
        },

    ]
    return (
        <div className={"grid-home"}>

            {tileData.map((tile) => (
                <Tile
                    key={tile.id}
                    title={tile.title}
                    subtitle={tile.subtitle}
                    cornerImageUrl={tile.cornerImageUrl}
                    linkTo={tile.linkTo}
                />
            ))}
        </div>
    );
};

export default Grammar