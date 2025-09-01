import "./Announces.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";

const Announces = () => {
  const [logementData, setlogementData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios.get("/announces.json").then((response) => {
      setlogementData(response.data);
      setLoader(false);
    });
  }, []);

  const announce = logementData?.find((a) => a.id === id);

  if (loader) {
    return <div>Loading...</div>;
  }

  if (logementData.length > 0 && !announce) {
    return <NotFoundPage />;
  }

  return (
    <div className="announces">
      <div className="announces-list">
        {announce && (
          <div className="announce-card-link">
            <div className="announce-card">
              <img src={announce.cover} alt={announce.title} className="announce-cover" />
              <h3 className="announce-title">{announce.title}</h3>
              <p className="announce-location">{announce.location}</p>
              <p className="announce-description">{announce.description}</p>
              <p className="announce-tags">
                <strong>Tags :</strong> {announce.tags.join(", ")}
              </p>
              <div className="announce-rating-host">
                <p className="announce-rating">
                  <strong>Note :</strong> {announce.rating}
                </p>
                <span className="announce-host-name">{announce.host.name}</span>
              </div>
              <div className="announce-infos">
                <p className="announce-equipments">
                  <strong>Équipements :</strong> {announce.equipments.join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Announces;
