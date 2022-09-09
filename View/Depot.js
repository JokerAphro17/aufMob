import React from "react";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import Loader from "../components/Loader";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
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
import AwesomeAlert from "react-native-awesome-alerts";
const { manifest } = Constants;

const Depot = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [errorConfirm, setErrorConfirm] = React.useState(false);
  const navigation = useNavigation();
  const [formData, setFormData] = React.useState({
    devise_envoyee: "",
    devise_recue: "",
    montant_envoye: "",
    montant_recu: "",
    adress_sender: "",
    adress_receiver: "",
    adress_confirmation: "",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setVisible(!visible);
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
              <Heading
                size="lg"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
                fontWeight="semibold"
              >
                Achter la crypto de votre choix
              </Heading>

              <VStack space={3} mt="5">
                <FormControl w="100%" isRequired>
                  <Controller
                    control={control}
                    name="crypto"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Select
                        minWidth="200"
                        value={value}
                        name="crypto"
                        placeholder="selectionnez la crypto"
                        onBlur={onBlur}
                        onValueChange={(value) => {
                          setFormData({ ...formData, devise_recu: value });
                          onChange(value);
                        }}
                        accessibilityLabel="Choisir la crypto"
                        _selectedItem={{
                          bg: "coolGray.100",
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1"
                      >
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
                          label="Ethereum"
                          value="eth"
                          leftIcon={
                            <FontAwesome5
                              name="ethereum"
                              size={20}
                              color="#002c8b"
                            />
                          }
                        />
                        <Select.Item
                          label="Litecoin"
                          value="ltc"
                          leftIcon={
                            <FontAwesome5
                              name="coins"
                              size={20}
                              color="#FFA500"
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
                  {errors.crypto && (
                    <Text style={{ color: "red" }}>
                      <FontAwesome5
                        name="exclamation-triangle"
                        size={20}
                        color="#FFA500"
                      />
                      {errors.crypto.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl isRequired>
                  <Controller
                    control={control}
                    name="adress"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        onChangeText={(text) => {
                          setFormData({ ...formData, adress_receiver: text });
                          onChange(text);
                        }}
                        value={value}
                        placeholder="Entrer votre adresse de reception"
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
                    }}
                    defaultValue=""
                  />
                  {errors.adress && (
                    <Text style={{ color: "red" }}>
                      <FontAwesome5
                        name="exclamation-triangle"
                        size={20}
                        color="#FFA500"
                      />
                      {errors.adress.message}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired>
                  <Controller
                    control={control}
                    name="montant"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        value={value}
                        placeholder="Entrer le nombre de piece"
                        onChangeText={(text) => {
                          setFormData({ ...formData, montant_recue: text });
                          onChange(text);
                        }}
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
                        value: /^\d+(\.\d{1,2})?$/,
                        message: "Veuillez entrer un nombre de piece vaide",
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

                <Button mt="2" bg={"blue.400"} onPress={handleSubmit(onSubmit)}>
                  <Text>Suivant</Text>
                </Button>
              </VStack>
            </Box>
            <AwesomeAlert
              show={visible}
              showProgress={false}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              customView={
                <Box>
                  <Heading size="lg" color="coolGray.800" fontWeight="semibold">
                    Confirmer l'adresse de reception
                  </Heading>
                  <Input
                    value={formData.adress_confirmation}
                    onChangeText={(text) => {
                      setFormData({ ...formData, adress_confirmation: text });
                    }}
                    placeholder="Entrer l'adresse de reception"
                  />
                  {errorConfirm && (
                    <Text style={{ color: "red" }}>
                      <FontAwesome5
                        name="exclamation-triangle"
                        size={20}
                        color="#FFA500"
                      />
                      Adress non compatible
                    </Text>
                  )}
                </Box>
              }
              cancelText="Annuler"
              confirmText="Confirmer"
              confirmButtonColor="#DD6B55"
              onCancelPressed={() => {
                setVisible(false);
              }}
              onConfirmPressed={() => {
                console.log(formData.adress_receiver);
                if (formData.adress_confirmation === formData.adress_receiver) {
                  setVisible(false);
                  navigation.navigate("Card", { data: formData });
                  return;
                }
                setErrorConfirm(true);
              }}
            />
          </Center>
        </KeyboardAwareScrollView>
      )}
    </NativeBaseProvider>
  );
};

export default Depot;
