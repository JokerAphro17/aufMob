import React from "react";
import { Text, View } from "react-native";
import { Center, Heading, Spinner, HStack } from "native-base";

const Loader = () => {
  return (
    <Center h="80%" w="100%">
      <HStack space={2} justifyContent="center" h="80">
        <Spinner accessibilityLabel="Loading posts" size="lg" />
        <Heading color="primary.500" fontSize="xl"></Heading>
      </HStack>
    </Center>
  );
};
export default Loader;
