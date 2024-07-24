import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizes } from "../../constants/sized";
import TextCustom from "../Text/TextCustom";
import { useTheme } from "@react-navigation/native";
import { FONTS } from "../../constants/theme";

const CustomButton = ({ onPress, title = "Tambahkan" }) => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <View
      style={{
        backgroundColor: colors?.white,
        alignItems: "center",
        paddingTop: sizes(10),
        paddingBottom: sizes(15),
      }}
    >
      <Pressable
        onPress={onPress}
        style={(args) => {
          const btnStyles = [
            {
              height: sizes(44),
              width: sizes(295),
              backgroundColor: colors?.greenDark,
              justifyContent: "center",
              borderRadius: sizes(15),
            },
          ];
          if (args.pressed) {
            return [btnStyles, { opacity: 0.9 }];
          }
          return btnStyles;
        }}
      >
        <TextCustom
          value={title}
          // width={sizes(130)}
          fontSize={sizes(16)}
          textAlign={"center"}
          color={colors?.white}
          fontFamily={FONTS?.fontsMedium}
        />
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
