import "./App.css";
import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar_bot from "./component/Navbar_bot/Navbar_bot";

function App() {
  return (
    <Router>
      <Navbar />
      <Navbar_bot />
    </Router>
  );
}

export default App;
