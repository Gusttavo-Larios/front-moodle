import React from "react";
import Routes from "./routes/index";
import { ModalProvider } from "./Context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Routes />
    </ModalProvider>
  )
}

export default App;
