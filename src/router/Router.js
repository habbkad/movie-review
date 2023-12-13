import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Box } from "@chakra-ui/react";
import { useTrendingMovies } from "../hook/Movies";
import Details from "../pages/Details";

const Router = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details">
            <Route path=":movieId" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Router;
