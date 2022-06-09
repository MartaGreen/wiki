import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Time from "./pages/time/time";
import SearchForCity from "./pages/searchForCity/searchForCity";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="time" element={<Time />} />
        <Route path="searchForCity" element={<SearchForCity />} />
      </Routes>
    </Router>
  );
}

export default App;
