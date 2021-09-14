import React, { useEffect, useState } from "react";
import { AspectRatio, Box, Center, Image, HStack } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";
import { Meal } from "../interfaces/Interfaces";
import { useSubRequest } from "../hooks/useSubRequest";

interface Props {
  meal: Meal;
}

export const Card = ({ meal }: Props) => {
  const { info } = useSubRequest(meal.idMeal);
  let index = info.strTags ? info.strTags.indexOf(",") : 10;
  return (
    <Box mb={-16} height={270}>
      <Box width={150} height={180} shadow={5} borderRadius={10} backgroundColor="white">
        <Box borderRadius={10} shadow={5}>
          <AspectRatio ratio={1 / 1}>
            <Image
              zIndex={1000}
              borderRadius={10}
              source={{
                uri: `${meal.strMealThumb}`,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            _text={{
              color: "white",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom={3}
            px={1}
            py={1}
          >
            {info && info.strArea}
          </Center>
          <Center
            _text={{
              color: "#FDC963",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom={0}
            px={1}
          >
            {meal.strMeal}
          </Center>
          <Center
            borderRadius={10}
            bg="black"
            width={20}
            height={5}
            position="absolute"
            right={0}
            m={2}
            _text={{
              color: "#FDC963",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "xs",
            }}
          >
            {info.strTags
              ? info.strTags.substr(0, index === -1 ? 10 : index)
              : "Quedan 0"}
          </Center>
        </Box>
        <Box backgroundColor="white" height={6} paddingTop={1}>
          <HStack alignItems="center" space={4} justifyContent="space-around">
            <HStack alignItems="center">
              <Icon name="time-outline" color="#FDC963" size={20} />
            </HStack>
            <HStack alignItems="center">
              <Text style={{ fontWeight: "bold" }}>
                ${Number(meal.idMeal) / 100}
              </Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
