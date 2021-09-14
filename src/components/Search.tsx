import { Box, Button, Input } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const Search = () => {
  return (
    <Box backgroundColor="white" justifyContent="space-between" flexDirection='row' shadow={6}>
      <Button
        onPress={() => alert('Este es el boton de select location')}
        style={{ justifyContent: "space-between" }}
        variant="unstyled"
        startIcon={<Icon name="location" color="#F49897" size={20} />}
      >
        Select location...
      </Button>
      <Icon name="filter" color="black" size={30} style={{}} />
    </Box>
  );
};
