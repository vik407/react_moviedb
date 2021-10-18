import React from "react";

// Get the configuration
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Assets
import NoImage from "../images/no_image.jpg";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
// Components
import HeroImage from "./HeroImage";
import MovieGrid from "./MovieGrid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();
  console.log(state);

  if(error) return <div>An error has ocurred</div>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieGrid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </MovieGrid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
          <Button text="Load More" callback={()=> setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
