import React from "react";
import { Text, View } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Image,
} from "native-base";
const Signup = () => (
  <NativeBaseProvider>
    <Center w="100%" h="100%">
      <HStack justifyContent="center">
        <Image source={require("../assets/img/logo.png")} alt="logo" />
      </HStack>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Vous n'avez pas de compte!
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Inscrivez-vous pour continuer
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Mot de passe</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirmer le mot de passe</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Inscription
          </Button>
        </VStack>
      </Box>
    </Center>
  </NativeBaseProvider>
);

export default Signup;
