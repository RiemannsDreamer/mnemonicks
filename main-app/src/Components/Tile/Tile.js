import React, { Component } from 'react';
import "../../Sytles/TileStyle.css"
import CornerImage from "./CornerImage";

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialisierung des Zustands, falls erforderlich
        };
    }

    render() {
        return (
            <div className={"Tile"}>
                <CornerImage/>
                <h1>This is a Tile!</h1>
                <h2>This is a Subtitle</h2>
                {/* JSX für die Darstellung der Komponente */}
            </div>
        );
    }
}

export default Tile