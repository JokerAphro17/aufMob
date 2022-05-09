import React from "react";
import { FontAwesome } from "@expo/vector-icons";
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
  Alert,
} from "native-base";

const Login = ({ navigation }) => {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      <Alert w={100} h={100} status="danger" colorScheme={"infos"}>
        <Text>Veuillez remplir tous les champs</Text>
      </Alert>;
    }
    console.log("gko");
    console.log(email);
  };
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
            <FormControl>
              <Input
                color={"white"}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                InputLeftElement={
                  <FontAwesome
                    name="user"
                    size={20}
                    style={{ marginLeft: 20 }}
                  />
                }
              />
            </FormControl>
            <FormControl>
              <Input
                type={show ? "password" : "text"}
                color={"white"}
                onChangeText={(text) => setPassword(text)}
                InputRightElement={
                  <Button variant="unstyled" onPress={() => setShow(!show)}>
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
            <Button mt="2" colorScheme="indigo" OnPress={handleLogin()}>
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
