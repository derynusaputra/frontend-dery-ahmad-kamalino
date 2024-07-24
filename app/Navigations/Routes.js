import React, {useEffect, useState} from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {Provider} from "react-redux";
import StackNavigator from "./StackNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import themeContext from "../constants/themeContext";
import {COLORS} from "../constants/theme";
import {store} from "../store";
import {PaperProvider} from "react-native-paper";
import {useColorScheme} from "react-native";

const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const useTheme = useColorScheme();
  const authContext = React.useMemo(
    () => ({
      setDarkTheme: () => {
        setIsDarkTheme(true);
      },
      setLightTheme: () => {
        setIsDarkTheme(false);
      },
    }),
    [],
  );

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      black: "#343434",
      blue: "#0072DA",
      red: "#CC3931",
      orange: "#FFAE00",
      grey: "#979797",
      greyMedium: "#CBCBCB",
      greyLight: "#F2F2F2",
      greyShopee: "#F6F6F6",
      green: "#3C6E57",
      greenMuda: "#C1DA8E",
      greenMuda2: "#36B37E",
      greenDark: "#32522D",
      greenOpacity: "#FCFDF9",
      white: "#FFFFFF",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      black: "#343434",
      blue: "#0072DA",
      red: "#CC3931",
      orange: "#FFAE00",
      grey: "#979797",
      greyMedium: "#CBCBCB",
      greyLight: "#F2F2F2",
      greyShopee: "#F6F6F6",
      green: "#FFFFFF",
      greenMuda: "#C1DA8E",
      greenMuda2: "#36B37E",
      greenDark: "#32522D",
      greenOpacity: "#FCFDF9",
      white: "#FFFFFF",
    },
  };

  // useEffect(() => {
  //   console.log("ttem", useTheme);
  //   if (useTheme === "dark") {
  //     console.log("ttem dark");

  //     setIsDarkTheme(true);
  //   } else {
  //     setIsDarkTheme(false);
  //   }
  // }, [useTheme]);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <SafeAreaProvider>
      <themeContext.Provider value={authContext}>
        <Provider store={store}>
          <PaperProvider>
            <NavigationContainer theme={theme}>
              <StackNavigator />
            </NavigationContainer>
          </PaperProvider>
        </Provider>
      </themeContext.Provider>
    </SafeAreaProvider>
  );
};
export default Routes;
