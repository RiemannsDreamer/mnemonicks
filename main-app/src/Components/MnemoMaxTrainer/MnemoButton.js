import React, {useState} from "react";


/**
 * Simple Button used in other Conmponents.
 * Will be refactored later and div will be replaced with <button>.
 *
 * @param title
 * @param onClick
 * @returns {Element}
 * @constructor
 */
const MnemoButton = ({ title, onClick }) => {

   let [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        setTimeout(() => {
            setIsClicked(false);
        }, 300);
    };


    return (
        <div onClick={onClick} className={"text-white"} >
            <div onClick={handleClick}  className={isClicked ? "text-center p-4 rounded-2xl bg-gradient-to-tr from-cyan-700 to-cyan-900 hover:opacity-70" : "text-center p-4 rounded-2xl hover:bg-gradient-to-tr from-cyan-600 to-cyan-800 hover:opacity-70"}>
                {title}
            </div>
        </div>
    );
};

export default MnemoButton;
