import React from "react";
/*
    title: "The Godfather",
    director: "Francis Ford Coppola",
    metascore: 100,
    stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
*/

export default function UpdtaeMovie() {
  return (
    <React.Fragment>
      <form>
        <label htmlFor="title">
          <input id="title" type="text" />
        </label>

        <button>Update</button>
      </form>
    </React.Fragment>
  );
}
