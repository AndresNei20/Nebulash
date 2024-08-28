import { useState } from "react";
import Card from "./Card";
import { misionesEstelares, misionesEspeciales } from "../Data/misiones";

function shuffle(deck) {
  return deck.sort(() => Math.random() - 0.5);
}

export function Deck() {
    const [deckEsteral, setDeckEsteral] = useState(shuffle(misionesEstelares));
    const [deckEspecial, setDeckEspecial] = useState(shuffle(misionesEspeciales));
    const [currentIndex, setCurrentIndex] = useState(0);

  function handleCardClick(deck) {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deck.length);
  }

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory">
      <div className="flex flex-none w-full snap-center">
        <Card
          card={deckEsteral[currentIndex]}
          type='estelares'
          onClick={() => handleCardClick(deckEsteral)}
        />
      </div>
      <div className="flex flex-none w-full snap-center">
        <Card
          card={deckEspecial[currentIndex]}
          type='especiales'
          onClick={() => handleCardClick(deckEspecial)}
        />
      </div>
    </div>
  );
}