import React, { useContext } from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoButton.css";
import { LearningIsRunningContext } from "../MainSites/MainMenu/MnemoContexts";

const MnemoButton = ({ title, onClick }) => {
    const { isLearningRunning,setIsLearningRunning } = useContext(LearningIsRunningContext);


    return (
        <div className={"text-center p-4 rounded-2xl hover:bg-gradient-to-tr from-cyan-400 to-cyan-800 hover:opacity-70"}>
            <div className={"text-white"} onClick={onClick}>
                {title}
            </div>
        </div>
    );
};

export default MnemoButton;
