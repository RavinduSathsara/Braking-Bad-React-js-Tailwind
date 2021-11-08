import React from "react";
import { useState } from "react";

import AppNavBar from "./components/AppNavBar";
import BrCast from "./components/BrCast";
import HomePage from "./components/HomePage";
import Quotes from "./components/Quotes";

const App = () => {
  const [view, setview] = useState(null);
  function setShowHome() {
    setview(null);
  }
  function setShowCast() {
    setview("cast");
  }
  function setShowQuotes() {
    setview("quo");
  }
  return (
    <div>
      <AppNavBar
        setShowHome={setShowHome}
        setShowCast={setShowCast}
        setShowQuotes={setShowQuotes}
      />
      {view === null ? (
        <HomePage />
      ) : view === "cast" ? (
        <BrCast />
      ) : view === "quo" ? (
        <Quotes />
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default App;
