import React from "react";

import { TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Center,
  VStack,
  Heading,
  HStack,
  Button,
  FormControl,
  Link,
  Text,
  Input,
  Image,
} from "native-base";

const Login = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center w="100%" h="100%" bg="darkBlue.800">
        <HStack justifyContent="center">
          <Image source={require("../assets/img/logo.png")} alt="logo" />
        </HStack>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="800"
            color="white"
            _dark={{
              color: "warmGray.50",
            }}
          >
            BIENVENUE
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Connecter-vous pour continuer !
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Mot de passe</FormControl.Label>
              <Input type="password" />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Mot de passe oublié?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Connexion
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                mt="2"
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Je suis nouveau.
              </Text>
              <Button
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                variant="link"
                onPress={() => {
                  navigation.navigate("Signup");
                }}
              >
                M'inscrire
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};
export default Login;
