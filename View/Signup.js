import React from "react";
import { useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";
import { signupUsers } from "../api/request";
import Loader from "../components/Loader";
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
  useToast,
  Spinner,
  Text,
} from "native-base";

export const shwoToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};


const Signup = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
 
  const signup = (data) => {
    setLoading(true);
    signupUsers(data).then((res) => {
        setLoading(false);
        shwoToast(res.data?.message);
        code = res.data?.data?.code_verified;
        navigation.navigate("verifyEmail", { email: data.email , code: code});
        shwoToast(res.data.message);
      }
    ).catch((err) => {
      setLoading(false);
      shwoToast(err.message);
    });
  }

    
    


  const onSubmit = (data) => {
   signup(data);
  };
  if (isLoading) {
    return (
      <NativeBaseProvider>
        <Loader />
      </NativeBaseProvider>
    );
  } else {
    return (
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
              <FormControl isRequired>
                <Controller
                  control={control}
                  name="lastname"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChangeText={onChange}
                      value={value}
                      placeholder="Nom"
                      onBlur={onBlur}
                      InputLeftElement={
                        <FontAwesome
                          name="user"
                          size={20}
                          style={{ marginLeft: 20 }}
                        />
                      }
                    />
                  )}
                  rules={{
                    required: "Champs obligatoire",
                  }}
                  defaultValue=""
                />
                {errors.lastname && (
                  <Text style={{ color: "red" }}>{errors.lastname.message}</Text>
                )}
              </FormControl>
              <FormControl isRequired>
                <Controller
                  control={control}
                  name="firstname"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChangeText={onChange}
                      value={value}
                      placeholder="Prenom"
                      onBlur={onBlur}
                      InputLeftElement={
                        <FontAwesome
                          name="user"
                          size={20}
                          style={{ marginLeft: 20 }}
                        />
                      }
                    />
                  )}
                  rules={{
                    required: "Champs obligatoire",
                  }}
                  defaultValue=""
                />
                {errors.firstname && (
                  <Text style={{ color: "red" }}>{errors.firstname.message}</Text>
                )}
              </FormControl>
              <FormControl isRequired>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChangeText={onChange}
                      value={value}
                      placeholder="Email"
                      onBlur={onBlur}
                      InputLeftElement={
                        <FontAwesome
                          name="envelope"
                          size={20}
                          style={{ marginLeft: 20 }}
                        />
                      }
                    />
                  )}
                  rules={{
                    required: "Champs obligatoire",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Email invalide",
                    },
                  }}
                  defaultValue=""
                />
                {errors.email && (
                  <Text style={{ color: "red" }}>{errors.email.message}</Text>
                )}
              </FormControl>
              <FormControl isRequired>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      type="password"
                      onChangeText={onChange}
                      onChange={(e) => {
                        setPassword(e.nativeEvent.text);
                        onChange(e);
                      }}
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
                  rules={{
                    required: "Champs obligatoire",
                    pattern: {
                      value: /^[a-zA-Z0-9]{6,}$/i,
                      message: "Mot de passe trop court",
                    },
                  }}
                  defaultValue=""
                />
                {errors.password && (
                  <Text style={{ color: "red" }}>
                    {errors.password.message}
                  </Text>
                )}
              </FormControl>
              <FormControl isRequired>
                <Controller
                  control={control}
                  name="password_confirmation"
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
                  rules={{
                    required: "Champs obligatoire",
                    //pattern for password confirmation
                    validate: (value) =>
                      value === password ||
                      "Les mots de passe ne correspondent pas",
                  }}
                />
                {errors.password_confirmation && (
                  <Text style={{ color: "red" }}>
                    {errors.password_confirmation.message}
                  </Text>
                )}
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                onPress={handleSubmit(onSubmit)}
              >
                Inscription
              </Button>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  }
};

export default Signup;
