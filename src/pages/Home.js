import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import SearchBanner from "../Components/SearchBanner";
import MovieCard from "../Components/MovieCard";
import HomeMovies from "../Components/HomeMovies";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box overflow={"hidden"}>
      <SearchBanner />
      <HomeMovies />
    </Box>
  );
};

export default Home;
