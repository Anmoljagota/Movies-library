import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode, "colormode");
  return (
    <>
      <Flex w={"95%"} m={"auto"} gap={"15%"} color={"#CECBD4"} fontSize={12}>
        <Flex w={"50%"} justifyContent={"space-between"} alignItems={"center"}>
          <Text>HOME</Text>
          <Text>CATALOG</Text>
          <Text>PRICING PLAN</Text>
          <Text>HELP</Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"35%"}>
          <Input placeholder="Search..." p={5} borderRadius={5} size={"sm"} />

          <Button colorScheme="teal" variant="outline">
            Login
          </Button>
          {colorMode === "light" ? (
            <MoonIcon
              onClick={toggleColorMode}
              cursor={"pointer"}
              fontSize={"1.3rem"}
            />
          ) : (
            <SunIcon
              onClick={toggleColorMode}
              cursor={"pointer"}
              fontSize={"1.3rem"}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
