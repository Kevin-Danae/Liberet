import { Badge, HStack } from "native-base";
import React from "react";
import { Text, View } from "react-native";

export const Days = () => {
  return (
    <HStack
      space={{
        base: 2,
        md: 7,
      }}
      mx={{
        base: "auto",
        md: 0,
      }}
    >
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="info">INFO</Badge>
      <Badge colorScheme="dark">DARK</Badge>
      <Badge colorScheme="dark">DARK</Badge>
      <Badge colorScheme="dark">DARK</Badge>
      <Badge colorScheme="dark">DARK</Badge>
    </HStack>
  );
};
