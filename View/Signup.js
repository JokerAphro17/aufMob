import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";
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
    <Center w="100%" h="90%">
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
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  InputLeftElement={
                    <FontAwesome
                      name="user"
                      size={20}
                      style={{ marginLeft: 20 }}
                    />
                  }
                  placeholder="Email"
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  type="password"
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  InputLeftElement={
                    <FontAwesome
                      name="lock"
                      size={20}
                      style={{ marginLeft: 20 }}
                    />
                  }
                  placeholder="Mot de passe"
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              control={control}
              name="passwordConfirm"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  type="password"
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  InputLeftElement={
                    <FontAwesome
                      name="lock"
                      size={20}
                      style={{ marginLeft: 20 }}
                    />
                  }
                  placeholder="Retapez votre mot de passe"
                />
              )}
            />
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
