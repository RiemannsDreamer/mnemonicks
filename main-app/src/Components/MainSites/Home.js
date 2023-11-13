import React from 'react';
import Tile from "../Tile/Tile";

import "../../Styles/MainSites/Home.css"

const Home = () => {
    return (
        <div className={"home-container"}>

            <Tile
                title="Infos"
                subtitle="Infocenter for trainings"
                cornerImageUrl="../../Images/Logos/Infos.jpg"
                linkTo="/infos"
                tooltipContent={"In this section you can find some infos and references about the methods used and trained on the website. "}
            />
            <Tile
                title="Numbers"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../../Images/Logos/Numbers.jpg"
                linkTo="/numbers"
                tooltipContent={"In this section you can train to remember numbers. There are random, special and binary numbers to train. Later on, you can import your own numbers and train them separately"}
            />
            <Tile
                title="Cards"
                subtitle="Learn to memorize cards"
                cornerImageUrl="../../Images/Logos/Cards.jpg"
                linkTo="/cards"
                tooltipContent={"In this section you can learn some card sets. For sure - 52-Poker sets are there, and others like french an swiss jass"}
            />
            <Tile
                title="Faces and Names"
                subtitle="Learn to remember faces and names"
                cornerImageUrl="../../Images/Logos/Faces.jpg"
                linkTo="/names"
                tooltipContent={"In this section you can learn faces and names"}
            />
            <Tile
                title="Loci-Method"
                subtitle="Learn how to use Locis"
                cornerImageUrl="../../Images/Logos/LociMethod.jpg"
                linkTo="/loci"
                tooltipContent={"In this Section you can learn the Loci-Method and manage your routes with ease. Collect routes and compose them together to bigger structures."}
            />
            <Tile
                title="Mind-Palaces"
                subtitle="Create a Mind Palace"
                cornerImageUrl="../../Images/Logos/MindPalace-1.jpg"
                linkTo="/mind-palace"
                tooltipContent={"In this section you can learn how to use Mind-Palaces. Additionally you can manage your existing Mind-Palaces and organise them."}
            />
            <Tile
                title="PCMPG"
                subtitle="© ProCedural Mind Palace Generator"
                cornerImageUrl="../..//Images/Logos/MindPalace-2.jpg"
                linkTo="/pcmpg"
                tooltipContent={"The © ProCedural Mind Palace Generator is an application which generates random or pre-structured Mind Palaces from scratch. Use structure-diagramms (graphs) to define the underlying connections between routes and rooms in your MP. Afterward you get a fully designed model of your desired MP. (coming (perhaps) soon)"}
            />
            <Tile
                title="Vocabulary"
                subtitle="Learn to memorize vocab"
                cornerImageUrl="../../Images/Logos/Vocab.jpg"
                linkTo="/vocab"
                tooltipContent={"In this Section you can learn vocabs in different languages. You can also use your own dictionary"}
            />
            <Tile
                title="Grammar"
                subtitle="Learn to memorize Grammar"
                cornerImageUrl="../../Images/Logos/CoolWoman (1).jpg"
                linkTo="/grammar"
                tooltipContent={"In this section you can learn grammar rules."}
            />
            <Tile
                title="Alphabets"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../../Images/Logos/Alphabets.jpg"
                linkTo="/alphabets"
                tooltipContent={"In this section you'll find two things. First, there are predefined mnemonic alphabets which you could learn. Second, you can define and / or import your own alphabets an train them with the MnemoMax."}
            />
            <Tile
                title="Major-System"
                subtitle="Learn to memorize the Major System"
                cornerImageUrl="../../Images/Logos/Major_System.jpg"
                linkTo="/major"
                tooltipContent={"In this section you can learn the Major-System from scratch."}
            />
            <Tile
                title="Peg-Lists"
                subtitle="Learn to memorize Pegs"
                cornerImageUrl="../../Images/Logos/PegLists.jpg"
                linkTo="/pegs"
                tooltipContent={"In this section you can learn predefined Peg-Lists or define / import your own ones."}
            />

            <Tile
                title="Science Stuff"
                subtitle="Learn some really nice stuff"
                cornerImageUrl="../../Images/Logos/CoolWoman.jpg"
                linkTo="/pegs"
                tooltipContent={"In this section you can learn topics from Mathematics to Computer Science over Biology."}
            />


            <Tile
                title="Geography"
                subtitle="Learn to memorize geography"
                cornerImageUrl="../../Images/Logos/CoolWoman (2).jpg"
                linkTo="/pegs"
                tooltipContent={"In this section you can learn geography stuff, like capitals, mountains, rivers or just country names."}
            />


            <Tile
                title="Other Methods"
                subtitle="Different simple methods"
                cornerImageUrl="../../Images/Logos/Mind.jpg"
                linkTo="/pegs"
                tooltipContent={"Here you'll find other Methods which are kind of difficult to classify or rather simple."}
            />


            <Tile
                title="Open"
                subtitle="Learn to memorize something"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/pegs"
                tooltipContent={"Open tile for further Topics"}
            />


        </div>
    );
};

export default Home;
