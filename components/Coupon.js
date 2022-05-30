import React from "react";
import { VStack, Box, Divider, Heading, Text } from "native-base";
import { ImageBackground } from "react-native";

export default function Coupon(props) {
  return (
    <Box
      borderRadius="20"
      m="2"
      borderColor="primary.500"
      borderWidth="2"
      bgColor={"primary.500"}
      shadow={5}
    >
      <VStack space="4" divider={<Divider />}>
        <ImageBackground
          source={require("../assets/img/1xbet.png")}
          style={{ width: "100%" }}
        >
          <Box
            px="4"
            pt="4"
            bgColor={"darkBlue.500"}
            width="100%"
            borderTopRadius={20}
          >
            <Heading fontSize="20" textAlign={"center"} color={"white"}>
              COUPON {}
            </Heading>
          </Box>
          <Box px="4">
            <Text fontSize="20" color={"white"}>
              Code :<Heading color={"white"}>{props.code}</Heading>
            </Text>
            <Text fontSize="20" color={"white"}>
              Cote :<Heading color={"white"}>{props.cote}</Heading>
            </Text>
            <Text fontSize="20" textAlign={"center"} color={"white"}>
              Combiné de {props.matchs} equipes
            </Text>
          </Box>
          <Box px="4" pb="4" color={"white"}>
            <Text color={"white"}>
              {" "}
              Pariez avant le :<Text fontWeight={"bold"}>{props.date}</Text>
            </Text>
          </Box>
        </ImageBackground>
      </VStack>
    </Box>
  );
}
