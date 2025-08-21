import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/nfp" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <div className="card"></div>
      </>
    </BrowserRouter>
  );
}
export default App;
