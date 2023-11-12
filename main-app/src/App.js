
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Tile from './Components/Tile/Tile';

import Home from './Components/MainSites/Home';
import Infos from './Components/MainSites/Infos';
import Numbers from './Components/MainSites/Numbers';
import Alphabets from './Components/MainSites/Alphabets';
import Cards from './Components/MainSites/Cards';
import Grammar from './Components/MainSites/Grammar';
import Loci from './Components/MainSites/Loci'
import Major from './Components/MainSites/Cards';
import MindPalace from "./Components/MainSites/Mind-Palace";
import Names from "./Components/MainSites/Names";
import PCMPG from "./Components/MainSites/PCMPG";
import Pegs from "./Components/MainSites/Pegs";
import Vocab from "./Components/MainSites/Vocab";


const App = () => {

    const headerNavItems = [
        { content: 'Home', linkTo: '/' },
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
        <Router>
            <div>
                <Header navItems={headerNavItems} title="Mnemonicks" />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/infos" element={<Infos />} />
                        <Route path="/numbers" element={<Numbers />} />
                        <Route path="/alphabets" element={<Alphabets />} />

                        <Route path="/cards" element={<Cards />} />
                        <Route path="/grammar" element={<Grammar />} />
                        <Route path="/loci" element={<Loci />} />
                        <Route path="/major" element={<Major />} />
                        <Route path="/mind-palace" element={<MindPalace />} />
                        <Route path="/names" element={<Names />} />
                        <Route path="/pcmpg" element={<PCMPG />} />
                        <Route path="/pegs" element={<Pegs />} />
                        <Route path="/vocab" element={<Vocab />} />
                    </Routes>
                </main>
                <Footer navItems={footerNavItems} />
            </div>
        </Router>
    );
};

export default App;
