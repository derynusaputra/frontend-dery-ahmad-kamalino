import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useTheme} from "@react-navigation/native";
import {Portal} from "react-native-paper";

const LoadingComp = () => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <Portal>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          alignItems: "center",
          justifyContent: "center",
          // position: "absolute",
          // zIndex: 9,
          width: "100%",
          height: "100%",
        }}
      >
        <ActivityIndicator size={"large"} color={colors.white} />
      </View>
    </Portal>
  );
};

export default LoadingComp;

const styles = StyleSheet.create({});
