import React, { useState, useEffect } from "react";
import "./movie.css";

function Movie(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.themoviedb.org/3/movie/550?api_key=7284b7ef742f21948acba4a4e4d2b8c7")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Películas</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <div>
          <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt={data.original_title} />
          <h2>{data.original_title}</h2>
          <p>{data.overview}</p>
        </div>
      ) : null}
    </>
  );
}

export default Movie;
