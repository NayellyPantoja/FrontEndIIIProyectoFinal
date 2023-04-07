import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    const obtenerDentista = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setDentist(data);
    };
    obtenerDentista();
  }, [id]);

  return (
    <>
      <h1>Detalle Dentista {id} </h1>

      <table>
        <tbody>
          <tr>
            <th>Nombre:</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Teléfono:</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Sitio web:</th>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;