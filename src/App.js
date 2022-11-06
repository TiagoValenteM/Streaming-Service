import "./App.css";
import React, { useEffect, useState } from "react";
import HomeScreen from "./components/homepage/HomeScreen";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <HomeScreen />
  );
}

export default App;
