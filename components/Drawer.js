import * as React from "react";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  Link,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
import Test from "../View/Test";
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}
const fbUrl = "https://www.facebook.com/";
const telegramUrl = "https://t.me/";
const whatsappUrl = "https://wa.me/";

const getIcon = (screenName) => {
  switch (screenName) {
    case "Mon Compte":
      return "user";
    case "Depot":
      return "plus";
    case "Retrait":
      return "coins";
    case "Coupon du jour":
      return "receipt";
    case "Comment ça marche ?":
      return "question";
    case "Support Technique/assistance":
      return "headset";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Nom du client
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            sonmail@xxx.com / 123456789
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<FontAwesome5 name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              <Heading fontSize="20">
                <Text>Rejoignez-nous sur :</Text>
              </Heading>
            </Text>
            <VStack space="3">
              <Link px="5" py="3" href={fbUrl}>
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<FontAwesome5 name="facebook" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Facebook
                  </Text>
                </HStack>
              </Link>
              <Link px="5" py="2" href={whatsappUrl}>
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<FontAwesome5 name="whatsapp" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Whatsapp
                  </Text>
                </HStack>
              </Link>
              <Link px="5" py="3" href={telegramUrl}>
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<FontAwesome5 name="telegram" />}
                  />
                  <Text fontWeight="500" color="gray.700">
                    Telegram
                  </Text>
                </HStack>
              </Link>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Mon Compte" component={Test} />
        <Drawer.Screen name="Depot" component={Component} />
        <Drawer.Screen name="Retrait" component={Component} />
        <Drawer.Screen name="Coupon du jour" component={Component} />
        <Drawer.Screen name="Comment ça marche ?" component={Component} />
        <Drawer.Screen
          name="Support Technique/assistance"
          component={Component}
        />
      </Drawer.Navigator>
    </Box>
  );
}
export default function Drawer() {
  return (
    <NativeBaseProvider>
      <MyDrawer />
    </NativeBaseProvider>
  );
}
