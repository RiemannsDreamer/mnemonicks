
import './App.css';


import React from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Tile from './Components/Tile/Tile';

const App = () => {

    const headerNavItems = [
        { content: 'Home' },
        { content: 'About the Project' },
        { content: 'About \"Trainer\"' },
        { content: 'Documentation' },
        { content: 'Contact' },
    ];

    const footerNavItems = [
        { content: 'Impressum' },
        { content: 'Contact' },
        { content: 'Privacy' },
        { content: 'Cookies' },
        { content: 'Credits' },

    ];

    return (
        <div>
            <Header navItems={headerNavItems} title="Mnemonicks"/>
            <main>
                {/* Inhalt deiner App.js hier */}
                <Tile
                    title="Infos"
                    subtitle="Infocenter for trainings"
                    cornerImageUrl="../../Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                title="Numbers"
                subtitle="Learn to memorize numbers"
                cornerImageUrl="../..//Images/logo512.png"
                linkTo="/route1"
                tooltipTitle="Tooltip Titel 1"
                tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Cards"
                    subtitle="Learn to memorize cards"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Faces and Names"
                    subtitle="Learn to remember faces and names"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Loci-Method"
                    subtitle="Learn how to use Locis"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Mind-Palaces"
                    subtitle="Create a Mind Palace"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="PMPG"
                    subtitle= " © Procedural Mind Palace Generator"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Numbers"
                    subtitle="Learn to memorize numbers"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Numbers"
                    subtitle="Learn to memorize numbers"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Numbers"
                    subtitle="Learn to memorize numbers"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Numbers"
                    subtitle="Learn to memorize numbers"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Numbers"
                    subtitle="Learn to memorize numbers"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
                <Tile
                    title="Numbers"
                    subtitle="Learn to memorize numbers"
                    cornerImageUrl="../..//Images/logo512.png"
                    linkTo="/route1"
                    tooltipTitle="Tooltip Titel 1"
                    tooltipText="Tooltip Text 1"
                />
            </main>
            <Footer navItems={footerNavItems}/>
        </div>
    );
};

export default App;
