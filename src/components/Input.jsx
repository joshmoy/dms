import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useState } from "react";

const CustomInput = (props) => {
  const {
    login,
    width,
    type,
    placeholder,
    password,
    name,
    label,
    id,
    margin,
    register,
    hideIcon,
    labelColor,
    value,
    ...rest
  } = props;

  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(() => !show);

  return (
    <Box w={width || "416px"}>
      <FormControl position="relative">
        <InputGroup
          d="flex"
          alignItems="center"
          bgColor="#fff"
          h="48px"
          border={focus ? "1px solid #053582" : "1px solid #E2E2EA"}
          borderRadius="10px"
        >
          <InputComponent
            password={password}
            login={login}
            type={type}
            name={name}
            id={id}
            value={value}
            hideIcon={hideIcon}
            register={register}
            setFocus={setFocus}
            {...rest}
          />
          <FormLabel
            position="absolute"
            top="50%"
            zIndex="4"
            px="7px"
            left="20px"
            bgColor="#fff"
            transform="translateY(-50%)"
            fontSize="1.4rem"
            m="0"
            lineHeight="18px"
            letterSpacing="-0.117188px"
            color={labelColor || "#B5B5BE"}
          >
            {label}
          </FormLabel>
          {password && (
            <InputRightAddon
              border="none"
              onClick={handleShow}
              cursor="pointer"
              bgColor="transparent"
            >
              {show ? (
                <ViewOffIcon boxSize="2rem" color="#BBBEC9" />
              ) : (
                <ViewIcon boxSize="2rem" color="#BBBEC9" />
              )}
            </InputRightAddon>
          )}
        </InputGroup>
      </FormControl>
    </Box>
  );
};

const InputComponent = (props) => {
  const { password, login, type, name, value, id, register, hideIcon, setFocus, show, ...rest } =
    props;

  const [length, setLength] = useState(value?.length || 0);

  const updateValue = (e) => {
    setLength(e.target.value.length);
  };
  return (
    <>
      {password ? (
        <>
          <StyledInput
            type={show ? "text" : "password"}
            name={name}
            id={id}
            defaultValue={value || ""}
            border="none"
            length={length}
            color="brand.text"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={updateValue}
            bgColor="transparent"
            zIndex="5"
            _focus={{ boxShadow: "none" }}
            fontSize="15px"
            {...register}
            p="20px"
            {...rest}
          />
        </>
      ) : (
        <>
          <StyledInput
            type={type || "text"}
            name={name}
            id={id}
            zIndex="5"
            color="brand.text"
            defaultValue={value || ""}
            border="none"
            length={length}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={updateValue}
            bgColor="transparent"
            _focus={{ boxShadow: "none" }}
            fontSize="15px"
            {...register}
            p="20px"
            {...rest}
          />
        </>
      )}
    </>
  );
};

const InputError = (props) => {
  return (
    <Text color={props.color || "#E24D4D"} fontSize="1.2rem" mt=".5rem">
      {props.text}
    </Text>
  );
};

const StyledInput = styled(Input)`
  &:focus {
    & + label {
      transform: translateY(-33px);
      font-size: 1.4rem;
    }
  }

  & + label {
    transform: ${({ length }) => (length > 0 ? "translateY(-33px)" : "0")};
    color: ${({ length }) => (length > 0 ? "#92929D" : "#B5B5BE")};
  }
`;
export { CustomInput, InputError };
