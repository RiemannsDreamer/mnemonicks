import React from "react";
import {useContext, useEffect} from "react";

import MnemoButton from "./MnemoButton";

//import "../../Styles/MainSites/MnemoMax/MnemoControlPanel.css"

import {LearningIsRunningContext, ClockCountSeconds, ResultBatch, AppState} from "../MainSites/MainMenu/MnemoContexts";
import {ActualChunkIndex} from "../MainSites/MainMenu/MnemoContexts";
import {ActualBatch} from "../MainSites/MainMenu/MnemoContexts";
import {ChunkSize, BatchSize} from "../MainSites/MainMenu/MnemoContexts";

import {TrainingStatus} from "../MainSites/MainMenu/MnemoContexts";

import {getRandomNumbersForTraining, unChunkingBatch} from "../MainSites/MainMenu/ComputationsDataGet";
import App from "../../App";

const MnemoControlPanel = () => {
    const buttonData = [
        {title: "Start", action: "start"},
        {title: "Pause", action: "pause"},
        {title: "Resume", action: "resume"},
        {title: "Previous", action: "previous"},
        {title: "Next", action: "next"},
        {title: "Test", action: "test"},
        {title: "Cancel", action: "cancel"},
    ];

    const {isLearningRunning, setIsLearningRunning} = useContext(LearningIsRunningContext);
    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);
    const {actualChunkIndex, setActualChunkIndex} = useContext(ActualChunkIndex)


    const {batchSize, setBatchSize} = useContext(BatchSize)
    const {chunkSize, setChunkSize} = useContext(ChunkSize)

    const {actualBatch, setActualBatch} = useContext(ActualBatch)
    const {resultBatch, setResultBatch} = useContext(ResultBatch)
    const {trainingStatus, setTrainingStatus} = useContext(TrainingStatus)

    const {appState, setAppState} = useContext(AppState)

    const handleButtonClick = (action) => {

        switch (action) {
            case "start":

                let newActualBatch = getRandomNumbersForTraining(10, 2)

                let newAppState = {
                    trainingStatus: "Train",

                    clockCountSeconds: -3,
                    actualStartTime: 0,

                    batchSize: 42,
                    chunkSize: 5,
                    actualChunkIndex: 0,

                    actualBatch: newActualBatch,
                    resultBatch: [],

                }

                setAppState(newAppState)

                break;
            case "pause":
                setAppState((previous) => ({
                    ...previous,
                    trainingStatus: "Pause"
                }));
                break;
            case "resume":

                setAppState((previous) => ({
                    ...previous,
                    trainingStatus: "Train"
                }));

                break;
            case "previous":

                setAppState((previous) => ({
                    ...previous,
                    actualChunkIndex: previous.actualChunkIndex - 1,
                }));

                break;
            case "next":
                setAppState((previous) => ({
                    ...previous,
                    actualChunkIndex: previous.actualChunkIndex + 1,
                }));
                break;
            case "test":


                let newUnchunkedBatch = unChunkingBatch(appState.actualBatch)
                newUnchunkedBatch.pop()

                setAppState((previous) => ({
                    ...previous,

                    trainingStatus: "Test",

                    actualBatch: newUnchunkedBatch,
                }));

                break;
            case "cancel":

                setAppState((previous) => ({
                    ...previous,

                    trainingStatus: "DefaultMessage",
                    timeInSeconds: 0,

                    actualBatch: "PressToStart",
                    actualChunkIndex: 0,
                }));

                break;
            default:
                break;
        }
    };

    return (
        <div
            className="h-1/9 flex items-center justify-center w-full h-20 bg-gradient-to-tr from-cyan-400 to-cyan-800 rounded-2xl m-4">
            <div className="flex space-x-4">
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
