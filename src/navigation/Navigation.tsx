import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import Icon from "react-native-vector-icons/Ionicons";
import { Shop } from "../screens/Shop";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#FCAB3F",
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = "";
          switch (route.name) {
            case "Home":
              iconName = "grid-outline";
              break;
            case "Shoping":
              iconName = "cart-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return <Icon name={iconName} color={color} size={25} />;
        },
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#E4E4E4'
        }
      })}
    >
      <Tab.Screen options={{ title: "" }} name="Shoping" component={Shop} />
      <Tab.Screen options={{ title: "" }} name="Home" component={Home} />
      <Tab.Screen options={{ title: "" }} name="Profile" component={Shop} />
    </Tab.Navigator>
  );
};
