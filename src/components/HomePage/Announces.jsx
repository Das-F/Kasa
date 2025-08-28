import "./Announces.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Announces = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("./announces.json").then((response) => setData(response.data));
  }, []);

  return (
    <div className="announces">
      <div className="announces-list">
        {data.map((announce) => (
          <div key={announce.id} className="announce-card">
            <img src={announce.cover} alt={announce.title} className="announce-cover" />
            <h3 className="announce-title">{announce.title}</h3>
            <p className="announce-location">{announce.location}</p>
            <p className="announce-description">{announce.description}</p>

            <div className="announce-host">
              <span className="announce-host-name">{announce.host.name}</span>
            </div>

            <div className="announce-infos">
              <p className="announce-equipments">
                <strong>Équipements :</strong> {announce.equipments.join(", ")}
              </p>
              <p className="announce-tags">
                <strong>Tags :</strong> {announce.tags.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announces;
