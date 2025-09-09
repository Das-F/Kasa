import "@/components/Banner.css";

function Banner({ image, title, className = "" }) {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt={title || ""} className="banner-image" />
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
