import React, { useContext ,useState} from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoButton.css";
import { LearningIsRunningContext } from "../MainSites/MainMenu/MnemoContexts";

const MnemoButton = ({ title, onClick }) => {

   let [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        // Setze den Button nach einer kurzen Zeit zurück
        setTimeout(() => {
            setIsClicked(false);
        }, 300); // Hier kannst du die Dauer in Millisekunden anpassen
    };

    const { isLearningRunning,setIsLearningRunning } = useContext(LearningIsRunningContext);


    return (
        <div onClick={onClick} className={"text-white"} >
            <div onClick={handleClick}  className={isClicked ? "text-center p-4 rounded-2xl bg-gradient-to-tr from-cyan-700 to-cyan-900 hover:opacity-70" : "text-center p-4 rounded-2xl hover:bg-gradient-to-tr from-cyan-600 to-cyan-800 hover:opacity-70"}>
                {title}
            </div>
        </div>
    );
};

export default MnemoButton;
