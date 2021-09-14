import React from "react";
import { View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Search } from "../components/Search";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "../components/Card";
import { useRequest } from "../hooks/useRequest";
import { Filters } from "../components/Filters";
import { Days } from "../components/Days";

export const Home = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  const { meal } = useRequest();

  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: "" }}>
      <Search />
      <View style={{ alignItems: "center", paddingTop: 10, backgroundColor: 'white'}}>
        <Days />
      </View>
      <View style={{paddingTop: 10 }}>
        <Filters />
      </View>
      <FlatList
        style={{
          paddingTop: 20,
          paddingRight: 15,
          paddingLeft: 15,
          height: 1000,
        }}
        keyExtractor={(item) => item.idMeal}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        data={meal}
        renderItem={({ item }) => <Card key={item.idMeal} meal={item} />}
        numColumns={2}
      />
    </View>
  );
};
