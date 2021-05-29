import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import OverviewCard from "./components/OverviewCard";
const Dashboard = () => {
  return (
    <Box pos="relative">
      <Sidebar />
      <Box ml="215px">
        <Header />
        <Box bgColor="#E5EFF4" minH="calc(100vh - 7.2rem)" mt="7.2rem" p="21.5px 39px 86px 42px">
          <Text color="#171725" fontSize="28px" fontWeight="bold" lineHeight="36px" mb="15px">
            Dashboard
          </Text>
          <Flex>
            <Flex direction="column">
              <OverviewCard />
            </Flex>
            <Flex></Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
