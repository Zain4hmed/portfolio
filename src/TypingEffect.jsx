import React, { useEffect, useState } from 'react';
import './TypingEffect.css'; // Create this CSS file for cursor styles

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true); // State to manage typing

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false); // Stop typing after the text is fully displayed
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      {isTyping && <span className="blinking-cursor">|</span>}
    </span>
  );
};

export default TypingEffect;
