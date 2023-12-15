import React, {useState, useEffect, useRef} from "react";
import MnemoMenu from "../../MnemoMaxTrainer/MnemoMenu";
import MnemoProgressBar from "../../MnemoMaxTrainer/MnemoProgressBar";
import MnemoClock from "../../MnemoMaxTrainer/MnemoClock";
import MnemoContent from "../../MnemoMaxTrainer/MnemoContent";
import MnemoControlPanel from "../../MnemoMaxTrainer/MnemoControlPanel";

import {AppState} from "./MnemoContexts";

/**
 * Main App Component, this is the MnemoMax app.
 * With this app the user can train his / her mnemonic skills.
 * Different types of information and systems are provided.
 * there is text and visual information.
 * This is a prototype only. (actually).
 *
 * @returns {Element}
 * @constructor
 */
export default function MnemoMax() {


    const menuData = [
        {title: "Numbers", items: ["Random Decimal", "Random Binary", "Special"]},
        {title: "Cards", items: ["52er", "36er", "32er"]},
        {title: "Names & Faces", items: ["Random", "Text", "Images"]},
        {title: "Alphabets", items: ["Tiere", "Gemüse", "Fahrzeuge", "Werkzeuge", "Sportarten"]},
        {title: "Routes", items: ["Text", "Image", "?"]},
        {title: "Rooms", items: ["Random", "Thematic", "Mind Palaces"]},
        {title: "Systems", items: ["PAO", "Major", "Dominic"]},
        {title: "Settings", items: ["Load File", "Save", "Styles"]}
    ];

    const [appState, setAppState] = useState({
        trainingType: "Numbers",
        trainingStatus: "Settings",

        clockCountSeconds: 0,
        actualStartTime: 0,

        batchSize: 10,
        chunkSize: 2,
        actualChunkIndex: 0,

        actualBatch: [],
        resultBatch: [],

    })

    return (
        <AppState.Provider value={{appState, setAppState}}>
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
        </AppState.Provider>
    );
}
