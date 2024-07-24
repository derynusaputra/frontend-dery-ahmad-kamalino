import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizes } from "../../../constants/sized";
import { useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { IMAGES } from "../../../constants/theme";
import Gap from "../../../components/Gap/Gap";

const BottomCom = ({ onPress, title, subtitle, image }) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          paddingHorizontal: sizes(20),
          paddingVertical: sizes(20),
          marginHorizontal: sizes(15),
          marginTop: sizes(20),
          backgroundColor: colors?.white,
          borderRadius: sizes(12),
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: sizes(16),
              color: colors?.green,
            }}
          >
            {title}
          </Text>
          <Gap height={sizes(5)} />
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: sizes(12),
              color: colors?.greyMedium,
              marginTop: sizes(5),
              width: sizes(185),
            }}
          >
            {subtitle}
          </Text>
        </View>
        <FastImage
          style={{
            height: sizes(100),
            width: sizes(100),
            // backgroundColor: colors?.greyLight,
          }}
          resizeMode="cover"
          source={image}
        />
      </View>
    </Pressable>
  );
};

export default BottomCom;

const styles = StyleSheet.create({});
