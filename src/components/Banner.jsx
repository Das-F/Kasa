import "Banner.css";

function Banner({ image, title, className = "" }) {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt={title} className="banner-image" />
      <h2 className="banner-title">{title}</h2>
    </div>
  );
}
export default Banner;
