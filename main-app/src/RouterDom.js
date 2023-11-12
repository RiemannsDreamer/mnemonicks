import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Annahme: Deine Hauptkomponente heißt App
import Route1Component from './Components/Trainer/TrainerMain'; // Annahme: Eine separate Komponente für /route1

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/route1" component={Route1Component} />
                {/* Weitere Routen hier hinzufügen */}
            </Switch>
        </Router>
    );
};

export default Routes;
