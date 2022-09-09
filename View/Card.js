import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";

import {
  VStack,
  Box,
  Text,
  Center,
  Input,
  HStack,
  Stack,
  AspectRatio,
  Heading,
  Button,
} from "native-base";
import CreditCardDisplay from "react-native-credit-card-display";
import Swiper from "react-native-swiper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { payment } from "../api/request";
import useAuth from "./../utilities/hook/useAuth";

const Card = ({ navigation, route }) => {
  const [card, setCard] = React.useState({
    cardNumber: null,
    expirationDate: null,
    cvv: null,
    cardHolderName: null,
  });
  const [flip, setFlip] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { data } = route.params;
  const montant = parseInt(data.montant_recu) * 3784;
  const auth = useAuth();
  const token = auth?.token;
  data.adress_sender = card.cardNumber;
  data.devise_envoyee = "xof";
  data.montant_recu = montant;

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await payment(data, token);
      if (response?.data?.success) {
        setVisible(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <VStack>
        <Box width={"100%"} mt={5}>
          <Center>
            <Box alignItems="center">
              <Box
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Box width={"100%"}>
                      <Center>
                        <CreditCardDisplay
                          number={card.cardNumber || "0000 0000 0000 0000"}
                          cvc={card.cvv || "000"}
                          expiration={card.expirationDate}
                          name={card.cardHolderName}
                          fontSize={20}
                          flipped={flip}
                          width={300}
                        />
                      </Center>
                    </Box>
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      <Text>INFO DE LA CARTE</Text>
                    </Heading>
                    <HStack space={2} mt={2} alignItems="center">
                      <Swiper style={{ height: 120 }}>
                        <Input
                          placeholder="Nom du titulaire"
                          onChangeText={(text) =>
                            setCard({ ...card, cardHolderName: text })
                          }
                        />
                        <Input
                          placeholder="Numéro de carte"
                          onChangeText={(text) =>
                            setCard({ ...card, cardNumber: text })
                          }
                        />
                        <Input
                          placeholder="Date d'expiration"
                          onChangeText={(text) =>
                            setCard({ ...card, expirationDate: text })
                          }
                        />
                        <Input
                          placeholder="Code de sécurité(cvc)"
                          onChangeText={(text) =>
                            setCard({ ...card, cvv: text })
                          }
                          onBlur={() => setFlip(true)}
                        />
                      </Swiper>
                    </HStack>
                  </Stack>
                  <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="space-between"
                  >
                    <Button
                      onPress={() => {
                        setVisible(true);
                      }}
                      rounded="lg"
                      size="lg"
                      variant="solid"
                      color="primary"
                      shadowColor="coolGray.200"
                      shadowOffset={{ width: 0, height: 2 }}
                      shadowOpacity={0.8}
                      shadowRadius={2}
                      style={{ width: "100%" }}
                    >
                      <Text>Payer</Text>
                    </Button>
                    <AwesomeAlert
                      show={visible}
                      showProgress={false}
                      title="Confirmer-vous le paiement?"
                      closeOnTouchOutside={true}
                      closeOnHardwareBackPress={false}
                      showCancelButton={true}
                      showConfirmButton={true}
                      cancelText="Annuler"
                      confirmText="Confirmer"
                      confirmButtonColor="#DD6B55"
                      onCancelPressed={() => {
                        setVisible(false);
                      }}
                      onConfirmPressed={() => handleSubmit(data)}
                    />
                    <AwesomeAlert
                      show={isLoading}
                      showProgress={true}
                      title="Paiement en cours"
                      closeOnTouchOutside={false}
                      closeOnHardwareBackPress={false}
                      showCancelButton={false}
                      showConfirmButton={false}
                    />
                  </HStack>
                </Stack>
              </Box>
            </Box>
          </Center>
        </Box>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default Card;
