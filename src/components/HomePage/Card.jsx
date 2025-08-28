import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";

function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/announces.json").then((response) => setData(response.data));
  }, []);
  return (
    <div className="card-list">
      {data.map((announce) => (
        <div key={announce.id} className="announce-card">
          <img src={announce.cover} alt={announce.title} className="announce-cover" />
          <h3 className="card-title">{announce.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Card;
