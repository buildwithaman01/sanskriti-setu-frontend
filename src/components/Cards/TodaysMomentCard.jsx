import React, { useState, useEffect } from "react";
import durgaEyes from "../../assets/cards/TodaysMoment/durga_eyes.svg";
import timerIcon from "../../assets/cards/TodaysMoment/timer_icon.svg";
import durgaPujaData from "../../data/durgaPuja.json";
import Modal from "../Heritage/Modal";

const TodaysMomentCard = () => {
  const [time, setTime] = useState("23:59:54");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev); // placeholder static
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="relative w-[300px] h-[250px] p-6 text-center flex flex-col justify-between transition-transform duration-500 shadow-lg bg-[#EBCB7B]/80 backdrop-blur-md rounded-xl hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      >
        {/* Top: Heading */}
        <div>
          <h2 className="text-xl font-semibold text-[#333333] mb-2">
            Today's Cultural Moment
          </h2>
          <p className="mb-4 text-sm text-gray-700">Durga Puja</p>
        </div>

        {/* Middle: Countdown & Image */}
        <div>
          <p className="text-3xl font-mono text-[#333333] mb-4">{time}</p>
          <img
            src={durgaEyes}
            alt="Durga Eyes"
            className="w-24 h-24 mx-auto transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Bottom: Timer Icon */}
        <img
          src={timerIcon}
          alt="Timer Icon"
          className="absolute w-8 h-8 bottom-2 right-2"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          ariaLabel={durgaPujaData.festival_name}
        >
          <h2 className="mb-2 text-2xl font-bold">
            {durgaPujaData.festival_name}
          </h2>
          <p className="mb-4 italic">{durgaPujaData.tagline}</p>
          <p className="mb-4 whitespace-pre-line">
            {durgaPujaData.description}
          </p>

          {durgaPujaData.explore_more_link && (
            <a
              href={durgaPujaData.explore_more_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Explore More
            </a>
          )}
        </Modal>
      )}
    </>
  );
};

export default TodaysMomentCard;
