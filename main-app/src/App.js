
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Tile from './Components/Tile/Tile';

import Home from './Components/MainSites/Home';
import Infos from './Components/MainSites/Infos';
import Numbers from './Components/MainSites/Numbers';

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
                        <Route path="/numbers" element={<Numbers/>} />
                    </Routes>
                </main>
                <Footer navItems={footerNavItems} />
            </div>
        </Router>
    );
};

export default App;
