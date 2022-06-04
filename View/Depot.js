import React from "react";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import Loader from "../components/Loader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
const Depot = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const [montant, setMontant] = React.useState(0);
  const [id1xbet, setId1xbet] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setVisible(true);
    setLoading(false);
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
                  setVisible(false);
                  setLoading(true);
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
      {false ? (
        <Spinner />
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
                      {errors.id1xbet.message}
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
                      {errors.montant.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl w="100%" isRequired isInvalid>
                  <FormControl.Label>Choose service</FormControl.Label>

                  <Controller
                    control={control}
                    name="service"
                    render={({ field: { onChange, onBlur, value } }) => (

                  <Select
                    minWidth="200"
                    
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
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
                      }}
                    />
                    <Select.Item
                      label="Paypal"
                      value="pp"
                      leftIcon={
                        <FontAwesome5 name="paypal" size={20} color="#002c8b" />
                      }
                    />
                  </Select>
                    )
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Please make a selection!
                  </FormControl.ErrorMessage>
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
                      {errors.numero.message}
                    </Text>
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
                            name=""
                            size={20}
                            style={{ marginLeft: 20 }}
                          />
                        }
                        placeholder="code OTP"
                      />
                    )}
                    rules={{
                      required: "Champs obligatoire",
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
                  colorScheme="teal"
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
