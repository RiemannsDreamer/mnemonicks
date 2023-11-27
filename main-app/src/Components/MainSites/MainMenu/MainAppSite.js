import React from "react";
import {useEffect, useRef} from "react"


import MnemoMax from "./MnemoMax";



const MainAppSite = () => {
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

export default MainAppSite