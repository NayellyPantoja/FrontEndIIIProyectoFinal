import React, { useEffect, useState } from "react";
import dentistImg from "../assets/images/doctor.jpg";
import { Link } from "react-router-dom";

const Card = ({ dentistId }) => {
  const [dentist, setDentist] = useState(null);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${dentistId}`)
      .then((response) => response.json())
      .then((data) => setDentist(data));
  }, [dentistId]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    setIsFav(favs.includes(dentistId));
  }, [dentistId]);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const favIndex = favs.indexOf(dentistId);
    if (favIndex !== -1) {
      const newFavs = [...favs.slice(0, favIndex), ...favs.slice(favIndex + 1)];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setIsFav(false);
    } else {
      const newFavs = [...favs, dentistId];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setIsFav(true);
    }
  };

  if (!dentist) return null;
  console.log(dentist);

  return (
    <div className="card">
      <img src={dentistImg} alt="dentist img" style={{ maxWidth: "100%" }} />
      <Link to={`/detalle/${dentistId}`}>
        <h4>{dentist.name}</h4>
      </Link>
      <p>{dentist.username}</p>

      <button onClick={() => addFav(dentist)} className="favButton">
        {isFav ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Card;
