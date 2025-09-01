import HomePage from "../pages/HomePage.jsx";
import About from "../pages/AboutPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import RentalPage from "../pages/Rental.jsx";
import { Routes, Route } from "react-router-dom";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/rental/:id" element={<RentalPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default Router;
