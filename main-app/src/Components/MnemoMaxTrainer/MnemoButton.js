import React, { useContext } from "react";
import "../../Styles/MainSites/MnemoMax/MnemoButton.css";
import { LearningIsRunningContext } from "../MainSites/MainMenu/MnemoContexts";

const MnemoButton = ({ title, action, onClick }) => {
    const { setIsLearningRunning, setCountSeconds } = useContext(LearningIsRunningContext);

    const handleButtonClick = () => {
        onClick && onClick(action);
    };

    return (
        <div className={"mnemo-button-container"}>
            <div className={"mnemo-button"} onClick={handleButtonClick}>
                {title}
            </div>
        </div>
    );
};

export default MnemoButton;
