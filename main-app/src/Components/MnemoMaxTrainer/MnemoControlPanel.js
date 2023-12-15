import React from "react";
import {useContext, useEffect} from "react";

import MnemoButton from "./MnemoButton";

//import "../../Styles/MainSites/MnemoMax/MnemoControlPanel.css"

import { AppState} from "../MainSites/MainMenuHeader/MnemoContexts";

import {getRandomNumbersForTraining, unChunkingBatch} from "../MainSites/MainMenuHeader/ComputationsDataGet";
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

    const {appState, setAppState} = useContext(AppState)

    useEffect(() => {
        console.log(appState);

        // Cleanup-Funktion: wird ausgeführt, wenn die Komponente demontiert wird
        return () => {
            console.log('Component unmounted');
        };
    }, [appState]);

    const handleButtonClick = (action) => {

        switch (action) {
            case "start":

                let newActualBatch = getRandomNumbersForTraining(appState.batchSize, appState.chunkSize)
                console.log(appState.batchSize, appState.chunkSize)
                console.log(newActualBatch)

                /*
                let newAppState = {
                    trainingStatus: "Train",

                    clockCountSeconds: -3,
                    actualStartTime: 0,

                    actualChunkIndex: 0,

                    actualBatch: newActualBatch,
                    resultBatch: [],
                }

                setAppState(newAppState)

                 */
                setAppState((previous) => ({
                    ...previous,
                    clockCountSeconds: -3,
                    actualStartTime: 0,

                    actualChunkIndex: 0,

                    actualBatch: newActualBatch,
                    resultBatch: [],

                    trainingStatus: "Train",
                }));

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

                    trainingStatus: "Settings",
                    timeInSeconds: 0,

                    actualBatch: "PressToStart",
                    resultBatch: [],
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
