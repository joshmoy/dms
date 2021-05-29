import React from "react";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import logo from "./assets/full-logo.svg";
import delivery from "./assets/delivery.svg";
import { LoginForm, RegisterForm } from "./components";

const Auth = ({ login }) => {
  return (
    <Box
      bgColor="brand.bg"
      w="100vw"
      p={login ? "14px 150px 0 57.5px" : "14px 154px 80px 57.5px"}
      minH="100vh"
    >
      <Box>
        <Image w="104.5px" h="36px" src={logo} alt="logo" />
      </Box>
      <Flex mt="30px" w="100%" maxW="1156px" justify="space-between">
        <Flex direction="column" justify="center" align="center" ml="72.5px" w="52%">
          <Image w="157px" mb="32px" h="157px" src={delivery} alt="logo" />
          <Text fontSize="40px" fontWeight="500" lineHeight="52.08px" align="center" color="#000">
            Let’s help you manage your riders and delivery systems.
          </Text>
          <Text
            mt="25px"
            color="brand.gray"
            fontSize="14px"
            lineHeight="20px"
            align="center"
            w="456px"
          >
            Every logistics company whether it’s a multi-national branding <br /> corporation or a
            regular local deserves the basic standard necessities <br /> in achieving a high service
            delivery
          </Text>
          <Button
            color="#fff"
            bgColor="brand.blue"
            h="44px"
            px="23px"
            fontWeight="bold"
            fontSize="14px"
            mt="40px"
            borderRadius="10px"
            _focus={{ boxShadow: "none", outline: "none" }}
            _active={{ bgColor: "brand.blue" }}
            _hover={{ bgColor: "brand.blue", transform: "scale(1.05)" }}
          >
            Get Started
          </Button>
        </Flex>
        <Box
          bgColor="#fff"
          w="44%"
          boxShadow="3px -5px 40px rgba(205, 205, 212, 0.1)"
          borderRadius="20px"
          p="48px"
        >
          {login ? <LoginForm /> : <RegisterForm />}
        </Box>
      </Flex>
    </Box>
  );
};

export default Auth;
