import React, {useCallback, useContext, useEffect} from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoContent.css";


import {ActualBatch, ActualChunkIndex, ClockCountSeconds, TrainingStatus} from "../MainSites/MainMenu/MnemoContexts";

import MnemoTest from "./MnemoTest";
import MnemoResult from "./MnemoResult";
import MnemoTrain from "./MnemoTrain";

const MnemoContent = () => {

    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);
    const {actualBatch, setActualBatch} = useContext(ActualBatch)
    const {actualChunkIndex, setActualChunkIndex} = useContext(ActualChunkIndex)


    const {trainingStatus, setTrainingStatus} = useContext(TrainingStatus)


    return (
        <div className="max-h-5/6 w-full h-5/6 bg-gradient-to-tr from-cyan-500 to-cyan-900 rounded-2xl m-4 text-center flex items-center justify-center">

            {trainingStatus === "DefaultMessage" && <strong className={"text-white text-4xl"}>Press button to start.</strong>}

            {trainingStatus === "Train" && <MnemoTrain/>}
            {trainingStatus === "Pause" && <p className={"text-center text-white text-4xl"}>PAUSE...</p>}
            {trainingStatus === "Test" && <MnemoTest />}
            {trainingStatus === "Result" && <MnemoResult/>}

        </div>
    );
}

export default MnemoContent;
