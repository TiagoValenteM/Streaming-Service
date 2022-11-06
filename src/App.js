import "./App.css";
import React from "react";
import HomeScreen from "./components/homeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <Router>
      {!user ? (
        <SignInScreen />
      ) : (
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
