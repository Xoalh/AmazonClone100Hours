import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          {/* /<Header /> */}

          <Home />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
