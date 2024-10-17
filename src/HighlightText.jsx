import React, { useState, useEffect, useRef } from 'react';
import './HighlightText.css';

const HighlightText = ({ text, speed }) => {
  const [highlightIndex, setHighlightIndex] = useState(-1); // Track where to apply the highlight
  const textRef = useRef(null); // Reference to the text container

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setHighlightIndex(currentIndex); // Move the highlight forward
        currentIndex++;
      } else {
        clearInterval(intervalId); // Stop when done
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span className="highlight-wrapper">
      <span ref={textRef}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`highlight-char ${index <= highlightIndex ? 'highlighted' : ''}`}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

export default HighlightText;
