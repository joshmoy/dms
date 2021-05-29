import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const SidebarItem = ({ icon, text }) => {
  return (
    <Flex
      color="rgba(255, 255, 255, 0.5)"
      align="center"
      mb="30px"
      w="100%"
      transition=".5s"
      exact
      className={text === "Dashboard" && "activeRoute"}
      activeClassName="activeRoute"
    >
      <Flex
        align="center"
        className="main-box"
        h="4rem"
        w="100%"
        pl="34px"
        _hover={{
          backgroundColor: "rgba(37, 40, 65, 0.4)",
          borderRadius: "20px",
        }}
      >
        <Box boxSize="2rem">{icon}</Box>
        <Text
          ml="28px"
          lineHeight="16px"
          fontSize="1.4rem"
          fontWeight="bold"
          color="rgba(37, 37, 37, 0.4)"
        >
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SidebarItem;
