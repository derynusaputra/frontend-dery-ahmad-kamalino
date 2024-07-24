import React from "react";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import {GlobalStyleSheet} from "../../../constants/styleSheet";
import {COLORS, FONTS} from "../../../constants/theme";
import Header from "../../../layout/Header";
import {useTheme} from "@react-navigation/native";
import Headers from "../../../layout/Headers";
import Markdown from "react-native-markdown-display";
import {sizes} from "constants/sized";
import {termOfUsData} from "./dummyData";

const Terms = () => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <Headers
        title={"Terms & Conditions"}
        backgroundColor={colors?.white}
        icColor={colors?.green}
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors?.white,
          paddingHorizontal: sizes(15),
        }}
      >
        <Markdown>{termOfUsData}</Markdown>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Terms;
