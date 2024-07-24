import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { sizes } from "../../../constants/sized";
import Headers from "../../../layout/Headers";
import FastImage from "react-native-fast-image";
import { FONTS, IMAGES } from "../../../constants/theme";
import TextCustom from "../../../components/Text/TextCustom";
import CustomButton from "../../../components/button/CustomButton";
import { Icon } from "@rneui/base";
import { Formik } from "formik";
import Gap from "../../../components/Gap/Gap";
import CustomDropdown from "../Componen/CustomDropdown";
import { Satellite } from "../../../services/satellite";
import { useSelector } from "react-redux";

const VerifikasiBank = () => {
  const theme = useTheme();
  const { colors } = theme;
  const JWT = useSelector((state) => state.account.token);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors?.white }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Verifikasi Bank"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        <ScrollView style={{}}>
          <View
            style={{
              width: sizes(346),
              //   height: sizes(453),
              marginTop: sizes(40),
              paddingBottom: sizes(10),
              borderWidth: sizes(1),
              borderColor: colors?.greyLight,
              marginHorizontal: sizes(15),
              borderRadius: sizes(10),
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: sizes(200),
                width: sizes(200),
                borderRadius: sizes(500),
                marginTop: sizes(50),
                marginBottom: sizes(20),
                backgroundColor: colors?.greyShopee,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                type={"material-community"}
                name={"credit-card-clock-outline"}
                size={sizes(100)}
              />
            </View>

            <TextCustom
              value={"Verifikasi sedang diproses"}
              // width={sizes(130)}
              fontSize={sizes(16)}
              color={colors?.green}
              fontFamily={FONTS?.fontsRegular}
            />
            <Gap height={sizes(40)} />

            <TextCustom
              value={"Pengajuan data sedang kami tinjau,\n maksimal 7x24 jam"}
              // width={sizes(130)}
              textAlign="center"
              fontSize={sizes(12)}
              color={colors?.grey}
              fontFamily={FONTS?.fontsRegular}
            />
            <Gap height={sizes(15)} />

            <Pressable onPress={() => {}}>
              <TextCustom
                value={"Send WhatsApp"}
                // width={sizes(130)}
                fontSize={sizes(12)}
                color={colors?.blue}
                fontFamily={FONTS?.fontsRegular}
              />
            </Pressable>
            <Gap height={sizes(40)} />

            <Pressable
              onPress={() => {
                navigation?.pop();
              }}
              style={{
                width: sizes(300),
                paddingVertical: sizes(10),
                marginHorizontal: sizes(15),
                marginTop: sizes(50),
                marginBottom: sizes(10),
                borderRadius: sizes(8),
                backgroundColor: colors?.green,
                alignItems: "center",
              }}
            >
              <TextCustom
                value={"Lanjutkan"}
                // width={sizes(130)}
                fontSize={sizes(12)}
                color={colors?.white}
                fontFamily={FONTS?.fontsRegular}
              />
            </Pressable>
          </View>
        </ScrollView>
        {/* <CustomButton
              onPress={() => {
                console.log("asdsad");
              }}
            /> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifikasiBank;

const styles = StyleSheet.create({});
