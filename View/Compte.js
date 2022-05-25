import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  Box,
  Center,
  FormControl,
  Spinner,
  Heading,
  HStack,
  NativeBaseProvider,
  VStack,
  Button,
  Input,
} from "native-base";
import { useForm, Controller } from "react-hook-form";

const Loader = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};

const Test = ({ params }) => {
  const [show, setShow] = React.useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      date_naissance: "",
    },
  });
  const onSubmit = (data) => {
    return console.log(data);
  };
  return (
    <NativeBaseProvider>
      <Center>
        <VStack space={2} mt="3" h="85%">
          <FormControl w="80" mb="4">
            <Controller
              control={control}
              name="nom"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  color={"white"}
                  placeholder="Nom"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </FormControl>

          <FormControl w="80" mb="4">
            <Controller
              control={control}
              name="prenom"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  color={"white"}
                  placeholder="Prenom"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              defaultValue=""
            />
          </FormControl>
          <FormControl w="80" mb="4">
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  color={"white"}
                  placeholder="Email"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </FormControl>
          <FormControl w="80" mb="4">
            <Controller
              control={control}
              name="telephone"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  color={"white"}
                  placeholder="Telephone"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </FormControl>
          <FormControl w="80" mb="4">
            <Controller
              control={control}
              type="date"
              name="date_naissance"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  color={"white"}
                  placeholder="Date de naissance"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </FormControl>
          <Button colorScheme="indigo" onPress={handleSubmit(onSubmit)}>
            Valider les modification
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default Test;
