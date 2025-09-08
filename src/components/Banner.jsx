import "@/components/Banner.css";

function Banner({ image, title, className = "", children }) {
  return (
    <div className={`banner ${className}`.trim()}>
      <img src={image} alt={title} className="banner-image" />
      {children ? <div className="banner-content">{children}</div> : <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
