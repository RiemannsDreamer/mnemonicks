import React, { Component } from 'react';
import './MyComponent.css'

class CornerImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialisierung des Zustands, falls erforderlich
        };
    }

    render() {
        return (
            <div className={"CornerImage"}>
                <img src="public/Images/logo512.png" alt="Beispielbild" />
                {/* JSX für die Darstellung der Komponente */}
            </div>
        );
    }
}

export default CornerImage