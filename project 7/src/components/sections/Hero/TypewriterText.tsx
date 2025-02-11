import React, { useEffect, useState } from 'react';

const phrases = [
  "Mehdi Khatiri",
  "a Frontend Developer",
  "a UI/UX Designer",
  "a Problem Solver"
];

export default function TypewriterText() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
          setTypingSpeed(150);
        } else {
          setIsDeleting(true);
          setTypingSpeed(100);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.slice(0, text.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(200);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}