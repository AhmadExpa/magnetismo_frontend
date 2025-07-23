// components/GlobalChatBot.jsx
import React, { useState } from "react";
import ChatBot from "./ChatBot";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { useChatBotContext } from "../context/ChatBotContext";

const MainChatBot = () => {
  const { setShowPopup, showPopup } = useChatBotContext();

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <>
      {/* ChatBot Toggle Button */}
      <div className="fixed bottom-5 right-5 z-50 ">
        <button
          onClick={togglePopup}
          className=" bg-gradient-to-r from-[#26A2D9] to-[#293E75] text-white px-6 py-2 rounded-full text-2xl shadow-lg"
        >
          <TbMessageChatbotFilled />
        </button>
      </div>

      {/* ChatBot Popup */}
      <div
        className={`   fixed lf:top-5 lg:right-0 md:-top-10 md:right-0 top-36 right-0 h-[400px] w-[320px] z-50 transition-transform duration-300 ${
          showPopup ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ChatBot setShowPopup={setShowPopup} />
      </div>
    </>
  );
};

export default MainChatBot;
