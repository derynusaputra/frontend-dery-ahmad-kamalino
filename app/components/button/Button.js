import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {FONTS, SIZES} from "../../constants/theme";
import {useTheme} from "@react-navigation/native";

const Button = (props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onPress && props.onPress()}
      style={[
        {
          ...props.style,
          backgroundColor: props.color ? props.color : colors.green,
          paddingHorizontal: 12,
          paddingVertical: 12,
          height: 48,
          flexDirection: "row",
          borderRadius: props.btnSquare
            ? 0
            : props.btnRounded
              ? 30
              : SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <Text
        numberOfLines={1}
        style={[
          {
            fontSize: 15,
            lineHeight: 20,
            ...FONTS.fontSemiBold,
            color: colors.white,
          },
          props.textColor && {color: props.textColor},
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
