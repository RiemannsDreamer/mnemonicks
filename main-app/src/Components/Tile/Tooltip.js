import React, {Component} from 'react';
import "../../Sytles/TooltipStyle.css"

class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialisierung des Zustands, falls erforderlich
        };
    }

    render() {
        return (
            <div className={"Tooltip"}>
                <h1>This is a Tooltip</h1>
                {/* JSX für die Darstellung der Komponente */}
            </div>
        );
    }
}

export default Tooltip
