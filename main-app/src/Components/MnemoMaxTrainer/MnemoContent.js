// MnemoContent.js
import React, {useCallback, useContext} from "react";
import "../../Styles/MainSites/MnemoMax/MnemoContent.css";

import {ClockCountSeconds} from "../MainSites/MainMenu/MnemoContexts";

const MnemoContent = () => {

    const { timeInSeconds } = useContext(ClockCountSeconds);

    return (
        <div className="mnemo-content-container">
            <div className={"mnemo-info-box"}>
                <div className="mnemo-chunk-box">
                    <p>{timeInSeconds}</p>
                    {/* Hier könnten die aktuellen Informationen angezeigt werden */}
                </div>
            </div>

        </div>
    );
}

export default MnemoContent;
