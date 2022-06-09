import React, { useContext } from "react";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { ToastAndroid } from "react-native";
import Loader from "../components/Loader";
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
const shwoToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};
const { manifest } = Constants;

const api = `http://${manifest.debuggerHost.split(":")[0]}:3000/api/login`;

const Login = ({ navigation }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const UserContext = React.createContext();
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
  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post(api, data)
      .then((res) => {
        setLoading(false);
        shwoToast(res.data.msg);
        console.log(res.data);
        if (res.data.statut === 1) {
          navigation.navigate("Home");
        }
      })
      .catch((err) => {
        setLoading(false);
        shwoToast("Connexion impossible");
        console.log(err);
      });
    console.log(data);
    console.log(api);
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
        <UserContext.Provider value={{ show, setShow }}></UserContext.Provider>
        <Center w="100%" h="100%" bg="darkBlue.200">
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
              <FormControl isRequired>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      color={"white"}
                      placeholder="Email"
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
                    />
                  )}
                  name="email"
                  rules={{ required: "Field is required" }}
                  defaultValue=""
                />
                {errors.email && <Text>* Ce champs est obligatoire</Text>}
              </FormControl>
              <FormControl isRequired>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      type={show ? "password" : "text"}
                      color={"white"}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      InputRightElement={
                        <Button
                          variant="unstyled"
                          onPress={() => setShow(!show)}
                        >
                          <FontAwesome
                            OnPress={() => setShow(true)}
                            name={show ? "eye-slash" : "eye"}
                            size={25}
                            style={{ marginRight: 2 }}
                          />
                        </Button>
                      }
                      placeholder="Mot de passe"
                      InputLeftElement={
                        <FontAwesome
                          name="lock"
                          size={20}
                          style={{ marginLeft: 20 }}
                        />
                      }
                    />
                  )}
                  name="password"
                  defaultValue=""
                  rules={{ required: "Field is required" }}
                />
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
              <Button
                mt="2"
                colorScheme="indigo"
                onPress={handleSubmit(onSubmit)}
              >
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
  }
};

export default Login;
