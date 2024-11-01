import React, { useState, useEffect } from 'react';

export default function About() {
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const text = "As a front-end developer, I’m creating dynamic and responsive web experiences with HTML, CSS, Tailwind CSS, JavaScript, and React. My back-end skills include Node.js, Express.js, and MongoDB, along with strong version control expertise in Git and GitHub. Proficient in responsive design, RESTful APIs, and Firebase authentication, I deliver high-quality, innovative web solutions tailored to project needs. With expertise in Shopify theme development and as a CMS, I’m also capable of building customized e-commerce solutions.";

  // Split text into words to control the highlighting of each word
  const words = text.split(' ');

  // Function to read the text aloud with simulated word-by-word highlighting
  const readTextAloud = () => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';

    // Track the index of the current word and set up an interval to update it
    let wordIndex = 0;
    const wordsPerMinute = 180; // Adjust speed as needed
    const wordInterval = (60 / wordsPerMinute) * 1000;

    setIsSpeaking(true);
    window.speechSynthesis.speak(speech);

    const interval = setInterval(() => {
      if (wordIndex < words.length) {
        setHighlightIndex(wordIndex);
        wordIndex++;
      } else {
        clearInterval(interval);
        setIsSpeaking(false);
        setHighlightIndex(null); // Reset highlighting after reading is complete
      }
    }, wordInterval);

    // Clean up interval and stop speaking on component unmount
    speech.onend = () => {
      clearInterval(interval);
      setIsSpeaking(false);
      setHighlightIndex(null);
    };
  };

  return (
    <div
      className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[#0c382a] text-white rounded-lg p-5 border border-[#0D3026] relative"
      onClick={() => !isSpeaking && readTextAloud()} // Trigger readTextAloud on click only if not already speaking
      style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
    >
      <div className="z-10">
        <h1 className="text-[20px] flex items-center gap-3 text-[#0CC880] font-semibold">
          About Me{' '}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          </span>
        </h1>
        <p className="text-[16px] text-[#CFCFCF] mt-3 text-justify">
          {words.map((word, index) => (
            <span
              key={index}
              className={highlightIndex === index ? 'text-[#0CC880]' : 'text-[#CFCFCF]'}
            >
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
