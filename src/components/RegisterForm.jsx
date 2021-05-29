import React, { useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CustomInput, InputError } from "./Input";

const schema = yup.object().shape({
  company_name: yup.string().required("Company name is required"),
  last_name: yup.string().required("Last name is required"),
  company_address: yup.string().required("Company address is required"),
  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(11, "Must be at least 11 digits"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup.string().required("Password is required").min(5),
});
const RegisterForm = () => {
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
      <Flex>
        <Box h="6px" w="271px" borderRadius="3px" bgColor="brand.blue"></Box>
        <Box h="6px" w="145px" borderRadius="0 3px 3px 0" bgColor="rgba(57, 14, 150, 0.08)"></Box>
      </Flex>
      <Text
        fontSize="28px"
        fontWeight="bold"
        lineHeight="36px"
        mb="8px"
        mt="40px"
        color="brand.header"
      >
        Basic Information
      </Text>
      <Text lineHeight="18px" color="#404040">
        Enter the following information below
      </Text>
      <Box as="form" mt="40px" onSubmit={handleSubmit(onSubmit)}>
        <Flex justify="space-between" mb="24px">
          <Box w="200px">
            <CustomInput
              width="200px"
              label="Company Name"
              name="company_name"
              id="company_name"
              register={register("company_name")}
            />
            {errors?.company_name && <InputError text={errors?.company_name?.message} />}
          </Box>
          <Box w="200px">
            <CustomInput
              width="200px"
              label="Last Name"
              name="last_name"
              id="last_name"
              register={register("last_name")}
            />
            {errors?.last_name && <InputError text={errors?.last_name?.message} />}
          </Box>
        </Flex>
        <CustomInput
          label="Company Address"
          name="company_address"
          id="company_address"
          register={register("company_address")}
        />
        {errors?.email && <InputError text={errors?.email?.message} />}
        <Box mt="24px">
          <CustomInput
            label="Phone Number"
            name="phone_number"
            id="phone_number"
            register={register("phone_number")}
          />
          {errors?.phone_number && <InputError text={errors?.phone_number?.message} />}
        </Box>
        <Box mt="24px">
          <CustomInput
            label="Company Email Address"
            name="email"
            id="email"
            register={register("email")}
          />
          {errors?.email && <InputError text={errors?.email?.message} />}
        </Box>
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
        <Text mt="24px">
          By clicking "Next" you agree to our{" "}
          <Text as="span" cursor="pointer" color="brand.blue">
            Terms of Service, Privacy Policy,
          </Text>{" "}
          and to receive marketing communications from Envoy.
        </Text>
        <Flex mt="40px" align="center" justify="space-between">
          <Text>
            Got an account?{" "}
            <Link to="/login">
              <Text as="span" cursor="pointer" color="brand.blue">
                Sign in
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
            Register
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export { RegisterForm };
