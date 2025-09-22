import React, { useState } from "react";
import durgaFace from "../../assets/cards/CulturalQuiz/durga_face.svg";
import quizIcon from "../../assets/cards/CulturalQuiz/quiz_icon.svg";
import Button from "../Buttons/Button";
import QuizModal from "../Modals/QuizModal";

const CulturalQuizCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-[300px] h-[250px] p-6 bg-[#EBCB7B]/80 backdrop-blur-md rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* Heading with quiz icon */}
        <div className="flex items-center gap-2 mb-2">
          <img src={quizIcon} alt="Quiz Icon" className="w-6 h-6" />
          <h2 className="text-xl font-semibold text-[#333333]">
            Cultural Quiz
          </h2>
        </div>

        <p className="mb-6 text-sm text-gray-700">
          Test your knowledge about Indian culture!
        </p>

        <div className="mb-6">
          <Button text="Take the Quiz" onClick={() => setIsModalOpen(true)} />
        </div>

        {/* Large Deity Face Icon */}
        <img
          src={durgaFace}
          alt="Durga Face"
          className="absolute w-24 h-24 bottom-2 right-2 opacity-80"
        />
      </div>

      {/* Quiz Modal */}
      <QuizModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CulturalQuizCard;
