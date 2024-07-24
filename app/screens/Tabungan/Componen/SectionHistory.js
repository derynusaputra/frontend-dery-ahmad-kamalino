import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Icon} from "@rneui/base";
import {sizes} from "../../../constants/sized";
import {useTheme} from "@react-navigation/native";
import TextCustom from "../../../components/Text/TextCustom";
import {FONTS} from "../../../constants/theme";
import Gap from "../../../components/Gap/Gap";
import {formatDate, formatToRupiah} from "services/Helper";

const SectionHistory = ({isOut, title, value, time}) => {
  const theme = useTheme();
  const {colors} = theme;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "red",
        paddingVertical: sizes(12),
        borderBottomWidth: sizes(1),
        borderColor: colors?.greyLight,
      }}
    >
      <View style={{flexDirection: "row"}}>
        <View
          style={{
            width: sizes(40),
            height: sizes(40),
            backgroundColor: isOut ? colors?.red : colors?.greenMuda2,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: sizes(10),
          }}
        >
          <Icon
            name={"text-box-outline"}
            type="material-community"
            size={sizes(20)}
            color={colors?.white}
          />
        </View>
        <Gap width={sizes(10)} />
        <View>
          <TextCustom
            value={title}
            width={sizes(130)}
            color={isOut ? colors?.red : colors?.greenMuda2}
            fontFamily={FONTS?.fontsSemiBold}
          />
          <TextCustom
            value={formatDate(time)}
            width={sizes(130)}
            color={colors?.greyMedium}
            fontFamily={FONTS?.fontsMedium}
          />
        </View>
      </View>
      <TextCustom
        value={formatToRupiah(value)}
        style={{textAlign: "right"}}
        width={sizes(130)}
        numberOfLines={2}
        fontFamily={FONTS?.fontsSemiBold}
      />
    </View>
  );
};

export default SectionHistory;

const styles = StyleSheet.create({});
