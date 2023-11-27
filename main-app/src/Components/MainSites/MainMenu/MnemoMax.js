import React, {useState, useEffect, useRef} from "react";
// import "../../../Styles/MainSites/MnemoMax/MnemoMax.css";
import MnemoMenu from "../../MnemoMaxTrainer/MnemoMenu";
import MnemoProgressBar from "../../MnemoMaxTrainer/MnemoProgressBar";
import MnemoClock from "../../MnemoMaxTrainer/MnemoClock";
import MnemoContent from "../../MnemoMaxTrainer/MnemoContent";
import MnemoControlPanel from "../../MnemoMaxTrainer/MnemoControlPanel";

// Context import
import {LearningIsRunningContext, ClockCountSeconds, ActualStartTime, ActualBatch} from "./MnemoContexts";
import {ActualTraining, ActualChunkIndex, BatchSize, ChunkSize} from "./MnemoContexts";

import {TrainingStatus} from "./MnemoContexts";

export default function MnemoMax() {


    const menuData = [
        {title: "Numbers", items: ["Random Decimal", "Random Binary", "Special"]},
        {title: "Cards", items: ["52er", "36er", "32er"]},
        {title: "Names", items: ["Random", "Text", "Images"]},
        {title: "Alphabets", items: ["Tiere", "Gemüse", "Fahrzeuge","Werkzeuge","Sportarten"]},
        {title: "Routes", items: ["Text", "Image", "?"]},
        {title: "Rooms", items: ["Random", "Thematic", "Mind Palaces"]},
    ];

    const [isLearningRunning, setIsLearningRunning] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [actualStartTime, setActualStartTime] = useState(0)

    // states for management of displayed content
    const [actualTraining, setActualTraining] = useState("Numbers")
    const [actualChunkIndex, setActualChunkIndex] = useState(0)

    const [batchSize, setBatchSize] = useState(15)
    const [chunkSize, setChunkSize] = useState(4)

    const [actualBatch, setActualBatch] = useState(["Press to Start"])

    const [trainingStatus, setTrainingStatus] = useState("DefaultMessage")


    return (
        <LearningIsRunningContext.Provider value={{isLearningRunning, setIsLearningRunning}}>
            <ClockCountSeconds.Provider value={{timeInSeconds, setTimeInSeconds}}>
                <ActualStartTime.Provider value={{actualStartTime, setActualStartTime}}>
                    <ActualTraining.Provider value={{actualTraining, setActualTraining}}>
                        <ActualChunkIndex.Provider value={{actualChunkIndex, setActualChunkIndex}}>
                            <BatchSize.Provider value={{batchSize, setBatchSize}}>
                                <ChunkSize.Provider value={{chunkSize, setChunkSize}}>
                                    <ActualBatch.Provider value={{actualBatch, setActualBatch}}>
                                        <TrainingStatus.Provider value={{trainingStatus, setTrainingStatus}}>
                                            <div
                                                className={"my-auto max-h-full flex flex-col h-screen p-10 m-10 bg-gradient-to-tr from-cyan-700 to-cyan-900 rounded-2xl opacity-80"}>
                                                <div
                                                    className={"bg-gradient-to-tr from-cyan-600 to-cyan-900 rounded-2xl opacity-80"}>
                                                    <MnemoMenu menuData={menuData}/>
                                                </div>
                                                <div className={"flex flex-grow"}>
                                                    <div className={"w-1/4 p-5"}>
                                                        <MnemoClock/>
                                                        <MnemoProgressBar/>
                                                    </div>
                                                    <div className={"w-3/4 p-10"}>
                                                        <MnemoContent/>
                                                        <MnemoControlPanel/>
                                                    </div>
                                                </div>
                                            </div>
                                        </TrainingStatus.Provider>
                                    </ActualBatch.Provider>
                                </ChunkSize.Provider>
                            </BatchSize.Provider>
                        </ActualChunkIndex.Provider>
                    </ActualTraining.Provider>
                </ActualStartTime.Provider>
            </ClockCountSeconds.Provider>
        </LearningIsRunningContext.Provider>
    );
}
