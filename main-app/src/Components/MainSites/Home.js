
import React from 'react';
import Tile from "../Tile/Tile";

import "../../Styles/MainSites/Home.css"

const Home = () => {
    return (
        <div className={"home-container"}>

            <Tile
                title="Infos"
                subtitle="Infocenter for trainings"
                cornerImageUrl="../../Images/Infos.jpg"
                linkTo="/infos"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Numbers"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../../Images/Numbers.jpg"
                linkTo="/numbers"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Cards"
                subtitle="Learn to memorize cards"
                cornerImageUrl="../../Images/Cards.jpg"
                linkTo="/cards"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Faces and Names"
                subtitle="Learn to remember faces and names"
                cornerImageUrl="../../Images/Faces.jpg"
                linkTo="/names"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Loci-Method"
                subtitle="Learn how to use Locis"
                cornerImageUrl="../../Images/LociMethod.jpg"
                linkTo="/loci"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Mind-Palaces"
                subtitle="Create a Mind Palace"
                cornerImageUrl="../../Images/MindPalace-1.jpg"
                linkTo="/mind-palace"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="PCMPG"
                subtitle= "© ProCedural Mind Palace Generator"
                cornerImageUrl="../..//Images/MindPalace-2.jpg"
                linkTo="/pcmpg"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Vocabulary"
                subtitle="Learn to memorize vocab"
                cornerImageUrl="../../Images/Vocab.jpg"
                linkTo="/vocab"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Grammar"
                subtitle="Learn to memorize Grammar"
                cornerImageUrl="../../Images/CoolWoman (1).jpg"
                linkTo="/grammar"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Alphabets"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../../Images/Alphabets.jpg"
                linkTo="/alphabets"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Major-System"
                subtitle="Learn to memorize the Major System"
                cornerImageUrl="../../Images/Major_System.jpg"
                linkTo="/major"
                tooltipContent={"Hello World!"}
            />
            <Tile
                title="Peg-Lists"
                subtitle="Learn to memorize Pegs"
                cornerImageUrl="../../Images/PegLists.jpg"
                linkTo="/pegs"
                tooltipContent={"Hello World!"}
            />

        </div>
    );
};

export default Home;
