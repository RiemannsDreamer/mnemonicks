import React, {useContext, useEffect} from "react";
import {useState} from "react";

import { AppState} from "../MainSites/MainMenu/MnemoContexts";


const MnemoTest = () => {

    const {appState, setAppState} = useContext(AppState)

    const [eingaben, setEingaben] = useState(Array(appState.actualBatch.length).fill(''));


    const handleInputChange = (index, value) => {
        const neueEingaben = [...eingaben];
        neueEingaben[index] = value;
        setEingaben(neueEingaben);
    };

    const pruefeEingabe = () => {

        setAppState((previous) => ({
            ...previous,
            resultBatch: eingaben,
            trainingStatus: "Result",
        }));
    };

    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (appState.trainingStatus === "Test" && countdown > 0) {
            const countdownInterval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            return () => {
                clearInterval(countdownInterval);
            };
        } else if (!(appState.trainingStatus) === "Test") {
            setCountdown(5);
        }
    }, [countdown, appState]);

    return (

        <div>
            {countdown > 0 && (
                <p className={"text-center text-white text-7xl"}>
                    {countdown}
                </p>
            )}
            {countdown === 0 && (
                <div className={"w-5/6 h-4/6"}>

                    <div className="max-h-50 h-40 w-full grid grid-cols-10 gap-3 overflow-scroll    ">
                        {appState.actualBatch.map((number, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    className="w-10 h-10 border border-solid border-white opacity-80 bg-gradient-to-br from-cyan-500 to-cyan-700 text-center"
                                    value={eingaben[index]}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>


                    <button onClick={pruefeEingabe} className={"w-20 h-10 bg-gradient-to-tr from-cyan-400 to-cyan-800 rounded-2xl m-5"}>Check</button>
                </div>
            )}
        </div>


    )
}

export default MnemoTest


