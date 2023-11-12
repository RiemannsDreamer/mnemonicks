
import React from 'react';
import Tile from "../Tile/Tile";

import "../../App.css"

const Home = () => {
    return (
        <div>

            <Tile
                title="Infos"
                subtitle="Infocenter for trainings"
                cornerImageUrl="../../Images/logo512.png"
                linkTo="/infos"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Numbers"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/numbers"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Cards"
                subtitle="Learn to memorize cards"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/cards"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Faces and Names"
                subtitle="Learn to remember faces and names"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/faces"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Loci-Method"
                subtitle="Learn how to use Locis"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/loci"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Mind-Palaces"
                subtitle="Create a Mind Palace"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/mind-palace"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="PCMPG"
                subtitle= "© ProCedural Mind Palace Generator"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/pcmpg"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Vocabulary"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/vocab"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Grammar"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/grammar"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Alphabets"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/alphabets"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Major-System"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/major"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Peg-Lists"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/peg"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
            <Tile
                title="Open"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/open"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
            />
        </div>
    );
};

export default Home;
