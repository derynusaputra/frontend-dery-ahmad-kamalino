import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {sizes} from "../../../constants/sized";
import {useNavigation, useTheme} from "@react-navigation/native";
import {formatToRupiah, getNamaBulan} from "services/Helper";

const CardPembayaran = ({data, onPress, title, status = "unpaid"}) => {
  console.log({data});

  const {colors} = useTheme();
  const navigation = useNavigation();

  const SumaryData = ({titles, value, color}) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: sizes(7),
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: sizes(12),
            color: colors?.greyMedium,
          }}
        >
          {titles}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: sizes(12),
            color: color,
          }}
        >
          {value}
        </Text>
      </View>
    );
  };
  return (
    <Pressable
      onPress={() => {
        navigation?.navigate("DetailPembayaran", {data: data});
      }}
    >
      <View
        style={{
          padding: sizes(15),
          marginHorizontal: sizes(15),
          marginTop: sizes(20),
          backgroundColor: colors?.white,
          borderRadius: sizes(12),
          shadowColor: "#000",
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: sizes(9),
            color: colors?.grey,
          }}
        >
          {getNamaBulan(data?.month ?? 0)} {data?.year}
        </Text>
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
            {data?.name}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: sizes(12),
              color:
                status === "paid"
                  ? colors?.green
                  : status === "progress"
                    ? colors?.orange
                    : colors?.red,
            }}
          >
            {status === "paid"
              ? "Dibayar"
              : status === "progress"
                ? "Progress"
                : "Belum Bayar"}
          </Text>
        </View>

        <SumaryData
          titles={"Total Tagihan"}
          value={formatToRupiah(data?.amount_cost ?? 0)}
          color={colors?.red}
        />
        <SumaryData
          titles={"Pembayaran Masuk"}
          value={formatToRupiah(data?.amount ?? 0)}
          color={colors?.green}
        />
        <SumaryData
          titles={"Sisa Tagihan"}
          value={formatToRupiah(data?.amount_unpaid ?? 0)}
          color={colors?.red}
        />
      </View>
    </Pressable>
  );
};

export default CardPembayaran;

const styles = StyleSheet.create({});
