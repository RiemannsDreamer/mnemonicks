
import React from "react";
import {useContext} from "react";
import {useEffect} from "react"
import {useState} from "react";

import MnemoButton from "./MnemoButton";

import "../../Styles/MainSites/MnemoMax/MnemoControlPanel.css"

import {LearningIsRunningContext,ClockCountSeconds} from "../MainSites/MainMenu/MnemoContexts";


const MnemoControlPanel = () => {
    const buttonData = [
        { title: "Start", action: "start" },
        { title: "Pause", action: "pause" },
        { title: "Resume", action: "resume" },
        { title: "Previous", action: "previous" },
        { title: "Next", action: "next" },
        { title: "Test", action: "test" },
        { title: "Cancel", action: "cancel" },
    ];

    const { isLearningRunning, setIsLearningRunning } = useContext(LearningIsRunningContext);
    const { timeInSeconds, setTimeInSeconds } = useContext(ClockCountSeconds);

    const handleButtonClick = (action) => {

        switch (action) {
            case "start":
                setIsLearningRunning(true);
                break;
            case "pause":
                setIsLearningRunning(false);
                break;
            case "resume":
                setIsLearningRunning(true);
                break;
            case "previous":

                break;
            case "next":

                break;
            case "test":

                break;
            case "cancel":
                setIsLearningRunning(false);
                setTimeInSeconds(0);
                break;
            default:
                break;
        }
    };

    return (
        <div className="mnemo-control-panel">
            <div className="mnemo-button-container">
                {buttonData.map((button, index) => (
                    <MnemoButton
                        key={index}
                        title={button.title}
                        onClick={() => handleButtonClick(button.action)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MnemoControlPanel;
