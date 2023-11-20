import React from 'react';
import Tile from "../Tile/Tile";

//import "../../Styles/MainSites/Home.css"

const Home = () => {
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center"}>

            <Tile
                title="Infos"
                subtitle="Infocenter for trainings"
                cornerImageUrl="../../Images/Logos/Infos.jpg"
                linkTo="/infos"
            />
            <Tile
                title="Numbers"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../../Images/Logos/Numbers.jpg"
                linkTo="/numbers"
            />
            <Tile
                title="Cards"
                subtitle="Learn to memorize cards"
                cornerImageUrl="../../Images/Logos/Cards.jpg"
                linkTo="/cards"
            />
            <Tile
                title="Faces and Names"
                subtitle="Learn to remember faces and names"
                cornerImageUrl="../../Images/Logos/Faces.jpg"
                linkTo="/names"
            />
            <Tile
                title="Loci-Method"
                subtitle="Learn how to use Locis"
                cornerImageUrl="../../Images/Logos/LociMethod.jpg"
                linkTo="/loci"
            />
            <Tile
                title="Mind-Palaces"
                subtitle="Create a Mind Palace"
                cornerImageUrl="../../Images/Logos/MindPalace-1.jpg"
                linkTo="/mind-palace"
            />
            <Tile
                title="PCMPG"
                subtitle="© ProCedural Mind Palace Generator"
                cornerImageUrl="../..//Images/Logos/MindPalace-2.jpg"
                linkTo="/pcmpg"
            />
            <Tile
                title="Vocabulary"
                subtitle="Learn to memorize vocab"
                cornerImageUrl="../../Images/Logos/Vocab.jpg"
                linkTo="/vocab"
            />
            <Tile
                title="Grammar"
                subtitle="Learn to memorize Grammar"
                cornerImageUrl="../../Images/Logos/CoolWoman (1).jpg"
                linkTo="/grammar"
            />
            <Tile
                title="Alphabets"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../../Images/Logos/Alphabets.jpg"
                linkTo="/alphabets"
            />
            <Tile
                title="Major-System"
                subtitle="Learn to memorize the Major System"
                cornerImageUrl="../../Images/Logos/Major_System.jpg"
                linkTo="/major"
            />
            <Tile
                title="Peg-Lists"
                subtitle="Learn to memorize Pegs"
                cornerImageUrl="../../Images/Logos/PegLists.jpg"
                linkTo="/pegs"
            />

            <Tile
                title="Science Stuff"
                subtitle="Learn some really nice stuff"
                cornerImageUrl="../../Images/Logos/CoolWoman.jpg"
                linkTo="/pegs"
            />


            <Tile
                title="Geography"
                subtitle="Learn to memorize geography"
                cornerImageUrl="../../Images/Logos/CoolWoman (2).jpg"
                linkTo="/pegs"
            />


            <Tile
                title="Other Methods"
                subtitle="Different simple methods"
                cornerImageUrl="../../Images/Logos/Mind.jpg"
                linkTo="/pegs"
            />


            <Tile
                title="Open"
                subtitle="Learn to memorize something"
                cornerImageUrl="../../Images/Logos/Numbers2.jpg"
                linkTo="/pegs"
            />


        </div>
    );
};

export default Home;
