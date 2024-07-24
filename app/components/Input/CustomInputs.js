import {View, Text, TextInput, Pressable} from "react-native";
import React, {useRef} from "react";
import {sizes} from "../../constants/sized";
import {useTheme} from "@react-navigation/native";
import {FONTS} from "../../constants/theme";
import TextCustom from "../Text/TextCustom";

const CustomInputs = ({
  name,
  placeholder,
  typeKeyboard = "default",
  onChangeText,
  defaultValue = "",
  isShow = false,
  value,
}) => {
  const theme = useTheme();
  const {colors} = theme;
  const inputRef = useRef(null);

  return (
    <View
      style={{
        width: sizes(314),
        // height: sizes(59),
        // marginHorizontal: sizes(15),
        marginBottom: sizes(20),
        // marginTop: sizes(10),
        // backgroundColor: "red",
      }}
    >
      <TextCustom
        value={name}
        fontSize={sizes(12)}
        color={colors?.greenDark}
        fontFamily={FONTS?.fontsSemiBold}
      />
      <Pressable
        onPress={() => {
          inputRef?.current?.focus();
        }}
        style={{
          height: sizes(44),
          // paddingVertical: sizes(12),
          backgroundColor: "white",
          borderWidth: sizes(1),
          borderColor: colors?.greyMedium,
          borderRadius: sizes(15),
          marginTop: sizes(8),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {isShow ? (
          <Text style={{marginLeft: sizes(10), color: colors?.green}}>Rp</Text>
        ) : null}
        <TextInput
          // value={defaultValue}
          ref={inputRef}
          value={value}
          // defaultValue={defaultValue}
          placeholder={placeholder}
          keyboardType={typeKeyboard}
          // onFocus={() => setFocused(true)}
          // onBlur={() => setFocused(false)}
          style={{
            //   backgroundColor: "red",
            // alignSelf:""
            height: sizes(44),
            fontSize: sizes(14),
            //   lineHeight: sizes(),
            paddingLeft: sizes(12),
            fontFamily: FONTS?.fontsMedium,
            color: colors?.greenDark,
          }}
          // onEndEditing={(text) => setNoRek(text)}
          onChangeText={onChangeText}
          placeholderTextColor={colors?.greyMedium}
        />
      </Pressable>
    </View>
  );
};

export default CustomInputs;
