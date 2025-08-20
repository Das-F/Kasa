import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import ErrorPage from "./pages/ErrorPage.js";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <Header />
      <div className="card">
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <About />}
        {currentPage === "error" && <ErrorPage />}
      </div>
      <Footer />
    </>
  );
}

export default App;
