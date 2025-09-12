import { useState } from "react";
import DropdownArrow from "../DropdownBox/DropdownArrow.jsx";
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
      {images.length > 1 && <DropdownArrow className="previous-arrow" onClick={prevSlide} />}

      <div className="slideshow">
        <img className="slideshow-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

        {images.length > 1 && (
          <div className="slideshow-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {images.length > 1 && <DropdownArrow className="next-arrow" onClick={nextSlide} />}
    </div>
  );
}

export default Slideshow;
