import React from "react";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { ToastAndroid } from "react-native";
import Loader from "../components/Loader";
import Modale from "./Modal";
import {
  NativeBaseProvider,
  Box,
  Spinner,
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
  Alert,
} from "native-base";
import { set } from "react-native-reanimated";
const Depot = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setLoading(false);
  };

  return (
    <NativeBaseProvider>
      <Center w="100%" h="70%">
        <Box safeArea p="2" w="90%" py="8">
          <Modale />
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold"
          >
            Depot Rapide sur votre compte 1xbet!!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl isRequired>
              <Controller
                control={control}
                name="id1xbet"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChangeText={onChange}
                    value={value}
                    placeholder="ID 1xbet"
                    onBlur={onBlur}
                    InputLeftElement={
                      <FontAwesome5
                        name="user"
                        size={20}
                        style={{ marginLeft: 20 }}
                      />
                    }
                  />
                )}
                rules={{
                  required: "Champs obligatoire",
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: "Veuillez entrer un numero 1xbet Valide",
                  },
                }}
                defaultValue=""
              />
              {errors.id1xbet && (
                <Text style={{ color: "red" }}>{errors.id1xbet.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <Controller
                control={control}
                name="montant"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChangeText={onChange}
                    value={value}
                    placeholder="montant"
                    onBlur={onBlur}
                    InputLeftElement={
                      <FontAwesome5
                        name="coins"
                        size={20}
                        style={{ marginLeft: 20 }}
                      />
                    }
                  />
                )}
                rules={{
                  required: "Champs obligatoire",
                  pattern: {
                    value: /^[0-9]{1,}$/,
                    message: "Veuillez entrer un montant Valide",
                  },
                }}
                defaultValue=""
              />
              {errors.montant && (
                <Text style={{ color: "red" }}>{errors.montant.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <Controller
                control={control}
                name="numero"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    type="number"
                    onChangeText={onChange}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    value={value}
                    onBlur={onBlur}
                    InputLeftElement={
                      <FontAwesome5
                        name="phone"
                        size={20}
                        style={{ marginLeft: 20 }}
                      />
                    }
                    placeholder="Numero de Depot"
                  />
                )}
                rules={{
                  required: "Champs obligatoire",
                  pattern: {
                    value: /^[a-zA-Z0-9]{8}$/i,
                    message: "Veuillez entrer un numero Valide",
                  },
                }}
                defaultValue=""
              />
              {errors.numero && (
                <Text style={{ color: "red" }}>{errors.numero.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <Controller
                control={control}
                name="otp"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    type="number"
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    InputLeftElement={
                      <FontAwesome5
                        name="lock"
                        size={20}
                        style={{ marginLeft: 20 }}
                      />
                    }
                    placeholder="code OTP"
                  />
                )}
                rules={{
                  required: "Champs obligatoire",
                  //pattern for password confirmation
                  pattern: {
                    value: /^[0-9]{6}$/i,
                    message: "Code OTP incorrect",
                  },
                }}
              />
              {errors.otp && (
                <Text style={{ color: "red" }}>{errors.otp.message}</Text>
              )}
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={handleSubmit(onSubmit)}
            >
              {isLoading ? <Spinner /> : <Text>Depot</Text>}
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};
export default Depot;
