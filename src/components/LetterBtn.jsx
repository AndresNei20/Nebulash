import { useState } from 'react';

export default function LetterBtn() {
  const [letter, setLetter] = useState('A');

  const getRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  const handleClick = () => {
    const newLetter = getRandomLetter();
    setLetter(newLetter);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-800 text-white text-4xl p-4 rounded-full shadow-lg"
      style={{ width: '80px', height: '80px' }}
    >
      {letter}
    </button>
  );
}