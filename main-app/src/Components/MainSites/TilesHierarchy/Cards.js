
import React from 'react';
import Tile from "../../Tile/Tile";

//import "../../Styles/MainSites/Cards.css"

import "../../../Styles/MainSites/Grid_home.css"

// TODO: add links in router

const Cards = () => {

    const tileData = [
        {
            title: "52-Poker",
            subtitle: "Learn a Poker Set",
            cornerImageUrl: "../../Images/Logos/Numbers2.jpg",
            linkTo: "/poker"
        },
        {
            title: "36-French",
            subtitle: "Learn a french set",
            cornerImageUrl: "../../Images/Logos/Numbers2.jpg",
            linkTo: "/french-set"
        },
        {
            title: "Swiss Jass",
            subtitle: "Learn a Swiss Jass set",
            cornerImageUrl: "../../Images/Logos/Numbers2.jpg",
            linkTo: "/swiss-jass"
        }
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

export default Cards