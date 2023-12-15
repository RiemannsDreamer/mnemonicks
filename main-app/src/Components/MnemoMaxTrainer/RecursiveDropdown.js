import React, { useState } from "react";

const RecursiveDropdown = ({ menuData }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-40 relative z-10 inline-block text-center">
            <div
                className="relative z-10 w-40 text-white p-4 rounded-2xl hover:bg-gradient-to-tr from-cyan-400 to-cyan-800 hover:opacity-70 cursor-pointer"
                onClick={handleToggleClick}
            >
                {menuData.title}
            </div>
            {isOpen && menuData.items && (
                <div
                    className="w-40 text-white absolute right-0 mt-2 p-4 rounded-2xl bg-gradient-to-tr from-cyan-400 to-cyan-800 shadow-lg"
                >
                    {menuData.items.map((item, index) => (
                        <div
                            key={index}
                            className="text-white p-2 rounded-2xl hover:bg-gradient-to-tr from-cyan-700 to-cyan-900 hover:opacity-70 cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default RecursiveDropdown