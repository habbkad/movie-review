import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import NavbarComponent from "./NavbarComponent";

const SearchBanner = () => {
  return (
    <Box h={[600]}>
      <Box
        h={[500]}
        pos={"relative"}
        backgroundImage={
          "https://www.joblo.com/wp-content/uploads/2019/03/avengers-endgame-poster-xl-1.jpg"
        }
        objectFit={"contain"}
      >
        <Box
          h={"100%"}
          bg={
            "linear-gradient(75deg, rgba(63,94,251,0.4881346288515406) 100%, rgba(74,176,201,0.506061799719888) 100%)"
          }
        >
          <NavbarComponent />
          <Flex
            align={"center"}
            justify={"center"}
            h={"100%"}
            direction={"column"}
          >
            <Text
              fontSize={60}
              fontWeight={"700"}
              color={"white"}
              fontFamily={"fantasy"}
            >
              Find Movies, TV shows and more
            </Text>
            <Text
              fontSize={30}
              color={"white"}
              fontWeight={"200"}
              fontFamily={"cursive"}
            >
              Best in trending and latest movies.
            </Text>
          </Flex>
        </Box>
      </Box>
      <Flex justify={"center"} align={"center"} w={"100%"} mt={"-1rem"}>
        <Box w={"70%"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiSearch color="gray.300" size={50} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search movie"
              size={"lg"}
              w={"100%"}
              bg={"white"}
              borderRadius={20}
              boxShadow={useColorModeValue(
                "0 4px 6px rgba(160, 174, 192, 0.6)",
                "0 4px 6px rgba(9, 17, 28, 0.9)"
              )}
            />
          </InputGroup>
        </Box>
        <Box>
          <Button
            alignSelf={"center"}
            bg={"rgba(63, 94, 251, 0.8881346288515406)"}
            color={"white"}
            borderRadius={20}
            _hover={{ color: "black" }}
          >
            Search
          </Button>
        </Box>
      </Flex>

      {/* <Flex
        h={[200]}
        borderRadius={30}
        w={["90%", "70%"]}
        bg={"white"}
        mt={"-7rem"}
        justify={"center"}
        align={"center"}
        mx={["1.5rem", "14rem"]}
        boxShadow={useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "0 4px 6px rgba(9, 17, 28, 0.9)"
        )}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiSearch color="gray.300" size={50} />
          </InputLeftElement>
          <Input type="text" placeholder="Search movie" size={"lg"} w={"70%"} />
        </InputGroup>
      </Flex> */}
    </Box>
  );
};

export default SearchBanner;
