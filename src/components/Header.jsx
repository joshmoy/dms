import { Avatar, Box, Flex, Text, Image } from "@chakra-ui/react";
import avatar from "../assets/avatar.png";
import search from "../assets/Search.svg";
import React from "react";

const Header = () => {
  return (
    <Box bgColor="#fff" pr="4rem" pl="22px" pos="fixed" top="0" w="calc(100vw - 215px)">
      <Flex justify="space-between" align="center" h="7.2rem">
        <Flex align="center">
          <Image boxSize="27px" src={search} alt="" />
          <Text color="rgba(0,0,0,0.4)" ml="16px">
            Search
          </Text>
        </Flex>
        <Flex align="center">
          <Box mr="1.4rem" boxSize="44px" pos="relative">
            <Avatar
              bgColor="rgba(62, 126, 238, 0.2)"
              color="#3E7EEE"
              name="Administrator"
              src={avatar}
              boxSize="44px"
            />
            <Box
              bgColor="brand.green"
              boxSize="12px"
              pos="absolute"
              bottom="0"
              right="0"
              borderRadius="50%"
            ></Box>
          </Box>
          <Box>
            <Text fontSize="14px" fontWeight="bold" lineHeight="18px" color="#000">
              Jude Adam
            </Text>
            <Text fontSize="14px" lineHeight="18px">
              Admin
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export { Header };
