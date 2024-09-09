import { useState, useEffect } from "react";

const Popup = ({ isOpen, onClose, question, hint, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAnswer(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 left-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-300 flex flex-col self-center scale-100 hover:scale-105 w-full mx-20">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition"
        >
          ×
        </button>
        <div className="text-lg font-semibold mb-4">{question}</div>
        <div className="text-sm mb-4 text-gray-700">{hint}</div>
        <button
          onClick={handleToggleAnswer}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {showAnswer ? "Ocultar Respuesta" : "Mostrar Respuesta"}
        </button>
        {showAnswer && (
          <div className="mt-4 p-4 border-t border-gray-300">
            <strong>Respuesta:</strong> {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
