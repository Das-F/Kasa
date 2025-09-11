import "@/styles/Rental.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import announces from "@/data/announces.json";
import Tag from "@/components/RentalPage/Tag.jsx";
import Stars from "@/components/RentalPage/StarRating.jsx";
import DropdownBox from "@/components/AboutPage/DropdownBox";
import Slideshow from "@/components/RentalPage/Slideshow";

const RentalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const announce = announces.find((a) => a.id === id);
  useEffect(() => {
    if (announces.length > 0 && !announce) {
      navigate("/404");
    }
  }, [announce, navigate]);
  return (
    <div className="announces">
      <div className="announces-list">
        {announce && (
          <div className="announce-card-link">
            <div className="announce-card">
              <Slideshow images={announce.pictures} className="announce-slideshow" />
              <div className="announce-info-and-host">
                <div className="announce-information">
                  <h3 className="announce-title">{announce.title}</h3>
                  <p className="announce-location">{announce.location}</p>
                  <div className="announce-tags">
                    {announce.tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
                <div className="announce-rating-host">
                  <Stars className="announce-rating" rating={announce.rating} />
                  <div className="announce-host-information">
                    <span className="announce-host-name">{announce.host.name}</span>
                    <img src={announce.host.picture} alt={announce.host.name} className="announce-host-picture" />
                  </div>
                </div>
              </div>
              <div className="announce-dropdowns">
                <DropdownBox className="dropdown-box-twice" title="Description">
                  <p className="announce-description">{announce.description}</p>
                </DropdownBox>
                <DropdownBox className="dropdown-box-twice" title="Equipements">
                  <ul className="equipments-list">
                    {announce.equipments.map((eq) => (
                      <li className="announce-equipment" key={eq}>
                        {eq}
                      </li>
                    ))}
                  </ul>
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
