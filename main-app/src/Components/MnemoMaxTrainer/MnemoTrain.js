import React, {useContext, useEffect, useState} from "react";
import {AppState} from "../MainSites/MainMenuHeader/MnemoContexts";


/**
 * Training content, used to train numbers at the moment.
 * When the app is in trainingStatus=Train, this component is displayed.
 * The single chunks are provided here to learn.
 * The user can use "previous" and "next" buttons to navigate forwards and backwards through the batch.
 * When the batch is finished, "END" is displayed. This is a chunk contained in the actualBatch array. (Workaround...)
 * //TODO: Should not mix batch content with strings / "END".
 *
 * @returns {Element}
 * @constructor
 */
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