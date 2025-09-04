import "./Slideshow.css";
import DropdownArrow from "../AboutPage/DropdownArrow.jsx";

function Slideshow({ images }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="slideshow-wrapper">
      <DropdownArrow className="previous-arrow" />
      <div className="slideshow">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
      <DropdownArrow className="next-arrow" />
    </div>
  );
}

export default Slideshow;
