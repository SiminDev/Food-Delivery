import * as React from "react";
import Home from "./Pages/Home/home";
import Invoice from "./Pages/Invoice/invoice";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-row flex-wrap w-screen min-h-screen overflow-hidden	 sm:flex-nowrap md:h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  );
}

export default App;
