import "../App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

function App() {

  const [isActiveAccount, setIsActiveAccount] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    newUserName: "",
    newPassword: "",
    email: "",
    phone: "",
  })

  function onChangeUsername(e) {
    setUsername(e.target.value)
  }

  function onChangePassword(e) {
    setPassword(e.target.value)
  }

  function onChangeFirst(e) {
    setNewUserData({ ...newUserData, firstName: e.target.value })
  }

  function onChangeLast(e) {
    setNewUserData({ ...newUserData, lastName: e.target.value })
  }

  function onChangeNewUsername(e) {
    setNewUserData({ ...newUserData, newUserName: e.target.value })
  }

  function onChangeNewPassword(e) {
    setNewUserData({ ...newUserData, newPassword: e.target.value })
  }

  function onChangeEmail(e) {
    setNewUserData({ ...newUserData, email: e.target.value })
  }

  function onChangePhone(e) {
    setNewUserData({ ...newUserData, phone: e.target.value })
  }

  console.log(newUserData)

  return (
    <div className="App">
      {isActiveAccount ? 
      <Login username={username} password={password} onChangeUsername={onChangeUsername} onChangePassword={onChangePassword}/> : 
      <CreateAccount newUserData={newUserData} setNewUserData={setNewUserData} onChangeFirst={onChangeFirst} 
      onChangeLast={onChangeLast} onChangeNewUsername={onChangeNewUsername} onChangeNewPassword={onChangeNewPassword} onChangeEmail={onChangeEmail} onChangePhone={onChangePhone}/>}
    </div>
  );
}

export default App;
