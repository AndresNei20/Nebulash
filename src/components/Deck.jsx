import { useState } from "react";
import Card from "./Card";

const challenges = ['Comer', 'bailar', 'jugar', 'correr'];

function shuffle(deck) {
  return deck.sort(() => Math.random() - 0.5);
}

export function Deck() {
    const [deck, setDeck] = useState(shuffle(challenges));
    const [currentIndex, setCurrentIndex] = useState(0);

  function handleCardClick() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deck.length);
  }

  return (
    <div className="deck">
      <Card
        value={deck[currentIndex]}
        onClick={handleCardClick}
      />
    </div>
  );
}