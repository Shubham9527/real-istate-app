import {SplashScreen, Stack} from "expo-router";

import "./globals.css"
import {useFonts} from "expo-font";
import {useEffect} from "react";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  })

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return <Stack screenOptions={{headerShown: false}}/>;
}
