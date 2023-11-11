import React, { Component } from 'react';
import "../../Sytles/CornerImageStyle.css"

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
                <img src="/home/mercus/WebstormProjects/mnemonicks/main-app/public/Images/logo512.png" alt="Beispielbild" />
                {/* JSX für die Darstellung der Komponente */}
                <p>Hello</p>
            </div>
        );
    }
}

export default CornerImage