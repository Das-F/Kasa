import "@/components/Banner.css";

function Banner({ image, title, className = "", children }) {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt={title || "banner"} className="banner-image" />
      {children ? <div className="banner-content">{children}</div> : <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
