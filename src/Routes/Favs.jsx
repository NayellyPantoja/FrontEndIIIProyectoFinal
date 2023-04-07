import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favsData = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(favsData);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((favId) => (
          <Card key={favId} dentistId={favId} />
        ))}
      </div>
    </>
  );
};

export default Favs;
