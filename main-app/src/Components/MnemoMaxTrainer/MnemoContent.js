import React, {useContext} from "react";



import {AppState} from "../MainSites/MainMenuHeader/MnemoContexts";

import MnemoTest from "./MnemoTest";
import MnemoResult from "./MnemoResult";
import MnemoTrain from "./MnemoTrain";
import MnemoSettings from "./MnemoSettings";

/**
 * Wrapper component for different content types.
 * Dynamic rendering due to app State.
 * Displays the different stages of a training session depending on appState.
 *
 * @returns {Element}
 * @constructor
 */
const MnemoContent = () => {

    const {appState,setAppState} = useContext(AppState)

    return (
        <div className="max-h-5/6 w-full h-5/6 bg-gradient-to-tr from-cyan-500 to-cyan-900 rounded-2xl m-4 text-center  flex items-center justify-center">

            {appState.trainingStatus === "DefaultMessage" && <strong className={"text-white text-4xl"}>Press button to start.</strong>}

            {appState.trainingStatus === "Settings" && <MnemoSettings/>}

            {appState.trainingStatus === "Train" && <MnemoTrain/>}
            {appState.trainingStatus === "Pause" && <p className={"text-center text-white text-4xl"}>PAUSE...</p>}
            {appState.trainingStatus === "Test" && <MnemoTest />}
            {appState.trainingStatus === "Result" && <MnemoResult/>}

        </div>
    );
}

export default MnemoContent;
