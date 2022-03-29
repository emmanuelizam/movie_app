import { React, useState, useEffect } from "react";

import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMyAPI = async (page, searchTerm = "") => {
      try {
        setError(false);
        setLoading(true);

        const response = await API.fetchMovies(searchTerm, page);
        console.log(response);
        setData((prev) => ({
          ...response,
          results:
            page > 1 ? [...prev.results, response.results] : response.results,
        }));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchMyAPI(1);
  }, []);

  return { data, loading, error };
};
