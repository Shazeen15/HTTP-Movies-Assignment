import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";

const initialValue = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

export default function UpdtaeMovie(props) {
  const [movie, setMovie] = useState(initialValue);
  const { push } = useHistory();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`).then((res) => {
      console.log(res.data);
      setMovie(res.data);
    });
  }, []);

  const onChange = (e) => {
    e.persist();
    console.log(e.target.value);
    let value = e.target.value;

    if (e.target.name === "metascore") {
      value = parseInt(value, 10);
    }
    setMovie({
      ...movie,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <form className="update-form">
        <input
          type="text"
          name="title"
          onChange={onChange}
          value={movie.title}
          placeholder="title"
        />
        <input
          type="text"
          name="director"
          onChange={onChange}
          value={movie.director}
        />

        <input
          type="text"
          name="metascore"
          onChange={onChange}
          value={movie.metascore}
        />

        {movie.stars.map((star) => {
          return (
            <input
              key={star}
              type="text"
              name="stars"
              onChange={onChange}
              value={star}
            />
          );
        })}

        <button>Update</button>
      </form>
    </>
  );
}
