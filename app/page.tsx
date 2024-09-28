"use client"; // This is required for client-side interaction in Next.js 13+

import { useState, useEffect } from 'react';

export default function Home() {
  const [response, setResponse] = useState<string>(''); // Define state with type

  useEffect(() => {
    // Adding Google Font dynamically
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleYesClick = (): void => {
    // Open Instagram in a new window or app if on mobile
    if (typeof window !== 'undefined') {
      window.open('https://www.instagram.com', '_blank');
    }
  };

  const handleNoClick = (): void => {
    // Display a message when "No" is clicked
    setResponse('Ah schade, aber einen schönen Tag dir!');
  };

  return (
      <div style={styles.container}>
        <h1 style={styles.text}>Hi! Ich finde dich süß, hast du Lust mal einen Cafe zu trinken? :)</h1>
        <div style={styles.buttons}>
          <button onClick={handleYesClick} style={styles.button}>Ja</button>
          <button onClick={handleNoClick} style={styles.button}>Nein</button>
        </div>
        {response && <p style={styles.response}>{response}</p>}
      </div>
  );
}

// Define the styles object
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column', // TypeScript-specific type assertion
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    height: '100vh',
    backgroundColor: '#FF0000', // Red background color
    textAlign: 'center' as 'center',
    fontFamily: "'Roboto', sans-serif", // Apply Roboto font
    color: 'white', // Text color is white
    padding: '20px',
  },
  text: {
    fontSize: '24px',
    fontWeight: '700' as '700', // Make the text bold
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center' as 'center',
    marginTop: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: '700' as '700',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'white', // Buttons with white background
    color: 'red', // Button text color red
    borderRadius: '5px',
  },
  response: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: '400' as '400',
  },
};
