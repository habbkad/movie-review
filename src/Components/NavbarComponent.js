import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const NavbarComponent = () => {
  return (
    <Box
      bg={"rgba(0.0.0.0.9)"}
      visibility={["hidden", "visible"]}
      bgColor={`rgb(48, 49, 51,0.9)`}
    >
      <Flex
        h={50}
        mx={100}
        direction={"row"}
        justifyContent={"space-between"}
        align={"center"}
      >
        <Box w={"50%"}>
          <Text
            fontFamily={"cursive"}
            fontSize={30}
            color={"white"}
            fontWeight={"bold"}
          >
            MovieHub
          </Text>
        </Box>
        <Box w={"50%"}>
          <Flex justifyContent={"space-between"} w={"70%"}>
            <Text
              fontSize={25}
              fontFamily={"fantasy"}
              fontWeight={"500"}
              color={"white"}
            >
              Home
            </Text>
            <Text
              fontSize={25}
              fontFamily={"fantasy"}
              fontWeight={"500"}
              color={"white"}
            >
              Action
            </Text>
            <Text
              fontSize={25}
              fontFamily={"fantasy"}
              fontWeight={"500"}
              color={"white"}
            >
              Romance
            </Text>
            <Text
              fontSize={25}
              fontFamily={"fantasy"}
              fontWeight={"500"}
              color={"white"}
            >
              Comedy
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavbarComponent;
