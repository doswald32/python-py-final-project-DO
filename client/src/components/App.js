import "../App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

function App() {

  const [isActiveAccount, setIsActiveAccount] = useState(false);

  return (
    <div className="App">
      {isActiveAccount ? 
      <Login/> : 
      <CreateAccount/>}
    </div>
  );
}

export default App;
