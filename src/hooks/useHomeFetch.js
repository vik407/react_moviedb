import { useState, useEffect, useRef } from "react";
// API
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  /* Fetch the Movies */
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      // State movies
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  /* Trigger when mount or search */
  useEffect(() => {
    // Clear search
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  /* Trigger when Load More */
  useEffect(() => {
    if (!isLoadingMore) return;

    //Get more pages
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);

  }, [isLoadingMore, searchTerm, state.page]);

  return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
};
