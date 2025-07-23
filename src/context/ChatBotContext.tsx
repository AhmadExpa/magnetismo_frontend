import React, { createContext, useState, ReactNode } from "react";

interface ChatBotContextType {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatBotContext = createContext<ChatBotContextType | undefined>(
  undefined
);

interface ChatBotProviderProps {
  children: ReactNode;
}

export const ChatBotProvider: React.FC<ChatBotProviderProps> = ({
  children,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <ChatBotContext.Provider value={{ showPopup, setShowPopup }}>
      {children}
    </ChatBotContext.Provider>
  );
};

export const useChatBotContext = () => {
  const context = React.useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error("useChatBotContext must be used within a ChatBotProvider");
  }
  return context;
};
