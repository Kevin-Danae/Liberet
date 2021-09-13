import React from "react";
import { View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Search } from "../components/Search";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "../components/Card";
import { useRequest } from "../hooks/useRequest";

export const Home = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  const { meal } = useRequest();

  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: "#FEF2F1" }}>
      <TouchableOpacity onPress={() => alert("Hola")}>
        <Search />
      </TouchableOpacity>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={meal}
        renderItem={({ item }) => <Card key={item.idMeal} meal={item} />}
        numColumns={2}
      />
    </View>
  );
};
