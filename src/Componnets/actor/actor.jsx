import React from "react";

import "./actor.css";

export const Actor = ({ src, name }) => {
  const ACTOR_IMAGE =
    (src && `https://image.tmdb.org/t/p/w300` + src) ||
    "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";

  return (
    <div className="actor-wrapper">
      <img className="actor-image" src={ACTOR_IMAGE} alt={name} />
      <span className="actor-name">{name}</span>
    </div>
  );
};
