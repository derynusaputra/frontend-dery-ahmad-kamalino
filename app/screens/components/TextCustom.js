import { View, StyleSheet, useColorScheme } from "react-native";
import { Text } from "react-native-paper";
import React, { useCallback } from "react";
import { sizes } from "../../constants/sized";

const TextCustom = ({
  fontSize = 14,
  fontWeight = "400",
  btnBlueText,
  style,
  value = "",
  numberOfLines,
}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.font, { ...style }]}>
      {value}
    </Text>
  );
};

export default TextCustom;

const styles = StyleSheet.create({
  font: {
    fontSize: sizes(14),
    // lineHeight: sizes(16),
    fontFamily: "Poppins-Regular",
  },
});
