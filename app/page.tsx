'use client'; // Required for client-side interactivity

import React, { useState, useEffect } from "react";

export default function Home() {
    const [message, setMessage] = useState("");
    const [showButtons, setShowButtons] = useState(true);
    const [yesLabel, setYesLabel] = useState("Ja"); // Default to German
    const [noLabel, setNoLabel] = useState("Nein"); // Default to German
    const [name, setName] = useState(""); // For the user's name

    useEffect(() => {
        // Function to get the name from the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const nameFromUrl = urlParams.get('name') || urlParams.get('Lidia'); // Accept ?name=Lidia or ?Lidia

        // Check if name already exists in localStorage (this will be the cached first name)
        const savedName = localStorage.getItem('name');

        // If a name exists in localStorage, use that; otherwise, use the name from the URL
        if (savedName) {
            setName(savedName); // Set the cached name
        } else if (nameFromUrl) {
            // Save the first name into localStorage and use it
            localStorage.setItem('name', nameFromUrl);
            setName(nameFromUrl);
        }

        // Detect the browser's language
        const language = navigator.language;


        // Check if the browser language is German
        if (language.startsWith("de")) {
            setMessage(
                `Hey ${savedName || nameFromUrl || 'du'}? :)<br />Ich finde dich echt süß und dachte,<br />vielleicht könnten wir mal zusammen einen Kaffee trinken!<br />` +
                "Diesen Samstag 15 Uhr dann im Café May? :) <br /> - Tim"
            );
            setYesLabel("Ja");
            setNoLabel("Nein");
        } else {
            // Default to English
            setMessage(
                `Hey ${savedName || nameFromUrl || 'there'} :)<br />I think you're really cute and was wondering,<br />if you'd like to grab a coffee with me!<br />` +
                "How about this Saturday at 3 PM at Café May? :) – Tim"
            );
            setYesLabel("Yes");
            setNoLabel("No");
        }
    }, []); // Only run once on component mount

    const handleYesClick = () => {
        const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = "instagram://user?username=takeyourtim.e";
            setTimeout(() => {
                window.location.href = "https://www.instagram.com/takeyourtim.e/";
            }, 1500);
        } else {
            window.location.href = "https://www.instagram.com/takeyourtim.e/";
        }

        setShowButtons(false);
    };

    const handleNoClick = () => {
        if (navigator.language.startsWith("de")) {
            setMessage(`Alles gut! Vielleicht ein andermal :)<br />Ich wünsche dir auf jeden Fall noch einen großartigen Tag!`);
        } else {
            setMessage(`No worries! Maybe another time :)<br />Wishing you an awesome day regardless!`);
        }
        setShowButtons(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{ backgroundColor: "#ff4d4d" }}>
            <h1
                className="text-3xl font-bold mb-8 text-center text-white"
                dangerouslySetInnerHTML={{ __html: message }}
            >
                {/* Render message with inner HTML */}
            </h1>

            {showButtons && (
                <div className="flex space-x-8">
                    <button
                        onClick={handleYesClick}
                        className="px-8 py-3 bg-white text-[#ff4d4d] font-semibold rounded-lg border-2 border-white hover:bg-gray-100 transition-all"
                    >
                        {yesLabel}
                    </button>

                    <button
                        onClick={handleNoClick}
                        className="px-8 py-3 bg-[#ff4d4d] text-white font-semibold rounded-lg border-2 border-white hover:bg-red-600 hover:border-gray-300 transition-all"
                    >
                        {noLabel}
                    </button>
                </div>
            )}
        </div>
    );
}
