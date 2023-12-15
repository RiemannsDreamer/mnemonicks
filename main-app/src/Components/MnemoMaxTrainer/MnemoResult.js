import React, {useContext, useEffect, useState} from "react";
import {AppState} from "../MainSites/MainMenuHeader/MnemoContexts";


/**
 * Displays the results of the session on the end of a training (session).
 * Makes use of appState to compute and render info.
 * Provides restart button. When pressed, a fresh session is started.
 *
 * @returns {Element}
 * @constructor
 */
const MnemoResult = () => {

    const [accuracy, setAccuracy] = useState(0)

    const {appState,setAppState} = useContext(AppState)

    useEffect(() => {
        if (appState.trainingStatus === "Result") {
            setAccuracy(computeAccuracyInPerc(appState.actualBatch, appState.resultBatch))
        }

    }, [appState]);

    const formatDigit = (digit) => (digit < 10 ? `0${digit}` : digit);

    const hours = formatDigit(Math.floor(appState.clockCountSeconds / 3600));
    const minutes = formatDigit(Math.floor((appState.clockCountSeconds % 3600) / 60));
    const seconds = formatDigit(Math.floor(appState.clockCountSeconds % 60));

    const handleButtonClick = () => {
        setAppState((previous) => ({
            ...previous,
            clockCountSeconds: 0,
            actualStartTime: 0,

            actualChunkIndex: 0,

            actualBatch: [],
            resultBatch: [],

            trainingStatus: "Settings",
        }));
    }

    return (

        <div className={"text-white "}>
            <h3>Results from Training:</h3>
            <p>Accuracy: {accuracy} %</p>
            <p>Time used: {hours + "h : " + minutes + "min : " + seconds + "s "} </p>
            <br/>
            <button className={"text-center text-white text-xl p-3 bg-cyan-800 rounded-xl opacity-80"} onClick={handleButtonClick}>Restart</button>
        </div>
    )
}

export default MnemoResult


/**
 * Helperfunction to compute the accuracy for the results.
 * Will be replaced with more complex metrics and scores.
 *
 * @param actualBatch
 * @param resultBatch
 * @returns {number}
 */
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