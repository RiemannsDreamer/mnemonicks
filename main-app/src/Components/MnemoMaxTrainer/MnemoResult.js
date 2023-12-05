import React, {useContext, useEffect, useState} from "react";
import {ActualBatch, ClockCountSeconds, ResultBatch, TrainingStatus} from "../MainSites/MainMenu/MnemoContexts";


const MnemoResult = () => {

    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds)
    const {actualBatch, setActualBatch} = useContext(ActualBatch)
    const {resultBatch, setResultBatch} = useContext(ResultBatch)

    const {trainingStatus, setTrainingStatus} = useContext(TrainingStatus)

    const [accuracy, setAccuracy] = useState(0)

    useEffect(() => {

        if (trainingStatus === "Result") {
            setAccuracy(computeAccuracyInPerc(actualBatch, resultBatch))
        }

    }, [trainingStatus]);


    return (

        <div>
            <h3>Results from Training:</h3>
            <p>Accuracy: {accuracy} %</p>
            <p>Time used in s: {timeInSeconds} </p>
        </div>
    )
}

export default MnemoResult

function computeAccuracyInPerc(actualBatch, resultBatch) {

    let correct = 0
    let len = actualBatch.length

    for (let i = 0; i < len; i++) {
        let actualNumber = parseInt(actualBatch[i])
        let resultNumber = parseInt(resultBatch[i])

        if (actualNumber === resultNumber) {
            correct += 1

        }
    }

    let accuracy = parseFloat((correct / len).toFixed(4)) * 100

    return accuracy
}