import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <Header />
      <div className="card"></div>
      <Footer />
    </>
  );
}
export default App;
