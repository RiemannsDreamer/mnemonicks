import React, {useState} from "react";
// import "../../../Styles/MainSites/MnemoMax/MnemoMax.css";
import MnemoMenu from "../../MnemoMaxTrainer/MnemoMenu";
import MnemoProgressBar from "../../MnemoMaxTrainer/MnemoProgressBar";
import MnemoClock from "../../MnemoMaxTrainer/MnemoClock";
import MnemoContent from "../../MnemoMaxTrainer/MnemoContent";
import MnemoControlPanel from "../../MnemoMaxTrainer/MnemoControlPanel";

// Context import
import {LearningIsRunningContext, ClockCountSeconds, ActualStartTime} from "./MnemoContexts";
import {ActualTraining, ActualChunkIndex, BatchSize, ChunkSize} from "./MnemoContexts";

export default function MnemoMax() {

    const menuData = [
        { title: "Edit", items: ["Cut", "Copy", "Paste"] },
        { title: "Trainings", items: ["Numbers", "Cards", "Names", "Faces"] },
        { title: "Settings", items: ["Option A", "Option B", "Option C"] },
        { title: "File", items: ["Open", "Save", "Download"] },
        { title: "Sonstiges", items: ["Item 1", "Item 2", "Item 3"] },
    ];

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
                                    <div className={"h-1/1 w-1/1 m-10 flex flex-col bg-gradient-to-tr from-cyan-700 to-cyan-900 rounded-2xl opacity-80"}>
                                        <div className={"bg-gradient-to-tr from-cyan-600 to-cyan-900 rounded-2xl opacity-80 m-5"}>
                                            <MnemoMenu menuData={menuData} />
                                        </div>
                                        <div className={"flex flex-row h-4/5"}>
                                            <div className={"w-1/3 m-10"}>
                                                <MnemoProgressBar/>
                                            </div>
                                            <div className={"w-2/3 m-10"}>
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
