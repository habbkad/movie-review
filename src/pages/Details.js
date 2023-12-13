import { Box } from "@chakra-ui/react";
import React from "react";
import MovieDetails from "../Components/MovieDetails";
import NavbarComponent from "../Components/NavbarComponent";

const Details = () => {
  return (
    <Box overflow={"clip"}>
      <NavbarComponent />
      <MovieDetails />
    </Box>
  );
};

export default Details;
