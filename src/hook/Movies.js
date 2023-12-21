import axios from "axios";
import { useEffect, useState } from "react";

export const useTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const getTrending = async () => {
      try {
        await axios
          .get(
            "https://api.themoviedb.org/3/trending/movie/week?api_key=73ca2a6e8a948ec1b2938001838a6713",
            {
              headers: {
                accept: "application/json",
              },
            }
          )
          .then((res) => {
            setTrendingMovies(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, []);
  return trendingMovies.results;
};

export const useMovieDetails = (id) => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=73ca2a6e8a948ec1b2938001838a6713`,
            {
              headers: {
                accept: "application/json",
              },
            }
          )
          .then((res) => {
            // console.log(res.data);
            setMovieDetails(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  return movieDetails;
};
