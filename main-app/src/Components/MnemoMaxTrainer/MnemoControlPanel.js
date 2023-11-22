import React from "react";
import {useContext,useEffect} from "react";

import MnemoButton from "./MnemoButton";

//import "../../Styles/MainSites/MnemoMax/MnemoControlPanel.css"

import {LearningIsRunningContext, ClockCountSeconds} from "../MainSites/MainMenu/MnemoContexts";
import {ActualChunkIndex} from "../MainSites/MainMenu/MnemoContexts";
import {ActualBatch} from "../MainSites/MainMenu/MnemoContexts";
import {ChunkSize, BatchSize} from "../MainSites/MainMenu/MnemoContexts";

import {getRandomNumbersForTraining} from "../MainSites/MainMenu/ComputationsDataGet";

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
    const {actualBatch, setActualBatch} = useContext(ActualBatch)

    const {batchSize, setBatchSize} = useContext(BatchSize)
    const {chunkSize, setChunkSize} = useContext(ChunkSize)


    const handleButtonClick = (action) => {

        switch (action) {
            case "start":
                setIsLearningRunning(true);

                setBatchSize(15)
                setChunkSize(4)

                setActualBatch(getRandomNumbersForTraining(batchSize, chunkSize));
                setActualChunkIndex(0);

                console.log("numbers: " + getRandomNumbersForTraining(batchSize, chunkSize))
                console.log("batch size: " + batchSize)
                console.log("chunk size: " + chunkSize)

                break;
            case "pause":
                setIsLearningRunning(false);
                break;
            case "resume":
                setIsLearningRunning(true);
                break;
            case "previous":
                setActualChunkIndex(actualChunkIndex - 1)
                break;
            case "next":
                setActualChunkIndex(actualChunkIndex + 1)
                break;
            case "test":

                break;
            case "cancel":
                setIsLearningRunning(false);
                setTimeInSeconds(0);

                setActualBatch(["Press to Start"])
                setActualChunkIndex(0)
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
