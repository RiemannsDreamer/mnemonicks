import logo from './logo.svg';
import './App.css';
// App.js
// App.js

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
        { content: 'Home' },
        { content: 'About' },
        { content: 'Contact' },
    ];

    return (
        <div>
            <Header navItems={headerNavItems} title="Mnemonicks"/>
            <main>
                {/* Inhalt deiner App.js hier */}
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
                {/* Weitere Inhalte hier hinzufügen */}
            </main>
            <Footer/>
        </div>
    );
};

export default App;
