import React from "react";
import {
  Box,
  Divider,
  Heading,
  Text,
  Collapse,
  VStack,
  HStack,
  Alert,
  IconButton,
  CloseIcon,
} from "native-base";

function Aler({ show, setShow }) {
  return (
    <Box w="100%" alignItems="center" opacity={show ? 1 : 0}>
      <Collapse isOpen={show}>
        <Alert w="100%" maxW="400" status="success">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{
                    color: "coolGray.800",
                  }}
                >
                  Succès
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" color="coolGray.600" />}
                onPress={() => setShow(false)}
              />
            </HStack>
            <Box
              pl="6"
              _dark={{
                _text: {
                  color: "coolGray.600",
                },
              }}
            >
              Votre rechargement a été effectué avec succès.
            </Box>
          </VStack>
        </Alert>
      </Collapse>
    </Box>
  );
}

export default Aler;
