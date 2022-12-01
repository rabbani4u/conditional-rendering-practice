import React from "react";
import Form from "./Form";
import Registration from "./Registration";
import Login from "./Login";

var userIsRegistered = true;

function createLoggedin() {
  if (userIsRegistered === false) {
    return <Form />;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{createLoggedin()}</div>;
}

export default App;
