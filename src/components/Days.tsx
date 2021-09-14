import React, { useContext, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CatContext } from "../context/CatContext";

export const Days = () => {
  const { date } = useContext(CatContext);
  const [active, setActive] = useState("Jue");
  const days = {
    day: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    key: [20, 21, 22, 23, 24, 25, 26],
  };
  return (
    <FlatList
      keyExtractor={(item) => item}
      style={{}}
      horizontal={true}
      data={days.day}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setActive(item);
            date(item);
          }}
        >
          <View
            style={{
              flexDirection: "column",
              width: 51,
              height: 40,
              paddingLeft: 5,
            }}
          >
            <Text style={{ paddingRight: 20 }}>{item}</Text>
            <Text
              style={{
                color: "#4D4D4D",
                backgroundColor: active === item ? "#FCAB3F" : "white",
                borderRadius: 20,
                width: 18,
              }}
            >
              {days.key[index]}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
