import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Culture from "./pages/Culture";
import Heritage from "./pages/Heritage";
import Traditions from "./pages/Traditions";
import TraditionDetail from "./pages/TraditionDetail";
import VedicBotWidget from "./components/shared/VedicBotWidget";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <VedicBotWidget /> {/* Global on all pages */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/traditions" element={<Traditions />} />
        <Route path="/traditions/:id" element={<TraditionDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
