import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import Gap from "../Gap/Gap";
import { sizes } from "../../constants/sized";
import { Satellite } from "../../services/satellite";
import { useSelector } from "react-redux";

const ModalConfirms = ({
  title = "",
  isModal,
  setIsModal,
  onPressConfirm,
  //   valPass,
  //   setValPass,
  isActive = false,
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const [valPass, setValPass] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const profile = useSelector((state) => state.account.profileData);

  const confirm = async (value) => {
    setLoading(true);
    try {
      const { data } = await Satellite().post(`/api/auth/login`, {
        nis: profile?.nis,
        password: valPass,
      });

      setErrMessage("");

      setIsModal(false);
      onPressConfirm?.();
      //   navigation?.navigate("PembayaranSukses");
    } catch (error) {
      //   setShowSnackbar(true);
      setErrMessage("Password Salah");
      console.log("LoginButton", error);
    }
    setValPass("");
    setLoading(false);
  };
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
        {title}
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
        autoCapitalize={"none"}
        onChangeText={(val) => {
          setValPass(val.trim());
        }}
        secureTextEntry
        value={valPass}
        placeholderTextColor={colors?.greyMedium}
        placeholder="Password"
      />
      {errMessage ? (
        <Text
          style={{
            // textAlign: "center",

            fontFamily: "Poppins-Medium",
            fontSize: sizes(9),
            color: colors?.red,
            marginVertical: sizes(5),
          }}
        >
          {errMessage}
        </Text>
      ) : (
        <Gap height={sizes(20)} />
      )}

      <Pressable
        onPress={loading ? () => {} : confirm}
        disabled={valPass !== "" ? false : true}
        style={{
          backgroundColor: valPass !== "" ? colors?.green : colors?.grey,
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
          {loading ? "Loading" : " Konfirmasi"}
        </Text>
      </Pressable>
    </Modal>
  );
};

export default ModalConfirms;

const styles = StyleSheet.create({});
