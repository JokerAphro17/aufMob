import React from "react";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import Loader from "../components/Loader";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Aler from "../components/Aler";
import {
  NativeBaseProvider,
  Box,
  Spinner,
  Select,
  CheckIcon,
  WarningOutlineIcon,
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
  Modal,
  Image,
  Alert,
} from "native-base";
import { set } from "react-native-reanimated";
const { manifest } = Constants;

const api = `http://${manifest.debuggerHost.split(":")[0]}:3000/api/depots`;

const Depot = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [montant, setMontant] = React.useState(0);
  const [id1xbet, setId1xbet] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [systeme, setSysteme] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setVisible(!visible);
  };

  const Modale = ({ montant, id1xbet, visibility }) => {
    return (
      <Modal isOpen={visible}>
        <Modal.Content w="70%">
          <Modal.Header>
            <Text textAlign={"center"}>Confirmation</Text>
          </Modal.Header>
          <Modal.Body>
            <Text>
              Vous allez deposer <Text fontWeight={"bold"}>{montant}</Text>Frcfa
              sur le compte 1xbet <Text fontWeight={"bold"}>{id1xbet}</Text>
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setVisible(false);
                }}
              >
                annuler
              </Button>
              <Button
                onPress={() => {
                  setLoading(true);
                  const body = {
                    montant: montant,
                    id_1xbet: id1xbet,
                    user_id: "1",
                    service: systeme,
                  };
                  axios
                    .post(api, body)
                    .then((res) => {
                      setShowAlert(true);
                      setLoading(false);
                      setVisible(false);
                      setTimeout(() => {
                        setShowAlert(false);
                      }, 5000);
                      setSysteme("");
                      reset({
                        montant: 0,
                        id1xbet: 0,
                        numero: 0,
                      });
                      console.log(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                valider
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
  };

  return (
    <NativeBaseProvider>
      <Aler show={showAlert} setShow={setShowAlert} />
      {isLoading ? (
        <Loader />
      ) : (
        <KeyboardAwareScrollView>
          <Center w="100%" h="100%">
            <Box safeArea p="2" w="90%" py="8">
              <Modale
                montant={montant}
                id1xbet={id1xbet}
                visibility={visible}
              />
              <Heading
                size="lg"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
                fontWeight="semibold"
              >
                Depot Rapide sur votre compte 1xbet!! {systeme}
              </Heading>

              <VStack space={3} mt="5">
                <FormControl isRequired>
                  <Controller
                    control={control}
                    name="id1xbet"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        onChangeText={onChange}
                        onChange={(e) => {
                          setId1xbet(e.nativeEvent.text);
                        }}
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
                    <Text style={{ color: "red" }}>
                      <FontAwesome5
                        name="exclamation-triangle"
                        size={20}
                        color="#FFA500"
                      />
                      {errors.id1xbet.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl w="100%" isRequired>
                  <Controller
                    control={control}
                    name="service"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Select
                        minWidth="200"
                        value={value}
                        name="service"
                        placeholder="service de payement"
                        onBlur={onBlur}
                        onValueChange={(value) => {
                          setSysteme(value);
                          onChange(value);
                        }}
                        accessibilityLabel="Choose Service"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1"
                      >
                        <Select.Item label="Orange Money" value="om" />
                        <Select.Item label="USD Perfect Money" value="pm" />
                        <Select.Item
                          label="Bitcoin "
                          value="btc"
                          leftIcon={
                            <FontAwesome5
                              name="bitcoin"
                              size={20}
                              color="#FFA500"
                            />
                          }
                        />
                        <Select.Item
                          label="Paypal"
                          value="pp"
                          leftIcon={
                            <FontAwesome5
                              name="paypal"
                              size={20}
                              color="#002c8b"
                            />
                          }
                        />
                      </Select>
                    )}
                    rules={{
                      required: "Champs obligatoire",
                    }}
                    defaultValue=""
                  />
                  {errors.service && (
                    <Text style={{ color: "red" }}>
                      <FontAwesome5
                        name="exclamation-triangle"
                        size={20}
                        color="#FFA500"
                      />
                      {errors.service.message}
                    </Text>
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
                        onChange={(e) => setMontant(e.nativeEvent.text)}
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
                    <Text style={{ color: "red" }}>
                      <FontAwesome5
                        name="exclamation-triangle"
                        size={20}
                        color="#FFA500"
                      />
                      {errors.montant.message}
                    </Text>
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
                            name="wallet"
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
                    <Text style={{ color: "red" }}>
                      <FontAwesome5
                        name="exclamation-triangle"
                        size={20}
                        color="#FFA500"
                      />
                      {errors.numero.message}
                    </Text>
                  )}
                </FormControl>

                <Button
                  mt="2"
                  bg={systeme === "om" ? "orange.600" : "blue.700"}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text>Depot</Text>
                </Button>
              </VStack>
            </Box>
          </Center>
        </KeyboardAwareScrollView>
      )}
    </NativeBaseProvider>
  );
};

export default Depot;
