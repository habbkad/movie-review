import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  console.log(item);
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        h={230}
        w={150}
        px={2}
        onClick={() => {
          navigate(`details/${item.id}`);
        }}
      >
        <Image
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
          alt="Dan Abramov"
          borderRadius={10}
          boxSize="200px"
          objectFit="cover"
          boxShadow={useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.9)"
          )}
        />
        <Text
          fontSize={17}
          fontWeight={"600"}
          fontFamily={"fantasy"}
          noOfLines={1}
        >
          {item.title}
        </Text>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={14}>2023</Text>
          <Text fontSize={14}>124 m</Text>
          <Text
            borderWidth={0.5}
            borderColor={"black"}
            borderRadius={4}
            fontSize={14}
          >
            movie
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default MovieCard;
