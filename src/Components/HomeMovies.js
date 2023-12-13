import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import MovieCard from "./MovieCard";
import { useTrendingMovies } from "../hook/Movies";

const HomeMovies = () => {
  let recent = [1, 23, 3, 3, 4, 4, 3, 2, 3, 2];
  const trending = useTrendingMovies();
  console.log(trending);
  return (
    <Box mx={[10]}>
      <Box mb={5}>
        <Text fontSize={23} fontWeight={"800"} fontFamily={"fantasy"}>
          Most Recent
        </Text>
        <SimpleGrid columns={[2, 8]} spacingX="40px" spacingY="70px">
          {trending ? (
            trending.map((item, index) => {
              if (index <= 15) {
                return (
                  <Box>
                    <MovieCard item={item} />
                  </Box>
                );
              }
            })
          ) : (
            <>Loading</>
          )}
        </SimpleGrid>
      </Box>
      {/* <Box mt={20} mb={5}>
        <Text fontSize={23} fontWeight={"800"} fontFamily={"fantasy"}>
          Most Recent
        </Text>
        <SimpleGrid columns={[2, 8]} spacingX="40px" spacingY="70px">
          {recent.map(() => {
            return (
              <Box>
                <MovieCard />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
      <Box>
        <Text
          fontWeight={"800"}
          fontSize={23}
          mt={20}
          mb={5}
          fontFamily={"fantasy"}
        >
          Most Recent
        </Text>
        <SimpleGrid columns={[2, 8]} spacingX="40px" spacingY="70px">
          {recent.map(() => {
            return (
              <Box>
                <MovieCard />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box> */}
    </Box>
  );
};

export default HomeMovies;
