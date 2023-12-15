
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Tile from './Components/Tile/Tile';

import Home from './Components/MainSites/MainMenuHeader/Home';
import Infos from './Components/MainSites/TilesHierarchy/Infos';
import Numbers from './Components/MainSites/TilesHierarchy/Numbers';
import Alphabets from './Components/MainSites/TilesHierarchy/Alphabets';
import Cards from './Components/MainSites/TilesHierarchy/Cards';
import Grammar from './Components/MainSites/TilesHierarchy/Grammar';
import Loci from './Components/MainSites/TilesHierarchy/Loci'
import Major from './Components/MainSites/TilesHierarchy/Major';
import MindPalace from "./Components/MainSites/TilesHierarchy/Mind-Palace";
import Names from "./Components/MainSites/TilesHierarchy/Names";
import PCMPG from "./Components/MainSites/TilesHierarchy/PCMPG";
import Pegs from "./Components/MainSites/TilesHierarchy/Pegs";
import Vocab from "./Components/MainSites/TilesHierarchy/Vocab";
import Impressum from "./Components/MainSites/Footer/Impressum";

// import MnemoMax from "./Components/MainSites/MainMenuHeader/MnemoMax";
import MainMnemoMaxSite from "./Components/MainSites/MainMenuHeader/MainMnemoMaxSite"
import Privacy from "./Components/MainSites/Footer/Privacy";
import Cookies from "./Components/MainSites/Footer/Cookies";
import Credits from "./Components/MainSites/Footer/Credits";

const App = () => {

    const headerNavItems = [
        { content: 'Home', linkTo: '/'},
        { content: '© MnemoMax', linkTo: '/mnemo-max'},
        { content: '© PCMPG', linkTo: '/'},
        { content: 'About', linkTo: '/' },
        { content: 'Docs', linkTo: '/' },
        { content: 'Contact', linkTo: '/'},
        { content: 'Forum' , linkTo: '/'},
    ];

    const footerNavItems = [
        { content: 'Impressum', linkTo: '/impressum'},
        { content: 'Contact' , linkTo: '/'},
        { content: 'Privacy' , linkTo: '/privacy'},
        { content: 'Cookies', linkTo: '/cookies' },
        { content: 'Credits' , linkTo: '/credits'},

    ];

    return (
        <Router>
            <div className={"bg-[url('./AbstractTexture.jpg')] aspect-auto bg-cover  bg-center bg-blend-multiply bg-cyan-500"}>
                <Header navItems={headerNavItems} title="Mnemonicks" />
                <main className={"h-full"}>
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

                        <Route path="/mnemo-max" element={<MainMnemoMaxSite/>}/>

                        <Route path="/impressum" element={<Impressum/>}/>
                        <Route path="/privacy" element={<Privacy/>}/>
                        <Route path="/cookies" element={<Cookies/>}/>
                        <Route path="/credits" element={<Credits/>}/>
                    </Routes>
                </main>
                <Footer navItems={footerNavItems} />
            </div>
        </Router>
    );
};

export default App;
