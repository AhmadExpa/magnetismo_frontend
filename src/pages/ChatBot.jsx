import React, { useState, useRef, useEffect } from "react";
import { Send, X, Bot, User, Sparkles } from "lucide-react";

// 🌐 API Configuration
const getApiBase = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_API_BASE || "http://localhost:8000";
  }
  const protocol = window.location.protocol;
  const host = import.meta.env.VITE_API_BASE || "209.126.82.159";
  const cleanHost = host.replace(/^http?:\/\//, '');
  return `${protocol}//${cleanHost}`;
};

  const API_BASE = getApiBase();
  const ASK_ENDPOINT = `${API_BASE}/api/ask`;
  const ASK_FORM_ENDPOINT = `${API_BASE}/api/ask-form`;
  const HEALTH_ENDPOINT = `${API_BASE}/api/`; 

// 💬 Quick-question shortcuts
const FAQ_LIST = [
  "What is Magnetismo?",
  "How does Magnetismo work?",
  "Is Magnetismo compatible with all eyeglasses?",
  "How do I attach Magnetismo to my glasses?",
];

const ChatBot = ({ setShowPopup }) => {
  // 💬 Chat State
  const [messages, setMessages] = useState([
    {
      text: "Hi there! 👋 Welcome to Magnetismo AI. I'm here to help answer any questions about our innovative magnetic eyewear accessories. How can I assist you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("checking");
  const messagesEndRef = useRef(null);

  // 🔌 Test API connection
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch(HEALTH_ENDPOINT, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          mode: "cors",
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Health check response:", data);
          setConnectionStatus("connected");
        } else {
          throw new Error(`Health check failed with status ${response.status}`);
        }
      } catch (error) {
        console.error("API connection error:", error);
        setConnectionStatus("error");
        setMessages((prev) => [
          ...prev,
          {
            text: "⚠️ Connection issue detected. Please check if the server is running.",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }
    };

    testConnection();
  }, []);

  // 📱 Scroll to bottom on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  // 🧠 Send message to backend
  const sendMessage = async (customText = null) => {
    const textToSend = customText ?? input.trim();
    if (!textToSend || isLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        text: textToSend,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    if (customText === null) setInput("");

    setIsLoading(true);
    setIsTyping(true);

    try {
      // Try JSON request first (preferred method)
      let response = await fetch(ASK_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          question: textToSend,
          user_id: "web_user_1"
        }),
      });

      // If JSON fails, try form data as fallback
      if (!response.ok && response.status === 422) {
        console.log("JSON request failed, trying form data...");
        const formData = new FormData();
        formData.append("question", textToSend);
        formData.append("user_id", "web_user_1");

        response = await fetch(ASK_FORM_ENDPOINT, {
          method: "POST",
          mode: "cors",
          body: formData,
        });
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server response:", response.status, errorText);
        throw new Error(`Server responded ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("API response:", data);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: data.answer || "Sorry, I didn't get a proper reply.",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
        setIsTyping(false);
      }, 1000);

    } catch (err) {
      console.error("Error calling /api/ask →", err);
      
      let errorMessage = "Oops! Something went wrong.";
      
      if (err.message.includes("network") || err.message.includes("fetch")) {
        errorMessage = "🌐 Cannot connect to the server.";
      } else if (err.message.includes("CORS")) {
        errorMessage = "🔒 Connection blocked by security policy.";
      } else if (err.message.includes("404")) {
        errorMessage = "🔍 API endpoint not found.";
      } else if (err.message.includes("500")) {
        errorMessage = "⚙️ Server error. Please try again.";
      } else if (err.message.includes("422")) {
        errorMessage = "📝 Invalid request format. Please try again.";
      } else if (err.message.includes("400")) {
        errorMessage = "❌ Bad request. Please rephrase your question.";
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: errorMessage,
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
        setIsTyping(false);
      }, 800);
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const FAQButtons = () => (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-blue-100">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-blue-500" />
        <span className="text-sm font-medium text-gray-700">Quick Questions</span>
        <div className="ml-auto flex items-center gap-1">
          <div
            className={`w-2 h-2 rounded-full ${
              connectionStatus === "connected"
                ? "bg-green-400 animate-pulse"
                : connectionStatus === "error"
                ? "bg-red-400"
                : "bg-yellow-400 animate-pulse"
            }`}
          />
          <span className="text-xs text-gray-500">
            {connectionStatus === "connected"
              ? "Online"
              : connectionStatus === "error"
              ? "Offline"
              : "Connecting..."}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {FAQ_LIST.map((faq, i) => (
          <button
            key={i}
            onClick={() => sendMessage(faq)}
            disabled={isLoading || connectionStatus === "error"}
            className="bg-white text-gray-700 px-4 py-2 rounded-full text-xs font-medium hover:bg-blue-500 hover:text-white transition border border-blue-200 whitespace-nowrap flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {faq}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center md:h-[600px] md:mt-16">
      <div className="md:w-[420px] max-w-md h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#26A2D9] via-[#2B7ED8] to-[#293E75] text-white p-4">
          <div className="absolute inset-0 bg-black opacity-10" />
          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Magnetismo AI</h1>
                <div className="flex items-center gap-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      connectionStatus === "connected"
                        ? "bg-green-400 animate-pulse"
                        : connectionStatus === "error"
                        ? "bg-red-400"
                        : "bg-yellow-400 animate-pulse"
                    }`}
                  />
                  <span className="text-sm opacity-90">
                    {connectionStatus === "connected"
                      ? "Online"
                      : connectionStatus === "error"
                      ? "Offline"
                      : "Connecting..."}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* FAQ Strip */}
        <FAQButtons />

        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  msg.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600"
                      : "bg-gradient-to-r from-gray-600 to-gray-700"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div className="max-w-[75%]">
                  <div
                    className={`px-4 py-3 rounded-2xl break-words shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-md"
                        : "bg-white text-gray-800 border border-gray-200 rounded-tl-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </p>
                  </div>
                  <div
                    className={`text-xs text-gray-500 mt-1 ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                placeholder="Type your message here…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                disabled={isLoading || connectionStatus === "error"}
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 pr-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50 resize-none h-10"
                rows={1}
                aria-label="Message input"
              />
              <span className="absolute right-3 top-2 text-gray-400">💬</span>
            </div>
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim() || connectionStatus === "error"}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                isLoading || !input.trim() || connectionStatus === "error"
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:scale-105 shadow-lg"
              }`}
              aria-label="Send message"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Powered by Magnetismo AI • Always here to help
            {connectionStatus === "error" && (
              <span className="text-red-500"> • Connection Error</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;