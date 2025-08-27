import React, { use, useEffect } from "react";
import axios from "axios";

const Announces = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("./announces.json").then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <h1>Liste des Annonces</h1>
      {/* Render announcements here */}
    </div>
  );
};

export default Announces;
