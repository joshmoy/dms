import { Box, Flex, Image } from "@chakra-ui/react";
import { SidebarData } from "../data/sidebar";
import React from "react";

import logo from "../assets/Logo.svg";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <>
      <Box pos="fixed" left="0" top="0">
        <Box w="215px" h="100vh" bgColor="#fff" p="32px 5px 0">
          <Box w="70px" borderBottom="1px solid rgba(0, 0, 0, 0.2)" pb="28px" m="0 0 35px 13px">
            <Image w="36px" h="36px" src={logo} alt="logo" />
          </Box>
          {SidebarData.map((el, id) => {
            return (
              <Flex key={id}>
                <SidebarItem icon={el.icon} text={el.name} />
              </Flex>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export { Sidebar };
