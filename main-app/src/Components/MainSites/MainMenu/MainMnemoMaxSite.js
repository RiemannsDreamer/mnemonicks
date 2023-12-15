import React from "react";
import {useEffect, useState} from "react"


import MnemoMax from "./MnemoMax";


/**
 * Container for the whole mnemomax app. One main Component of the website.
 *
 * @returns {Element}
 * @constructor
 */
const MainMnemoMaxSite = () => {
    const scrollToContent = () => {

        const headerHeight = document.getElementById("header").clientHeight;


        window.scrollTo({
            top: headerHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToContent();
    }, []);

    return (
        <div className={"my-auto"}>
            <MnemoMax />
        </div>
    );
};

export default MainMnemoMaxSite