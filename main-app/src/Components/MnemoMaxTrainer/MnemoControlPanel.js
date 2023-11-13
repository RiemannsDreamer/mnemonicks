import React from "react";
import MnemoButton from "./MnemoButton";
import "../../Styles/MainSites/MnemoMax/MnemoControlPanel.css"

const MnemoControlPanel = () => {
    return (
        <div className="mnemo-control-panel">
            <h1>Control Panel</h1>
            <div className="mnemo-button-container">
                <MnemoButton className="mnemo-button" title="Start" />
                <MnemoButton className="mnemo-button" title="Stop" />
                <MnemoButton className="mnemo-button" title="Previous" />
                <MnemoButton className="mnemo-button" title="Next" />
                <MnemoButton className="mnemo-button" title="Menu" />
                <MnemoButton className="mnemo-button" title="Cancel" />
            </div>
        </div>
    );
};

export default MnemoControlPanel;
