import React, {useContext, useEffect, useState} from "react";
import {
AppState

} from "../MainSites/MainMenuHeader/MnemoContexts";





const MnemoTrain = () => {

    const {appState,setAppState} = useContext(AppState)

    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if ((appState.trainingStatus === "Train") && countdown > 0) {
            const countdownInterval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            return () => {
                clearInterval(countdownInterval);
            };
        } else if (!(appState.trainingStatus === "Train")) {
            setCountdown(4);
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
                <p className={"text-center text-white text-4xl"}>
                    {appState.actualBatch[appState.actualChunkIndex]}
                </p>
            )}
        </div>
    )
}

export default MnemoTrain