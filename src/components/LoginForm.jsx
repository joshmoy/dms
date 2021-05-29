import React, { useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CustomInput, InputError } from "./Input";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup.string().required("Password is required").min(5),
});
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (inputVal) => {
    setIsLoading(true);
    // console.log(inputVal);
    toast.success("Login successful");
    reset();
    setTimeout(() => {
      setIsLoading(false);
      history.push("/dashboard");
    }, 2000);
  };
  return (
    <Box>
      <Text fontSize="28px" fontWeight="bold" lineHeight="36px" mb="8px" color="brand.header">
        You’re Welcome Back!
      </Text>
      <Text lineHeight="18px" color="#404040">
        Enter the following information below
      </Text>
      <Box as="form" mt="40px" onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label="Email Address" name="email" id="email" register={register("email")} />
        {errors?.email && <InputError text={errors?.email?.message} />}
        <Box mt="24px">
          <CustomInput
            label="Password"
            name="password"
            id="password"
            register={register("password")}
            password
          />
          {errors?.password && <InputError text={errors?.password?.message} />}
        </Box>
        <Text cursor="pointer" color="brand.blue" align="right" mt="24px">
          Forgot Password?
        </Text>
        <Flex mt="40px" align="center" justify="space-between">
          <Text>
            Just joining us here?{" "}
            <Link to="/register">
              <Text as="span" cursor="pointer" color="brand.blue">
                Register Now
              </Text>
            </Link>
          </Text>
          <Button
            type="submit"
            color="#fff"
            isLoading={isLoading}
            bgColor="brand.blue"
            h="44px"
            fontWeight="bold"
            px="23px"
            fontSize="14px"
            borderRadius="10px"
            _focus={{ boxShadow: "none", outline: "none" }}
            _active={{ bgColor: "brand.blue" }}
            _hover={{ bgColor: "brand.blue", transform: "scale(1.05)" }}
          >
            Login
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export { LoginForm };
