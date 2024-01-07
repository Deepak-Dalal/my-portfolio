import React, { useState, useEffect } from 'react';
import './App.css';

export function TypingAnimation() {
  const [text, setText] = useState('');


  useEffect(() => {
    let intervalId;

    const typeAndEraseText = async () => {
      // Type the text
      const words = 'Deepak Dalal';
      for (let i = 0; i <= words.length; i++) {
        setText(words.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100)); // Typing speed
      }

      // Wait for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Erase the text
      for (let i = words.length; i >= 0; i--) {
        setText(words.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100)); // Erasing speed
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Repeat the animation
      typeAndEraseText();
    };

    typeAndEraseText();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="typing-animation">
      <b>{text}</b>
      <span className="blinking-underscore">_</span>
    </div>
  );
}
