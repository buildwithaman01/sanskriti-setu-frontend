// src/components/shared/VedicBotWidget.jsx
import React, { useState, useEffect } from "react";
import VedicBotButton from "./VedicBotButton";

import botIcon from "../../assets/vedicchatbot/bot.svg";
import closeIcon from "../../assets/vedicchatbot/close.svg";

export default function VedicBotWidget({ isWelcome }) {
  const [showInitial, setShowInitial] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [introShown, setIntroShown] = useState(false);

  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Namaste! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!isWelcome) {
      const timer = setTimeout(() => setShowInitial(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isWelcome]);

  const handleOpenWidget = () => {
    setShowWidget(true);
    setShowInitial(false);
    setShowButton(false);
    if (introShown) setChatStarted(true);
  };

  const handleCloseWidget = () => {
    setShowWidget(false);
    setShowButton(true);
    setChatStarted(true);
    setIntroShown(true);
  };

  const handleCloseInitial = () => {
    setShowInitial(false);
    setShowButton(true);
  };

  const handleStartChat = () => {
    setChatStarted(true);
    setIntroShown(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `You asked: "${input}", but I’m still learning 🤖` },
      ]);
    }, 500);
    setInput("");
  };

  return (
    <>
      {/* Initial Bot Popup */}
      {showInitial && (
        <>
          <img
            src={botIcon}
            alt="VedicBot"
            onClick={handleOpenWidget}
            className="fixed bottom-0 right-0 z-50 w-40 h-20 cursor-pointer"
          />
          <img
            src={closeIcon}
            alt="Close"
            onClick={handleCloseInitial}
            className="fixed z-50 w-20 h-20 cursor-pointer"
            style={{ bottom: "80px", right: "90px" }}
          />
          <div className="fixed z-50 px-3 py-2 text-sm text-gray-800 bg-white rounded shadow"
               style={{ bottom: "10px", right: "100px" }}>
            Can I help you?
          </div>
        </>
      )}

      {/* Full Chat Widget */}
      {showWidget && (
        <div className="fixed z-50 flex flex-col overflow-hidden shadow-lg bottom-4 right-4 w-80 bg-amber-100 rounded-xl">
          <button
            onClick={handleCloseWidget}
            className="absolute w-8 h-8 -top-3 right-3"
          >
            <img src={closeIcon} alt="Close" />
          </button>

          {!chatStarted ? (
            <div className="flex flex-col items-center p-4 space-y-2">
              <img src={botIcon} alt="VedicBot" className="w-40 h-40" />
              <p className="text-sm font-medium text-center">Hi! This is your VedicBot.</p>
              <button
                onClick={handleStartChat}
                className="bg-[#E55A43] text-white px-4 py-2 rounded font-semibold"
              >
                Start Chat
              </button>
            </div>
          ) : (
            <div className="flex flex-col h-80">
              <div className="flex-1 p-3 space-y-2 overflow-y-auto bg-gray-50">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                      msg.sender === "user"
                        ? "self-end bg-[#E55A43] text-white"
                        : "self-start bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <form
                onSubmit={handleSendMessage}
                className="flex items-center p-2 space-x-2 border-t"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-1 text-sm border rounded-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#E55A43] text-white px-3 py-1 rounded-lg text-sm font-semibold"
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Floating Button */}
      {showButton && !isWelcome && <VedicBotButton onClick={handleOpenWidget} />}
    </>
  );
}
