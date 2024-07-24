import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import {GlobalStyleSheet} from "../../../constants/styleSheet";
import {COLORS, FONTS} from "../../../constants/theme";
import Header from "../../../layout/Header";
import {useTheme} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import Headers from "../../../layout/Headers";
import Markdown from "react-native-markdown-display";
import {privacyPolicyData} from "./dummyData";
import {sizes} from "constants/sized";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <Headers
        title={"Privacy Policy"}
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
        <Markdown>{privacyPolicyData}</Markdown>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
