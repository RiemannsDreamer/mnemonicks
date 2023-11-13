// MnemoDropdown.js
import React, { useState } from "react";
import "../../Styles/MainSites/MnemoMax/MnemoDropdown.css";

const MnemoDropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="dropdown" onMouseLeave={handleMouseLeave}>
            <div className="dropdown-toggle" onClick={handleToggleClick}>
                {title}
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map((item, index) => (
                        <div key={index} className="dropdown-item">
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MnemoDropdown;
