import React from "react";

const MovieCard = props => {
  console.log("props", props);
  // const { title, director, metascore, stars } = props;
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>Director: {props.data.director}</p>
      <p>Rating: {props.data.metascore}</p>

      <h3>Actors</h3>
      {props.data.stars.map(star => (
        <div key={star}>{star}</div>
      ))}
    </div>
  );
};

export default MovieCard;
