import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { FONTS } from "../../../constants/theme";
import TextCustom from "../../../components/Text/TextCustom";
import { sizes } from "../../../constants/sized";
import Gap from "../../../components/Gap/Gap";
import { Dropdown } from "react-native-element-dropdown";

const datas = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
];

const CustomDropdown = ({
  title,
  showTitle = true,
  showSearchs = true,
  data,

  clickButton,
  searchPlaceHolder,
  defaultButtonText,
  onSelect,
  disabled = false,
  defaultValue,
  values,
  onChangeText,
  isLoadingData,
}) => {
  const theme = useTheme();
  const { colors } = theme;

  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={{}}>
      {showTitle ? (
        <View>
          <TextCustom
            value={title}
            // width={sizes(130)}
            fontSize={sizes(12)}
            color={colors?.greenDark}
            fontFamily={FONTS?.fontsSemiBold}
          />
          <Gap height={sizes(8)} />
        </View>
      ) : null}

      {/* {renderLabel()} */}
      <Dropdown
        style={[
          {
            height: sizes(44),
            borderColor: colors?.greyMedium,
            borderWidth: 1,
            borderRadius: sizes(15),
            paddingHorizontal: sizes(12),
          },
          isFocus && {},
        ]}
        placeholderStyle={{
          fontSize: sizes(14),
          fontFamily: FONTS?.fontsMedium,
          color: colors?.greyMedium,
        }}
        selectedTextStyle={{
          fontSize: sizes(14),
          fontFamily: FONTS?.fontsMedium,
          color: colors?.greenDark,
        }}
        inputSearchStyle={{
          //   backgroundColor: "red",
          fontSize: sizes(14),
          fontFamily: FONTS?.fontsMedium,
          color: colors?.greenDark,
        }}
        // iconStyle={styles.iconStyle}

        data={data}
        search
        maxHeight={300}
        labelField="label" // ini untuk menampilkan yg di select
        valueField="label"
        placeholder={!isFocus ? "Pilih Pembayaran" : "..."}
        searchPlaceholder="Search..."
        value={values}
        onFocus={() => {
          clickButton?.();
          setIsFocus(true);
        }}
        onBlur={() => setIsFocus(false)}
        // dropdownPosition=""
        // onChangeText={onChangeText}
        // onChange={(item) => {
        //   setValue(item.value);
        //   setIsFocus(false);
        //   values = item?.value;
        //   console.log({ item });
        // }}
        onChange={onChangeText}
        containerStyle={{ borderRadius: sizes(5) }}
        itemContainerStyle={{}}
        itemTextStyle={{
          fontSize: sizes(14),
          fontFamily: FONTS?.fontsMedium,
          color: colors?.greenDark,
        }}
        // renderLeftIcon={() => (
        //   <Icon
        //     name={"arrow-down"}
        //     type="material-community"
        //     size={sizes(20)}
        //     color={isFocus ? colors?.green : colors?.red}
        //   />
        // )}
      />

      <Gap height={sizes(15)} />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
