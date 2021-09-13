import { Box, Input } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const Search = () => {
  return (
   
      <Box backgroundColor="white">
        <Input
          placeholder="Select location..."
          size="xl"
          InputLeftElement={<Icon name="location" color="#F49897" size={25} />}
          InputRightElement={<Icon name="filter" color="black" size={25} />}
        />
      </Box>
  );
};
