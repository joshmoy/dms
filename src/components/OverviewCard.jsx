import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import image1 from "../assets/green-exchange.svg";
import caret from "../assets/caret.svg";
import orange from "../assets/orange-curve.svg";
import image2 from "../assets/orange-companies.svg";
import image3 from "../assets/cancelled.svg";
import image4 from "../assets/purple-orders.svg";

const OverviewCard = () => {
  const data = [
    {
      text: "Total Exchange Pool Orders",
      icon: image1,
    },
    {
      text: "Total Companies",
      icon: image2,
    },
    {
      text: "Total Cancelled Orders",
      icon: image3,
    },
    {
      text: "Total Created Orders",
      icon: image4,
    },
  ];
  return (
    <Flex direction="column">
      {data?.map((el, id) => {
        return (
          <Box
            key={id}
            p="24px 21px 37px 25px"
            bgColor="#fff"
            borderRadius="12px"
            _notLast={{ mb: "40px" }}
          >
            <Flex justify="space-between" align="center" mb="5px">
              <Text fontSize="20px" fontWeight="bold" lineHeight="26px" color="#000" width="50%">
                {el.text}
              </Text>
              <Image boxSize="35px" src={el.icon} alt="" />
            </Flex>
            <Flex align="baseline" justify="space-between">
              <Flex align="baseline">
                <Text
                  color="brand.red"
                  fontSize="38px"
                  fontWeight="bold"
                  lineHeight="49px"
                  mr="15px"
                >
                  504
                </Text>
                <Image w="54px" h="29px" src={orange} alt="" />
              </Flex>
              <Flex align="center">
                <Text mr="5px">Today</Text>
                <Image src={caret} alt="" />
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default OverviewCard;
