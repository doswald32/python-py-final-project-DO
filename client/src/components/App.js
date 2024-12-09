import "../App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {

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
      <Login onChangeUsername={onChangeUsername} onChangePassword={onChangePassword}/>
    </div>
  );
}

export default App;
