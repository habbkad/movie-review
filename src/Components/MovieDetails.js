import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaBookmark, FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hook/Movies";
const MovieDetails = () => {
  const { movieId } = useParams();
  const details = useMovieDetails(movieId);
  console.log(details);
  return (
    <Box>
      <Box
        h={[700, 600]}
        bgImage={[
          "none",
          `https://www.themoviedb.org/t/p/original/${details.backdrop_path}`,
        ]}
        style={{ backgroundSize: "100% 600px" }}
      >
        <Flex
          px={10}
          h={[700, 600]}
          direction={["column", "row"]}
          bgGradient={
            " linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)"
          }
        >
          <Image
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${details.poster_path}`}
            alt="Dan Abramov"
            borderRadius={10}
            w={[220, 320]}
            h={[320, 450]}
            mt={[2, 0]}
            alignSelf={"center"}
            objectFit="cover"
            boxShadow={useColorModeValue(
              "0 4px 6px rgba(160, 174, 192, 0.8)",
              "0 4px 6px rgba(9, 17, 28, 0.9)"
            )}
          />

          <Box pl={["0%", "7%"]} mt={10}>
            <Box>
              <Text
                fontSize={[30, 60]}
                fontWeight={"700"}
                textAlign={["center", "left"]}
                color={"white"}
                fontFamily={"fantasy"}
              >
                {details.title}
              </Text>
              <Flex justifyContent={["center", "normal"]}>
                <Text fontSize={17} color={"white"} fontWeight={"200"} ml={5}>
                  {details.release_date}
                </Text>
                {details == {} ? (
                  details.genres.map((item) => {
                    return (
                      <Text
                        fontSize={17}
                        color={"white"}
                        fontWeight={"200"}
                        ml={3}
                      >
                        {item.name}
                      </Text>
                    );
                  })
                ) : (
                  <>None</>
                )}
              </Flex>
              <Flex justifyContent={["center", "normal"]} align={"center"}>
                <Flex
                  h={14}
                  w={14}
                  bgColor={"black"}
                  borderRadius={28}
                  align={"center"}
                  justify={"center"}
                >
                  <Text color={"white"}>
                    {Math.floor(details.popularity / 10)}%
                  </Text>
                </Flex>
                <Flex
                  h={10}
                  w={10}
                  bgColor={"black"}
                  borderRadius={22}
                  ml={[5]}
                  align={"center"}
                  justify={"center"}
                >
                  <FaHeart color={"white"} size={20} />
                </Flex>
                <Flex
                  h={10}
                  w={10}
                  bgColor={"black"}
                  borderRadius={22}
                  align={"center"}
                  ml={[5]}
                  justify={"center"}
                >
                  <FaBookmark color={"white"} size={20} />
                </Flex>
                <Flex
                  h={10}
                  w={10}
                  bgColor={"black"}
                  borderRadius={22}
                  ml={[5]}
                  align={"center"}
                  justify={"center"}
                >
                  <FaStar size={20} color={"white"} />
                </Flex>
              </Flex>

              <Box mt={[5, 10]} w={["100%", "70%"]} px={[2, 0]}>
                <Text
                  fontSize={[25]}
                  fontWeight={"700"}
                  textAlign={["center", "left"]}
                  color={"white"}
                  fontFamily={"fantasy"}
                >
                  Overview
                </Text>
                <Text color={"white"} align={["center", "left"]}>
                  {details.overview}
                </Text>

                <Flex mt={7} justify={"space-between"}>
                  <Box>
                    <Text
                      fontSize={[10, 15]}
                      fontWeight={"700"}
                      color={"white"}
                    >
                      DirectorName
                    </Text>
                    <Text color={"white"}>Director</Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={[10, 15]}
                      fontWeight={"700"}
                      color={"white"}
                    >
                      WriterName
                    </Text>
                    <Text color={"white"}>Writer</Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={[10, 15]}
                      fontWeight={"700"}
                      color={"white"}
                    >
                      Screenplay name
                    </Text>
                    <Text color={"white"}>Screen play</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MovieDetails;
