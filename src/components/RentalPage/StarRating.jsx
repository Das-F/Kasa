import "./StarRating.css";

function Stars({ rating }) {
  const safeRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className="stars">
      {Array(5)
        .fill()
        .map((_, i) => (
          <span key={i} className={i < safeRating ? "star-full" : "star-empty"}>
            ★
          </span>
        ))}
    </div>
  );
}

export default Stars;
