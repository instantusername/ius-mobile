import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import getTheme from "./native-base-theme/components";
import iusDark from "./native-base-theme/variables/iusDark";
import { Ionicons } from "@expo/vector-icons";
import { MainPage } from "./src/screens/MainPage";
import { StyleProvider } from "native-base";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function load(): Promise<void> {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font
      });
      setFontLoaded(true);
    }
    load();
  }, []);

  return (
    // TODO: very bad solution to wait for expo fonts to load. fix it somehow
    fontLoaded ? (
      <StyleProvider style={getTheme(iusDark)}>
        <MainPage />
      </StyleProvider>
    ) : (
      <></>
    )
  );
}
