import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDentists(data));
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentistId={dentist.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;