import "@/styles/Rental.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import announces from "@/data/announces.json";
import Stars from "@/components/RentalPage/StarRating.jsx";
import DropdownBox from "@/components/AboutPage/DropdownBox";

const RentalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const announce = announces.find((a) => a.id === id);
  useEffect(() => {
    if (announces.length > 0 && !announce) {
      navigate("/404");
    }
  }, [announce, announces.length, navigate]);
  return (
    <div className="announces">
      <div className="announces-list">
        {announce && (
          <div className="announce-card-link">
            <div className="announce-card">
              <img src={announce.cover} alt={announce.title} className="announce-cover" />
              <h3 className="announce-title">{announce.title}</h3>
              <p className="announce-location">{announce.location}</p>
              <p className="announce-tags">{announce.tags.join(" ")}</p>
              <div className="announce-rating-host">
                <Stars className="announce-rating" rating={announce.rating} />
                <div className="announce-host-information">
                  <span className="announce-host-name">{announce.host.name}</span>
                  <img src={announce.host.picture} alt={announce.host.name} className="announce-host-picture" />
                </div>
              </div>
              <div className="announce-dropdowns">
                <DropdownBox title="Description">
                  <p className="announce-description">{announce.description}</p>
                </DropdownBox>
                <DropdownBox title="Equipements">
                  <p className="announce-equipments">{announce.equipments.join(", ")}</p>
                </DropdownBox>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RentalPage;
