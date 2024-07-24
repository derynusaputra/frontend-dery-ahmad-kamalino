import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { sizes } from "../../../constants/sized";
import { useTheme } from "@react-navigation/native";

const TextInputCustom = ({ title, value, editable = false }) => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <View style={{ paddingHorizontal: sizes(20), paddingBottom: sizes(10) }}>
      <Text
        style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: sizes(12),
          color: colors?.grey,
          marginTop: sizes(12),
          marginBottom: sizes(5),
        }}
      >
        {title}
      </Text>
      <TextInput
        editable={!editable}
        style={{
          borderWidth: 1,
          borderColor: colors?.greyMedium,
          borderRadius: sizes(15),
          padding: sizes(12),
          fontFamily: "Poppins-Medium",
          fontSize: sizes(14),
          color: colors?.grey,
        }}
        value={value}
        placeholder=""
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({});
