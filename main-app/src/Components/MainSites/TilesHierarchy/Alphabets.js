
import React from 'react';
import Tile from "../../Tile/Tile";

//import "../../Styles/MainSites/Alphabets.css"

import "../../../Styles/MainSites/Grid_home.css"

// TODO: add links to router

const Alphabets = () => {

    const tileData = [
        {
            title: "Plants",
            subtitle: "Plant Alphabet",
            cornerImageUrl: "../../Images/Logos/Numbers2.jpg",
            linkTo: "/plant-alphabet",
        },
        {
            title: "Animals",
            subtitle: "Animals Alphabet",
            cornerImageUrl: "../../Images/Logos/Numbers2.jpg",
            linkTo: "/animals",
        },
        {
            title: "Tools",
            subtitle: "Tools Alphabet",
            cornerImageUrl: "../../Images/Logos/Numbers2.jpg",
            linkTo: "/tools",
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

export default Alphabets