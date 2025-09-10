import { useState } from "react";
import DropdownArrow from "../AboutPage/DropdownArrow.jsx";
import "./Slideshow.css";

function Slideshow({ images, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`slideshow-wrapper ${className || ""}`}>
      <DropdownArrow className="previous-arrow" onClick={prevSlide} />
      <div className="slideshow">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <DropdownArrow className="next-arrow" onClick={nextSlide} />
    </div>
  );
}

export default Slideshow;
