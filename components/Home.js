import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";
import { ImageBackground } from "react-native";
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
    <Box bg="primary.800" h="100%">
      <VStack space={5} alignItems="center">
        <Box w="80%" h="10%" bg="indigo.300" rounded="md" shadow={3} />
        <Button w="80%" h="25%" bg="indigo.300" rounded="md" shadow={3}>
          <ImageBackground
            source={require("../assets/img/1xbet.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <Heading color="white">
              <FontAwesome name="money" size={20} />
              DEPOT 1XBET
            </Heading>
          </ImageBackground>
        </Button>
        <Button w="80%" h="25%" bg="indigo.500" rounded="md" shadow={3} />
        <Button w="80%" h="25%" bg="indigo.700" rounded="md" shadow={3} />
      </VStack>
    </Box>
  </NativeBaseProvider>
);

export default Home;
