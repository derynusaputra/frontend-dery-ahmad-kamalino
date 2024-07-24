import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Modal } from "react-native-paper";
import { sizes } from "../../../constants/sized";
import { useTheme } from "@react-navigation/native";
import Gap from "../../../components/Gap/Gap";

const ModalConfirm = ({ isModal, setIsModal, onPressConfirm }) => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <Modal
      visible={isModal}
      onDismiss={() => setIsModal(!isModal)}
      style={{
        justifyContent: "center",
        // zIndex: 99999,
        // position: "absolute",
      }}
      contentContainerStyle={{
        backgroundColor: "white",
        margin: sizes(19),
        borderRadius: sizes(12),
        padding: sizes(24),
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: sizes(16),
          color: colors?.green,
          textAlign: "center",
        }}
      >
        Konfirmasi
      </Text>
      <Text
        style={{
          textAlign: "center",

          fontFamily: "Poppins-Medium",
          fontSize: sizes(12),
          color: colors?.greyMedium,
          marginTop: sizes(15),
          marginBottom: sizes(15),
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: colors?.greyMedium,
          borderRadius: sizes(15),
          padding: sizes(7),
          fontFamily: "Poppins-Medium",
          fontSize: sizes(14),
          color: colors?.grey,
        }}
        secureTextEntry
        // value={""}
        placeholderTextColor={colors?.greyMedium}
        placeholder="Password"
      />
      <Gap height={sizes(20)} />
      <Pressable
        onPress={onPressConfirm}
        style={{
          backgroundColor: colors?.green,
          paddingVertical: sizes(10),
          alignItems: "center",
          borderRadius: sizes(15),
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: sizes(12),
            color: colors?.white,
          }}
        >
          Konfirmasi
        </Text>
      </Pressable>
    </Modal>
  );
};

export default ModalConfirm;

const styles = StyleSheet.create({});
