
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
import Major from './Components/MainSites/Major';
import MindPalace from "./Components/MainSites/Mind-Palace";
import Names from "./Components/MainSites/Names";
import PCMPG from "./Components/MainSites/PCMPG";
import Pegs from "./Components/MainSites/Pegs";
import Vocab from "./Components/MainSites/Vocab";


const App = () => {

    const headerNavItems = [
        { content: 'Home', linkTo: '/',logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Landingpage with all SubApps. Here you can get infos about methods and train your skills with MnemoMax." },
        { content: 'About' ,logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Infos about the project, the development and the background. Some general infos."},
        { content: '©MnemoMax',logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"©MnemoMax is the trainer app of mnemonicks. With this app you can train several different methods and contents."},
        { content: 'Docs' ,logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Documentation of this website. This Docs have two parts. First, the Docs about development. Second, the Docs about how to use the components"},
        { content: 'Contact' ,logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Simple contact form to get in touch with the developers"},
        { content: 'Forum' ,logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"In this forum, we can build a solid community around the app. Discuss your questions and feature requests with others"},
    ];

    const footerNavItems = [
        { content: 'Impressum',logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Standard Impressum of this website" },
        { content: 'Contact' ,logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Simple contact form to get in touch with the developers"},
        { content: 'Privacy' ,logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Privacy Policy of this website"},
        { content: 'Cookies' ,logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Cookie Policy of this website"},
        { content: 'Credits' ,logoSrc:"../../Images/Logos/Numbers.jpg",tooltip:"Some Credits to all the persons who have contributed something to this project."},

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
