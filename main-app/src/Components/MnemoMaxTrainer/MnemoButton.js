
import React, { useState } from "react";
import "../../Styles/MainSites/MnemoMax/MnemoButton.css";

const MnemoButton = ({ title, onClick }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        onClick && onClick();
    };

    return (
        <div className={"mnemo-button-container"}>
            <div className={"mnemo-button"} onClick={handleClick}>
                {title}
            </div>
            {/*{}clicked && <p>Button wurde geklickt!</p>}*/}
        </div>
    );
};

export default MnemoButton;