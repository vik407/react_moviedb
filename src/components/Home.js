import React, { useState, useEffect } from "react";

// Get the configuration
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";
// Assets
import NoImage from "../images/no_image.jpg";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
// Components
const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);


    return <div>Home Page</div>
}

export default Home;
