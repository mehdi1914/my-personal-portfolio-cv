import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  loop?: boolean;
  delayBetweenWords?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
}

export default function useTypewriter({
  words,
  loop = true,
  delayBetweenWords = 2000,
  typingSpeed = 150,
  deletingSpeed = 100,
}: UseTypewriterProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setIsDeleting(true);
          setTimeout(() => {}, delayBetweenWords);
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          if (!loop && wordIndex === words.length - 1) {
            return;
          }
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, loop, delayBetweenWords, typingSpeed, deletingSpeed]);

  return text;
}