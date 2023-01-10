import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./components/LandingPage.js";
import "./App.css";
import Auth from "./components/Auth.js";
import Home from "./components/Home.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/home"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
