import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";
import App from "./App";
import "./index.css";
import { ChatBotProvider } from "./context/ChatBotContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChatBotProvider>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ChatBotProvider>
  </Provider>
);
