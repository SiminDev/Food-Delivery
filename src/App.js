import * as React from "react";
import Home from "./Pages/Home/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-row flex-wrap w-screen min-h-screen overflow-hidden	 sm:flex-nowrap md:h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
