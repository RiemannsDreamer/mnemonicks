import React, {useState} from "react";
import "../../../Styles/MainSites/MnemoMax/MnemoMax.css";
import MnemoMenu from "../../MnemoMaxTrainer/MnemoMenu";
import MnemoProgressBar from "../../MnemoMaxTrainer/MnemoProgressBar";
import MnemoClock from "../../MnemoMaxTrainer/MnemoClock";
import MnemoContent from "../../MnemoMaxTrainer/MnemoContent";
import MnemoControlPanel from "../../MnemoMaxTrainer/MnemoControlPanel";

// Context import
import {LearningIsRunningContext, ClockCountSeconds, ActualStartTime} from "./MnemoContexts";
import {ActualTraining, ActualChunkIndex, BatchSize, ChunkSize} from "./MnemoContexts";

export default function MnemoMax() {
    const [isLearningRunning, setIsLearningRunning] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [actualStartTime, setActualStartTime] = useState(0)

    // states for management of displayed content
    const [actualTraining, setActualTraining] = useState("numbers")
    const [actualChunkIndex, setActualChunkIndex] = useState(0)
    const [batchSize, setBatchSize] = useState(0)
    const [chunkSize, setChunkSize] = useState(0)


    return (
        <LearningIsRunningContext.Provider value={{isLearningRunning, setIsLearningRunning}}>
            <ClockCountSeconds.Provider value={{timeInSeconds, setTimeInSeconds}}>
                <ActualStartTime.Provider value={{actualStartTime, setActualStartTime}}>
                    <ActualTraining.Provider value={{actualTraining, setActualTraining}}>
                        <ActualChunkIndex.Provider value={{actualChunkIndex, setActualChunkIndex}}>
                            <BatchSize.Provider value={{batchSize, setBatchSize}}>
                                <ChunkSize.Provider value={{chunkSize, setChunkSize}}>
                                    <div className={"mnemo-max-container"}>
                                        <div className={"mnemo-menu-container"}>
                                            <MnemoMenu/>
                                        </div>
                                        <div className={"mnemo-main-content-container"}>
                                            <div className={"progress-content"}>
                                                <MnemoProgressBar/>
                                            </div>
                                            <div className={"mnemo-app-container"}>
                                                <MnemoClock/>
                                                <MnemoContent/>
                                                <MnemoControlPanel/>
                                            </div>
                                        </div>
                                    </div>
                                </ChunkSize.Provider>
                            </BatchSize.Provider>
                        </ActualChunkIndex.Provider>
                    </ActualTraining.Provider>
                </ActualStartTime.Provider>
            </ClockCountSeconds.Provider>
        </LearningIsRunningContext.Provider>
    );
}
