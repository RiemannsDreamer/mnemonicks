import React from 'react';
import Tile from "../../Tile/Tile";

//import "../../Styles/MainSites/Grid_home.css"

const Home = () => {

    const tileData = [
        {
            title: "Infos",
            subtitle: "Infocenter for trainings",
            cornerImageUrl: "../../Images/Logos/Infos.jpg",
            linkTo: "/infos",
        },
        {
            title: "Numbers",
            subtitle: "Learn to memorize numbers",
            cornerImageUrl: "../../Images/Logos/Numbers.jpg",
            linkTo: "/numbers",
        },
        {
            title: "Cards",
            subtitle: "Learn to memorize cards",
            cornerImageUrl: "../../Images/Logos/Cards.jpg",
            linkTo: "/cards",
        },
        {
            title: "Faces and Names",
            subtitle: "Learn to remember faces and names",
            cornerImageUrl: "../../Images/Logos/Faces.jpg",
            linkTo: "/names",
        },
        {
            title: "Loci-Method",
            subtitle: "Learn how to use Locis",
            cornerImageUrl: "../../Images/Logos/LociMethod.jpg",
            linkTo: "/loci",
        },
        {
            title: "Mind-Palaces",
            subtitle: "Create a Mind Palace",
            cornerImageUrl: "../../Images/Logos/MindPalace-1.jpg",
            linkTo: "/mind-palace",
        },
        {
            title: "PCMPG",
            subtitle: "© ProCedural Mind Palace Generator",
            cornerImageUrl: "../..//Images/Logos/MindPalace-2.jpg",
            linkTo: "/pcmpg",
        },
        {
            title: "Vocabulary",
            subtitle: "Learn to memorize vocab",
            cornerImageUrl: "../../Images/Logos/Vocab.jpg",
            linkTo: "/vocab",
        },
        {
            title: "Grammar",
            subtitle: "Learn to memorize Grammar",
            cornerImageUrl: "../../Images/Logos/CoolWoman (1).jpg",
            linkTo: "/grammar",
        },
        {
            title: "Alphabets",
            subtitle: "Learn to memorize numbers",
            cornerImageUrl: "../../Images/Logos/Alphabets.jpg",
            linkTo: "/alphabets",
        },
        {
            title: "Major-System",
            subtitle: "Learn to memorize the Major System",
            cornerImageUrl: "../../Images/Logos/Major_System.jpg",
            linkTo: "/major",
        },
        {
            title: "Peg-Lists",
            subtitle: "Learn to memorize Pegs",
            cornerImageUrl: "../../Images/Logos/PegLists.jpg",
            linkTo: "/pegs",
        },
        {
            title: "Science Stuff",
            subtitle: "Learn some really nice stuff",
            cornerImageUrl: "../../Images/Logos/CoolWoman.jpg",
            linkTo: "/pegs",
        },
        {
            title: "Geography",
            subtitle: "Learn to memorize geography",
            cornerImageUrl: "../../Images/Logos/CoolWoman (2).jpg",
            linkTo: "/pegs",
        },
        {
            title: "Other Methods",
            subtitle: "Different simple methods",
            cornerImageUrl: "../../Images/Logos/Mind.jpg",
            linkTo: "/pegs",
        },
        {
            title: "Open",
            subtitle: "Learn to memorize something",
            cornerImageUrl: "../../Images/Logos/Numbers2.jpg",
            linkTo: "/pegs",
        },
    ];

    return (
        <div
            className={"grid-home grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10 justify-center"}>
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

export default Home;
