import { useState } from "react";
import Popup from "./Popup";
import { preguntasEstelares } from "../Data/preguntas";

export const Trivia = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleOpenPopup = () => {
    const randomIndex = Math.floor(Math.random() * preguntasEstelares.length);
    setCurrentQuestion(preguntasEstelares[randomIndex]);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCurrentQuestion(null);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleOpenPopup}
        className="bg-emerald-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
      >
        Abrir Trivia
      </button>
      {currentQuestion && (
        <Popup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          question={currentQuestion.pregunta}
          hint={currentQuestion.pista}
          answer={currentQuestion.respuesta}
        />
      )}
    </div>
  );
};
