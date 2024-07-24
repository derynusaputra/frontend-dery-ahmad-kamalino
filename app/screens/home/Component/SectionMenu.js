import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useNavigation, useTheme} from "@react-navigation/native";
import {sizes} from "constants/sized";
import {IMAGES} from "constants/theme";
import Gap from "components/Gap/Gap";

const SectionMenu = () => {
  const theme = useTheme();
  const {colors} = theme;
  const navigates = useNavigation();

  const MenuCustom = ({onPress, source, title}) => {
    return (
      <Pressable onPress={onPress}>
        <View
          style={{
            width: sizes(90),
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: sizes(50),
              height: sizes(50),
              backgroundColor: colors?.white,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: sizes(12),
              shadowColor: "#000",
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Image
              style={{
                // left: 15,
                height: sizes(30),
                width: sizes(30),
                // resizeMode: "contain",
                alignItems: "center",
              }}
              source={source}
            />
          </View>
          <Gap height={sizes(8)} />
          <Text
            style={{
              color: colors.green,
              fontSize: sizes(12),
              fontFamily: "Poppins-Medium",
            }}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{padding: sizes(10), marginTop: sizes(30)}}>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <MenuCustom
          onPress={() => {
            navigates?.navigate("DataPribadi");
          }}
          source={IMAGES.icDpribadi}
          title={"Data Pribadi"}
        />
        <MenuCustom
          onPress={() => {
            navigates?.navigate("Pembayaran");
          }}
          source={IMAGES.icPembayaran}
          title={"Pembayaran"}
        />
        <MenuCustom
          onPress={() => {
            navigates?.navigate("Tabungan");
          }}
          source={IMAGES.icTabungan}
          title={"Tabungan"}
        />
      </View>
      <Gap height={sizes(35)} />
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <MenuCustom
          onPress={() => {
            navigates?.navigate("Infaq");
          }}
          source={IMAGES.icInfaq}
          title={"Infaq"}
        />
        <MenuCustom
          onPress={() => {
            navigates?.navigate("Pengumuman");
          }}
          source={IMAGES.icPengumuman}
          title={"Pengumuman"}
        />
        <MenuCustom
          onPress={() => {
            navigates?.navigate("Riwayat");
          }}
          source={IMAGES.icRiwayat}
          title={"Riwayat"}
        />
      </View>
      {/* <MenuCustom
        onPress={() => {
          navigates?.navigate("FcmScreens");
        }}
        source={IMAGES.icRiwayat}
        title={"Coba Notif"}
      /> */}
      {/* <MenuCustom
        onPress={() => {
          navigates?.navigate("FeatureTestScreen");
        }}
        source={IMAGES.icRiwayat}
        title={"Feature Test"}
      /> */}
    </View>
  );
};

export default SectionMenu;

const styles = StyleSheet.create({});
