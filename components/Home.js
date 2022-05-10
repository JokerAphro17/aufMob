import React from "react";
import { NativeBaseProvider } from "native-base";
import {
  Center,
  HStack,
  Image,
  Box,
  Heading,
  VStack,
  Button,
  FormControl,
  Input,
  Link,
  Text,
  Alert,
} from "native-base";

const Home = ({ navigation }) => (
  <NativeBaseProvider>
    <Center w="100%" h="100%" bg="darkBlue.200">
      <HStack justifyContent="center">
        <Image source={require("../assets/img/logo.png")} alt="logo" />
      </HStack>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="800"
          color="white"
          _dark={{ color: "warmGray.50" }}
        >
          BIENVENUE
        </Heading>
      </Box>
    </Center>
  </NativeBaseProvider>
);

export default Home;
