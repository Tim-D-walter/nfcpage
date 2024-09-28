'use client'; // Required for client-side interactivity

import React, { useState } from "react";

export default function Home() {
    // State to manage the displayed message
    const [message, setMessage] = useState(
        "Hey na du? Ich finde dich echt süß und dachte, vielleicht könnten wir mal zusammen einen Kaffee trinken! " +
        "Diesen Samstag 15 Uhr dann im Café May? :) – Tim"
    );

    // State to hide both buttons after either is clicked
    const [showButtons, setShowButtons] = useState(true);

    // Function for the "Ja" button, attempting to open Instagram or fall back to the web profile
    const handleYesClick = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Check if the user is on a mobile device
        const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

        if (isMobile) {
            // Attempt to open the Instagram app
            window.location.href = "instagram://user?username=takeyourtim.e";

            // Fallback to Instagram web profile after a short delay if the app is not installed
            setTimeout(() => {
                window.location.href = "https://www.instagram.com/takeyourtim.e/";
            }, 1500); // Delay to allow the app to open
        } else {
            // Directly navigate to the Instagram web profile on non-mobile devices
            window.location.href = "https://www.instagram.com/takeyourtim.e/";
        }

        setShowButtons(false); // Hide buttons after clicking "Ja"
    };

    // Function for the "Nein" button, updating the message and hiding buttons
    const handleNoClick = () => {
        setMessage("Alles gut! Vielleicht ein andermal :) Ich wünsche dir auf jeden Fall noch einen großartigen Tag!");
        setShowButtons(false); // Hide buttons after clicking "Nein"
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
                        className="px-8 py-3 bg-white text-[#ff4d4d] font-semibold rounded-lg border-2 border-white hover:bg-gray-100 transition-all"
                    >
                        Ja
                    </button>

                    <button
                        onClick={handleNoClick}
                        className="px-8 py-3 bg-[#ff4d4d] text-white font-semibold rounded-lg border-2 border-white hover:bg-red-600 hover:border-gray-300 transition-all"
                    >
                        Nein
                    </button>
                </div>
            )}
        </div>
    );
}
