import React from "react";
import { useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";
import { activateAccount } from "../api/request";

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

const shwoToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

// github api

const VerifyEmail = ({route, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const code = route.params?.code;
  const email = route.params?.email;
  const onSubmit = (data) => {
  const dataToSend = { code: data.code, email: email };
    activateAccount(dataToSend).then((res) => {
      shwoToast(res.data?.message);
      navigation.navigate("Login");
    }
    ).catch((err) => {
      shwoToast(err.message);
    }
    );
  }
 
    
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
              Code de Verification envoyé à votre adresse email
              
            </Heading>
            
            <VStack space={3} mt="5">
              <FormControl isRequired>
                
                <Controller
                  control={control}
                  name="code"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChangeText={onChange}
                      value={value}
                      placeholder="Entrez le code Verification"
                      onBlur={onBlur}
                      InputLeftElement={
                        <FontAwesome
                          name="lock"
                          size={20}
                          style={{ marginLeft: 20 }}
                        />
                      }
                     
                    />
                  )}
                  rules={{
                    required: "le champ est obligatoire",
                    validate: (value) => {
                      console.log(value);
                      if (value ==code) {
                        return true;
                      } else {
                        return "Code incorrect";
                      }
                    }
                  }}
                  defaultValue=""
                />
                {errors.code && (
                  <Text style={{ color: "red" }}>{errors.code.message}</Text>
                )}
              </FormControl>
              
              <Button
                mt="2"
                colorScheme="indigo"
                onPress={handleSubmit(onSubmit)}
              >
                Verifier
              </Button>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  };

export default VerifyEmail;
