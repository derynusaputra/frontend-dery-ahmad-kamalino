import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import {useTheme} from "@react-navigation/native";
import Headers from "../../layout/Headers";
import {sizes} from "../../constants/sized";
import BottomCom from "./Component/BottomCom";
import {IMAGES} from "../../constants/theme";

const Pembayaran = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Pembayaran"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: colors?.white,
          }}
        >
          <BottomCom
            onPress={() => {
              navigation?.navigate("PembayaranBerulangScreen", {
                datType: "month",
              });
            }}
            title={"Pembayaran Bulanan"}
            subtitle={"Biaya SPP (Makan, Listrik,  Bulanan)."}
            image={IMAGES?.gbrBayarBerulang}
          />
          <BottomCom
            onPress={() => {
              navigation?.navigate("PembayaranBerulangScreen", {
                datType: "year",
              });
            }}
            title={"Pembayaran Setahun"}
            subtitle={
              "- Ujian Semester\n- Perayaan Hari Besar Islam\n- Kenaikan Kelas (SPP 1 Bulan, Kitab, Kesehatan, & Adm)"
            }
            image={IMAGES?.gbrBayarSetahun}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Pembayaran;

const styles = StyleSheet.create({});
