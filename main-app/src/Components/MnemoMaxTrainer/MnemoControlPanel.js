
import React from "react";
import MnemoButton from "./MnemoButton";
import "../../Styles/MainSites/MnemoMax/MnemoControlPanel.css";

const buttonData = [
    { title: "Start" },
    { title: "Stop" },
    { title: "Previous" },
    { title: "Next" },
    { title: "Menu" },
    { title: "Cancel" },
];

const MnemoControlPanel = () => {
    return (
        <div className="mnemo-control-panel">
            <h1>Control Panel</h1>
            <div className="mnemo-button-container">
                {buttonData.map((button, index) => (
                    <MnemoButton key={index} title={button.title} />
                ))}
            </div>
        </div>
    );
};

export default MnemoControlPanel;
