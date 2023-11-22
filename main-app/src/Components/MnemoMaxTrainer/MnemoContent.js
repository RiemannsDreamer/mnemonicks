import React, {useCallback, useContext} from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoContent.css";

import {ActualBatch, ActualChunkIndex, ClockCountSeconds} from "../MainSites/MainMenu/MnemoContexts";

const MnemoContent = () => {

    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);
    const {actualBatch,setActualBatch} = useContext(ActualBatch)
    const {actualChunkIndex,setActualChunkIndex} = useContext(ActualChunkIndex)


    return (

        <div className="w-full h-5/6 bg-gradient-to-tr from-cyan-500 to-cyan-900 rounded-2xl m-4 text-center flex items-center justify-center">
            <p className={"text-center text-white text-5xl"}>{actualBatch[actualChunkIndex]}</p>
        </div>
    );
}

export default MnemoContent;
