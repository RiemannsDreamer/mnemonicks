import React, { useContext } from "react";
import "../../Styles/MainSites/MnemoMax/MnemoButton.css";
import { LearningIsRunningContext } from "../MainSites/MainMenu/MnemoContexts";

const MnemoButton = ({ title, onClick }) => {
    const { isLearningRunning,setIsLearningRunning } = useContext(LearningIsRunningContext);


    return (
        <div className={"mnemo-button-container"}>
            <div className={"mnemo-button"} onClick={onClick}>
                {title}
            </div>
        </div>
    );
};

export default MnemoButton;
