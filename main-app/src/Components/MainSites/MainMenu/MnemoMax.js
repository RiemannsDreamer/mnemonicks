import React from "react";

import "../../../Styles/MainSites/MnemoMax/MnemoMax.css"

import MnemoMenu from "../../MnemoMaxTrainer/MnemoMenu";

import MnemoProgressBar from "../../MnemoMaxTrainer/MnemoProgressBar";

import MnemoClock from "../../MnemoMaxTrainer/MnemoClock";
import MnemoContent from "../../MnemoMaxTrainer/MnemoContent";
import MnemoControlPanel from "../../MnemoMaxTrainer/MnemoControlPanel";
export default function MnemoMax(){


    return (
        <div className={"mnemo-max-container"}>
            <div className={"mnemo-menu-container"}>
                <MnemoMenu/>
            </div>
            <div className={"mnemo-main-content-container"}>
                <MnemoProgressBar/>
                <div className={"mnemo-app-container"}>
                    <MnemoClock/>
                    <MnemoContent/>
                    <MnemoControlPanel/>
                </div>
            </div>
        </div>
    )
}