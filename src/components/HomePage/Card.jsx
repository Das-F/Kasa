import { Link } from "react-router-dom";
import announces from "@/data/announces.json";
import "./Card.css";

function Card() {
  return (
    <div className="card-list">
      {announces.map((announce) => (
        <Link to={`/rental/${announce.id}`} key={announce.id} className="card-link">
          <div className="card-announce">
            <img src={announce.cover} alt={announce.title} className="card-cover" />
            <div className="card-overlay">
              <h2 className="card-title">{announce.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Card;
