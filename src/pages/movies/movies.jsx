import React from "react";

import { Chip } from "../../Componnets/chip/chip";

export const Movies = () => {
  return (
    <div className="container">
      <p className="page-title">DISCOVER MOVIES</p>
      <div className="button-container">
        <Chip name="Action" />
        <Chip name="Adventure" />
        <Chip name="Animation" />
        <Chip name="Comedy" />
        <Chip name="Crime" />
        <Chip name="Documentary" />
        <Chip name="Family" />
        <Chip name="Fantasy" />
        <Chip name="History" />
        <Chip name="Horror" />
        <Chip name="Music" />
        <Chip name="Mystery" />
        <Chip name="romance" />
        <Chip name="Science Fiction" />
        <Chip name="TV Movie" />
        <Chip name="Thriller" />
        <Chip name="war" />
        <Chip name="westren" />
      </div>
    </div>
  );
};
