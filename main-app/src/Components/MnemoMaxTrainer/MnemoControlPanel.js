
import React from "react";
import {useContext} from "react";
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
    const { countSeconds, setCountSeconds } = useContext(ClockCountSeconds);

    const [buttonStates, setButtonStates] = useState({
        start: false,
        pause: false,
        resume: false,
        previous: false,
        next: false,
        test: false,
        cancel: false,
    });

    const handleButtonClick = (action) => {
        switch (action) {
            case "start":
                setIsLearningRunning(true);
                setButtonStates({ ...buttonStates, start: true });
                break;
            case "pause":
                setIsLearningRunning(false);
                setButtonStates({ ...buttonStates, pause: true });
                break;
            case "resume":
                setIsLearningRunning(true);
                setButtonStates({ ...buttonStates, resume: true });
                break;
            case "previous":
                // Implementiere die Logik für den "Previous"-Button
                setButtonStates({ ...buttonStates, previous: true });
                break;
            case "next":
                // Implementiere die Logik für den "Next"-Button
                setButtonStates({ ...buttonStates, next: true });
                break;
            case "test":
                // Implementiere die Logik für den "Test"-Button
                setButtonStates({ ...buttonStates, test: true });
                break;
            case "cancel":
                setIsLearningRunning(false);
                setCountSeconds(0);
                setButtonStates({ ...buttonStates, cancel: true });
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
                        clicked={buttonStates[button.action]}
                    />
                ))}
            </div>
        </div>
    );
};

export default MnemoControlPanel;
