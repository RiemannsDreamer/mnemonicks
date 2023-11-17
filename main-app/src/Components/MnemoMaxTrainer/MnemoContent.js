
import React, {useCallback, useContext} from "react";
import "../../Styles/MainSites/MnemoMax/MnemoContent.css";

import {ClockCountSeconds} from "../MainSites/MainMenu/MnemoContexts";

const MnemoContent = () => {

    const {timeInSeconds,setTimeInSeconds} = useContext(ClockCountSeconds);
    console.log('timeInSeconds:', timeInSeconds);

    return (

        <div className="mnemo-content-container">
            <div className={"mnemo-info-box"}>
                <div className="mnemo-chunk-box">
                    <p style={{color: "red"}}>{timeInSeconds}</p>
                </div>
            </div>

        </div>
    );
}

export default MnemoContent;
