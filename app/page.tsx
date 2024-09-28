'use client'; // Required for client-side interactivity

import React, { useState } from "react";

export default function Home() {
    // State to manage the displayed message
    const [message, setMessage] = useState(
        "Hi! Ich finde dich süß, hast du Lust mal einen Cafe zu trinken? :)"
    );

    // State to hide both buttons after either is clicked
    const [showButtons, setShowButtons] = useState(true);

    // Function for the "Ja" button, opening Instagram and hiding buttons
    const handleYesClick = () => {
        window.location.href = "https://www.instagram.com"; // Opens Instagram on mobile or web
        setShowButtons(false); // Hide buttons after "Ja" is clicked
    };

    // Function for the "Nein" button, updating the message and hiding buttons
    const handleNoClick = () => {
        setMessage("Ah schade, aber einen schönen Tag dir!");
        setShowButtons(false); // Hide buttons after "Nein" is clicked
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{ backgroundColor: "#ff4d4d" }}>
            <h1 className="text-3xl font-bold mb-8 text-center text-white">
                {message}
            </h1>

            {/* Conditionally render the buttons */}
            {showButtons && (
                <div className="flex space-x-8">
                    <button
                        onClick={handleYesClick}
                        className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg border-2 border-white hover:bg-green-600 hover:border-gray-300 transition-all"
                    >
                        Ja
                    </button>

                    <button
                        onClick={handleNoClick}
                        className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg border-2 border-white hover:bg-red-600 hover:border-gray-300 transition-all"
                    >
                        Nein
                    </button>
                </div>
            )}
        </div>
    );
}
