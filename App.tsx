import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import { NativeBaseProvider } from "native-base";
import { CatProvider } from "./src/context/CatContext";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppState>
          <Navigation />
        </AppState>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const AppState = ({children}: any) => {
  return <CatProvider>{children}</CatProvider>
}
