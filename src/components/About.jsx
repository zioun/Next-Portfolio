import React, { useState } from 'react';

export default function About() {
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [reading, setReading] = useState(false);
  const text = "As a front-end developer, I’m creating dynamic and responsive web experiences with HTML, CSS, Tailwind CSS, JavaScript, and React. My back-end skills include Node.js, Express.js, and MongoDB, along with strong version control expertise in Git and GitHub. Proficient in responsive design, RESTful APIs, and Firebase authentication, I deliver high-quality, innovative web solutions tailored to project needs. With expertise in Shopify theme development and as a CMS, I’m also capable of building customized e-commerce solutions.";

  const words = text.split(' ');

  const readTextAloud = () => {
    if (!reading) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US';

      speech.onboundary = (event) => {
        const charIndex = event.charIndex;
        let wordCount = 0;
        let countChars = 0;

        for (let i = 0; i < words.length; i++) {
          countChars += words[i].length + 1;
          if (charIndex < countChars) {
            wordCount = i;
            break;
          }
        }

        setHighlightIndex(wordCount);
      };

      speech.onend = () => {
        setHighlightIndex(null);
        setReading(false);
      };

      window.speechSynthesis.speak(speech);
      setReading(true);
    }
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
    setHighlightIndex(null);
    setReading(false);
  };

  return (
    <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[#0c382a] text-white rounded-lg p-5 border border-[#0D3026] relative">
      <div className="z-10">
        <h1 className="text-[20px] flex items-center gap-3 text-[#0CC880] font-semibold">
          About Me
          <span className="hidden lg:block flex gap-2">
            {/* First icon triggers stop, second icon triggers start */}
            {reading ? (
              // Stop Reading Icon
              <svg onClick={stopReading} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            ) : (
              // Start Reading Icon
              <svg onClick={readTextAloud} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            )}
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
