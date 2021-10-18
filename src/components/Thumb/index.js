import React from "react";
// Styles
import { Image } from "./ThumbStyle";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);

export default Thumb;
