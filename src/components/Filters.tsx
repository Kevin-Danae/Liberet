import { Button } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Filter } from "./Filter";
import { useCategory } from "../hooks/useCategory";

export const Filters = () => {
  const { category } = useCategory();

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 10,
      }}
    >
      <Filter
        options={["11:00 - 12:00 am", "1:00 - 2:00 pm", "3:00 - 4:00 pm"]}
        first={"11:00 - 12:00 am"}
        title="Elige un horario de entrega"
        icon="clock-outline"
      />

      <Filter
        options={category.map((e) => e.strCategory)}
        first={"Beef"}
        title="Elige un Servicio"
        icon="silverware-fork-knife"
      />

      <Button
        onPress={() => alert("Soy el chip de +1 platillos")}
        startIcon={<Icon name="reader-outline" color="#FDC963" size={20} />}
        size="xs"
        variant="ghost"
        backgroundColor="white"
        borderRadius={10}
        height={6}
      >
        <Text>Platillos</Text>
      </Button>
    </View>
  );
};
