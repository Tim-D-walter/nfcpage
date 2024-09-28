'use client'; // Necessary for event handling like button clicks

import React from "react";

export default function Home() {
    // Function for the "Ja" button, opening Instagram
    const handleYesClick = () => {
        window.location.href = "https://www.instagram.com"; // Opens Instagram on mobile or web
    };

    // Function for the "Nein" button, showing an alert message
    const handleNoClick = () => {
        alert("Ah schade, aber einen schönen Tag dir!");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{ backgroundColor: 'red' }}>
            <h1 className="text-2xl font-bold mb-6 text-center text-white">
                Hi! Ich finde dich süß, hast du Lust mal einen Cafe zu trinken? :)
            </h1>

            {/* Buttons for Yes and No */}
            <div className="flex space-x-4">
                <button
                    onClick={handleYesClick}
                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700"
                >
                    Ja
                </button>

                <button
                    onClick={handleNoClick}
                    className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700"
                >
                    Nein
                </button>
            </div>
        </div>
    );
}
