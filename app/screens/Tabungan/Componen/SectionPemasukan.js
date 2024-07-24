import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizes } from "../../../constants/sized";
import { Icon } from "@rneui/base";
import { useTheme } from "@react-navigation/native";
import { FONTS } from "../../../constants/theme";
import TextCustom from "../../../components/Text/TextCustom";
import Gap from "../../../components/Gap/Gap";
import { formatToRupiah } from "../../../services/Helper";

const SectionPemasukan = ({ cash }) => {
  console.log({ cash });
  const theme = useTheme();
  const { colors } = theme;
  const CardPemasukan = ({ type, value, onPress }) => {
    return (
      <View
        style={{
          width: sizes(165),
          paddingVertical: sizes(10),
          paddingHorizontal: sizes(12),
          backgroundColor: colors?.white,
          borderRadius: sizes(20),
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          //   shadowOpacity: 0.25,
          //   shadowRadius: 3.84,
          // Android shadow property
          elevation: 3,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: sizes(46),
            height: sizes(46),
            backgroundColor: colors?.white,
            borderWidth: 1,
            borderColor: colors?.greyLight,
            borderRadius: sizes(15),
            justifyContent: "center",
            alignItems: "center",
            marginRight: sizes(8),
          }}
        >
          <Icon
            name={type === "masuk" ? "arrow-down" : "arrow-up"}
            type="material-community"
            size={sizes(20)}
            color={type === "masuk" ? colors?.green : colors?.red}
          />
        </View>
        <View>
          <Text
            style={{
              color: colors.grey,
              fontSize: sizes(12),
              width: sizes(82),
              fontFamily: "Poppins-Medium",
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {type === "masuk" ? "Pemasukan" : "Pengeluaran"}
          </Text>
          <Text
            style={{
              color: type === "masuk" ? colors.green : colors.red,
              fontSize: sizes(12),

              width: sizes(82),
              fontFamily: "Poppins-Medium",
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {type === "masuk" ? "+" : "-"}
            {value}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CardPemasukan
          type={"masuk"}
          value={`${formatToRupiah(cash?.cashinTotal)}`}
        />
        <CardPemasukan value={`${formatToRupiah(cash?.cashoutTotal)}`} />
      </View>
      <Gap height={sizes(20)} />
      <TextCustom
        value={"History"}
        width={sizes(130)}
        color={colors?.grey}
        fontFamily={FONTS?.fontsSemiBold}
      />
    </View>
  );
};

export default SectionPemasukan;

const styles = StyleSheet.create({});
