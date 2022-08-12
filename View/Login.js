import React, { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { ToastAndroid } from "react-native";
import {  signinUsers, sendActivateCodeAgaint } from "../api/request"
import Loader from "../components/Loader";
import useAuth from '../utilities/hook/useAuth';
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
export const shwoToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

const Login = ({ navigation }) => {
  const [isLoading, setLoading] = React.useState(false);
  const auth = useAuth();
  const [show, setShow] = React.useState(true);
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
  

  const login = (data) => {
    setLoading(true);
    signinUsers(data)
      .then((res) => {
        setLoading(false);
        if (res.data?.success) {
          shwoToast(res.data?.message);
          auth.setUser(res.data?.data);
          navigation.navigate("Home");
        } else {
          shwoToast(res.data.status);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.status === 403) {
          shwoToast(err.errors);
          sendActivateCodeAgaint(data.email).then((res) => {
            if (res.data?.success) {
              shwoToast(res.data?.message);
            } else {
              shwoToast(res.data.message);
            }
          }

          );
        } else {
          shwoToast("Erreur!! probleme de connexion");
        }
        console.log(err);
      }
      );
  };
  
  


  const onSubmit = async (data) => {
    
    login(data);
    console.log(data);

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
                      placeholder={"Email"}
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
                  rules={{ required: "Field is required",
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "mail invalde" } }}
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
