import "../App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

function App() {

  const [isActiveAccount, setIsActiveAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onChangeUsername(e) {
    setUsername(e.target.value)
  }

  function onChangePassword(e) {
    setPassword(e.target.value)
  }

  return (
    <div className="App">
      {isActiveAccount ? <Login onChangeUsername={onChangeUsername} onChangePassword={onChangePassword}/> : <CreateAccount />}
    </div>
  );
}

export default App;
