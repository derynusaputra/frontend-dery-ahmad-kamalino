import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizes } from "../../../constants/sized";
import { useTheme } from "@react-navigation/native";

const DetailScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const SumaryData = ({ titles, value, color, type }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: sizes(35),
        }}
      >
        <Text
          style={{
            fontFamily:
              type === "total" ? "Poppins-SemiBold" : "Poppins-Medium",
            fontSize:
              type === "subtotal"
                ? sizes(14)
                : type === "total"
                ? sizes(16)
                : sizes(12),
            color: type === "total" ? colors?.grey : colors?.greyMedium,
          }}
        >
          {titles}
        </Text>
        <Text
          style={{
            fontFamily:
              type === "total" ? "Poppins-SemiBold" : "Poppins-Medium",
            fontSize:
              type === "subtotal"
                ? sizes(14)
                : type === "total"
                ? sizes(16)
                : sizes(12),
            color: color,
          }}
        >
          {value}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        padding: sizes(24),
        marginHorizontal: sizes(15),
        marginTop: sizes(20),
        backgroundColor: colors?.white,
        borderRadius: sizes(12),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: sizes(16),
            color: colors?.green,
          }}
        >
          SPP 2024
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: sizes(12),
            color: colors?.red,
          }}
        >
          Dalam Tunggakan
        </Text>
      </View>
      <SumaryData
        titles={"Pembayaran 1"}
        value={"Rp3.000.000"}
        color={colors?.red}
      />
      <SumaryData
        titles={"Pembayaran 2"}
        value={"Rp3.000.000"}
        color={colors?.red}
      />
      <SumaryData
        titles={"Pembayaran 3"}
        value={"Rp3.000.000"}
        color={colors?.red}
      />
      <View
        style={{
          marginTop: sizes(25),
          height: 1,
          width: sizes(300),
          backgroundColor: colors?.greyMedium,
        }}
      ></View>
      <SumaryData
        titles={"Total Pembayaran"}
        value={"Rp3.000.000"}
        color={colors?.red}
        type="subtotal"
      />
      <SumaryData
        titles={"Total Tagihan "}
        value={"Rp3.000.000"}
        color={colors?.red}
        type="subtotal"
      />

      <SumaryData
        titles={"Sisa Tagihan"}
        value={"Rp3.000.000"}
        color={colors?.red}
        type="total"
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
