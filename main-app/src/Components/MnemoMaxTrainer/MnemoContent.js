import React, {useCallback, useContext, useEffect} from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoContent.css";

import {ActualBatch, ActualChunkIndex, ClockCountSeconds, TrainingStatus} from "../MainSites/MainMenu/MnemoContexts";

import MnemoTest from "./MnemoTest";
import MnemoResult from "./MnemoResult";

const MnemoContent = () => {

    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);
    const {actualBatch, setActualBatch} = useContext(ActualBatch)
    const {actualChunkIndex, setActualChunkIndex} = useContext(ActualChunkIndex)

    const {trainingStatus, setTrainingStatus} = useContext(TrainingStatus)

    let isTrainingVisible = false
    let isTestVisible = false
    let isResultVisible = false

    let isDefaultMessageVisible = false

    useEffect(() => {

        if (trainingStatus === "Train") {
            isTrainingVisible = true
            isTestVisible = false
            isResultVisible = false

            isDefaultMessageVisible = false
        } else if (trainingStatus === "Test") {
            isTrainingVisible = false
            isTestVisible = true
            isResultVisible = false

            isDefaultMessageVisible = false
        } else if (trainingStatus === "Result") {
            isTrainingVisible = false
            isTestVisible = false
            isResultVisible = true

            isDefaultMessageVisible = false
        } else if(trainingStatus === "DefaultMessage"){
            isTrainingVisible = false
            isTestVisible = false
            isResultVisible = false

            isDefaultMessageVisible = true
        }

        return () => {
            console.log('Cleanup oder vor dem erneuten Ausführen des Effekts');
        };
    }, [trainingStatus]);

    return (

        <div
            className="w-full h-5/6 bg-gradient-to-tr from-cyan-500 to-cyan-900 rounded-2xl m-4 text-center flex items-center justify-center">

            {isDefaultMessageVisible && <strong className={"text-white text-5xl"}>Press button to start.</strong>}

            {isTrainingVisible && <p className={"text-center text-white text-5xl"}>{actualBatch[actualChunkIndex]}</p>}
            {isTestVisible && <MnemoTest/>}
            {isResultVisible && <MnemoResult/>}

        </div>
    );
}

export default MnemoContent;
