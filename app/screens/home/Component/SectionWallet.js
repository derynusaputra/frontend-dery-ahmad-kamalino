import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { sizes } from "../../../constants/sized";
import { IMAGES } from "../../../constants/theme";
import { GlobalStyleSheet } from "../../../constants/styleSheet";
import Gap from "../../../components/Gap/Gap";
import { useSelector } from "react-redux";
import { formatToRupiah } from "../../../services/Helper";

const SectionWallet = ({ onPressTopUp }) => {
  const profile = useSelector((state) => state.account.profileData);

  const theme = useTheme();
  const { colors } = theme;
  return (
    <View
      style={{
        padding: sizes(20),
        backgroundColor: colors?.white,
        borderRadius: sizes(20),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Android shadow property
        elevation: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            color: colors.green,
            fontSize: sizes(12),
            fontFamily: "Poppins-Medium",
          }}
        >
          Saldo Tersedia
        </Text>
        <Text
          style={{
            color: colors.green,
            fontSize: sizes(20),
            fontFamily: "Poppins-SemiBold",
          }}
        >
          {formatToRupiah(profile?.balance_users?.total_balance ?? 0)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          //   width: sizes(100),
          //   height: sizes(42),
          //   backgroundColor: "red",
        }}
      >
        <Pressable onPress={onPressTopUp} style={{ alignItems: "center" }}>
          <Image
            style={{
              // left: 15,
              height: sizes(30),
              width: sizes(30),
              // resizeMode: "contain",
              alignItems: "center",
            }}
            source={IMAGES.icTarikSaldo}
          />
          <Gap height={sizes(5)} />
          <Text
            style={{
              color: colors.green,
              fontSize: sizes(10),
              fontFamily: "Poppins-Medium",
            }}
          >
            Top Up
          </Text>
        </Pressable>
        {/* <Gap width={sizes(20)} />
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              // left: 15,
              height: sizes(30),
              width: sizes(30),
              // resizeMode: "contain",
            }}
            source={IMAGES.icTopup}
          />
          <Gap height={sizes(5)} />
          <Text
            style={{
              color: colors.green,
              fontSize: sizes(10),
              fontFamily: "Poppins-Medium",
            }}
          >
            Scan
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default SectionWallet;

const styles = StyleSheet.create({});
