import React, {useCallback, useContext} from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoContent.css";

import {ClockCountSeconds} from "../MainSites/MainMenu/MnemoContexts";

const MnemoContent = () => {

    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);


    return (

        <div className="w-full h-5/6 bg-gradient-to-tr from-cyan-500 to-cyan-900 rounded-2xl m-4 text-center flex items-center justify-center">
            <p className={"text-center text-red-600 text-4xl"}>{timeInSeconds}</p>
        </div>
    );
}

export default MnemoContent;
