import React, {useCallback, useContext, useEffect} from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoContent.css";


import {
    ActualBatch,
    ActualChunkIndex,
    AppState,
    ClockCountSeconds,
    TrainingStatus
} from "../MainSites/MainMenu/MnemoContexts";

import MnemoTest from "./MnemoTest";
import MnemoResult from "./MnemoResult";
import MnemoTrain from "./MnemoTrain";
import App from "../../App";

const MnemoContent = () => {

    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);
    const {actualBatch, setActualBatch} = useContext(ActualBatch)
    const {actualChunkIndex, setActualChunkIndex} = useContext(ActualChunkIndex)


    const {trainingStatus, setTrainingStatus} = useContext(TrainingStatus)

    // TODO: altered
    const {appState,setAppState} = useContext(AppState)


    return (
        <div className="max-h-5/6 w-full h-5/6 bg-gradient-to-tr from-cyan-500 to-cyan-900 rounded-2xl m-4 text-center  flex items-center justify-center">

            {appState.trainingStatus === "DefaultMessage" && <strong className={"text-white text-4xl"}>Press button to start.</strong>}

            {appState.trainingStatus === "Train" && <MnemoTrain/>}
            {appState.trainingStatus === "Pause" && <p className={"text-center text-white text-4xl"}>PAUSE...</p>}
            {appState.trainingStatus === "Test" && <MnemoTest />}
            {appState.trainingStatus === "Result" && <MnemoResult/>}

        </div>
    );
}

export default MnemoContent;
