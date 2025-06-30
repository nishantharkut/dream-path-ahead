
import React, { useEffect, useState } from 'react';

const TypedText = () => {
  const words = ['DREAMS', 'GUIDANCE', 'MENTORSHIP', 'OPPORTUNITIES', 'SUCCESS'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <span className="relative inline-block">
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
        {displayText}
      </span>
      <span className="animate-pulse text-blue-600 dark:text-blue-400 ml-1">|</span>
    </span>
  );
};

export default TypedText;
