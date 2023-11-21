import React, { useState } from "react";

const RecursiveDropdown = ({ menuData, isOpen, handleToggleClick }) => {
    return (
        <div className="relative inline-block text-center">
            <div
                className=" text-white p-4 rounded-2xl hover:bg-gradient-to-tr from-cyan-400 to-cyan-800 hover:opacity-70 cursor-pointer"
                onClick={handleToggleClick}
            >
                {menuData.title}
            </div>
            {isOpen && menuData.items && (
                <div
                    className="text-white absolute right-0 mt-2 p-4 rounded-2xl bg-gradient-to-tr from-cyan-400 to-cyan-800 shadow-lg"
                >
                    {menuData.items.map((item, index) => (
                        <div
                            key={index}
                            className=" text-white p-2 rounded-2xl hover:bg-gradient-to-tr from-cyan-400 to-cyan-800 hover:opacity-70 cursor-pointer"
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