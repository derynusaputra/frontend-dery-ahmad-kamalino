import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, {useEffect, useState} from "react";
import {useTheme} from "@react-navigation/native";
import {sizes} from "../../../constants/sized";
import Headers from "../../../layout/Headers";
import FastImage from "react-native-fast-image";
import {FONTS, IMAGES} from "../../../constants/theme";
import TextCustom from "../../../components/Text/TextCustom";
import CustomButton from "../../../components/button/CustomButton";
import {Icon} from "@rneui/base";
import {Formik} from "formik";
import Gap from "../../../components/Gap/Gap";
import CustomDropdown from "../Componen/CustomDropdown";
import {Satellite} from "../../../services/satellite";
import {useSelector} from "react-redux";
import axios from "axios";
import {dataListBank} from "../../../constants/DummyData/Listbank";
import LoadingComp from "../../../components/Loading/LoadingComp";

const AddBank = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const JWT = useSelector((state) => state.account.token);
  const [loading, setLoading] = useState(false);

  const handleAddBank = async ({values}) => {
    console.log({values});
    setLoading(true);
    const datas = {
      bank_name: values?.bankName,
      bank_account_name: values?.ownerName,
      bank_account_number: values?.bankAccountNumber,
    };

    try {
      const {data} = await Satellite(JWT).post(`/api/banks`, datas);

      navigation?.pop();
      //   dispatch(onLoginSucces("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaXMiOjEyMzQ1LCJpZCI6IjIiLCJpYXQiOjE3MTg4MjU4MzAsImV4cCI6MTc0OTkyOTgzMH0.n7OhGOmVFOE62GmKGVymq3BegQ8TgkG34Rjtt2beVeQ"));
    } catch (error) {
      //   setShowSnackbar(true);
      console.log("handleAddBank", error);
    }
    setLoading(false);
  };

  const TextInputCustom = ({
    name,
    placeholder,
    typeKeyboard = "default",
    onChangeText,
    defaultValue = "",
    value,
  }) => {
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
        <View
          style={{
            height: sizes(44),
            // paddingVertical: sizes(12),
            backgroundColor: "white",
            borderWidth: sizes(1),
            borderColor: colors?.greyMedium,
            borderRadius: sizes(15),
            marginTop: sizes(8),
          }}
        >
          <TextInput
            // value={defaultValue}
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
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors?.white}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Add New Bank"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        {/* <ScrollView> */}
        <Formik
          initialValues={{
            bankAccountNumber: "",
            bankName: "",
            ownerName: "",
          }}
          onSubmit={(values) => {
            // console.log({values});
            handleAddBank({values});
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => {
            const isComplete = () => {
              return (
                values.bankAccountNumber !== "" &&
                values.bankName !== "" &&
                values.ownerName !== ""
              );
            };

            return (
              <View
                style={{
                  width: sizes(346),
                  //   height: sizes(453),
                  paddingBottom: sizes(10),
                  paddingTop: sizes(20),
                  paddingHorizontal: sizes(15),
                  borderWidth: sizes(1),
                  borderColor: colors?.greyLight,
                  marginHorizontal: sizes(15),
                  borderBottomRightRadius: sizes(10),
                  borderBottomLeftRadius: sizes(10),
                }}
              >
                <CustomDropdown
                  data={dataListBank ?? []}
                  title={"Nama Bank"}
                  values={values?.bankName}
                  onChangeText={(val) => {
                    console.log({val});
                    handleChange("bankName")(val?.label);
                  }}
                />

                <Gap height={sizes(5)} />
                <TextInputCustom
                  name={"Nama Pemilik"}
                  placeholder={"Nama Pemilik"}
                  // defaultValue={noRek}
                  value={values?.ownerName}
                  onChangeText={(val) => handleChange("ownerName")(val)}
                />
                <TextInputCustom
                  name={"No. Rekening Bank"}
                  placeholder={"No. Rekening Bank"}
                  typeKeyboard="numeric"
                  value={values?.bankAccountNumber}
                  onChangeText={(val) => handleChange("bankAccountNumber")(val)}
                />
                <Pressable
                  onPress={loading ? null : handleSubmit}
                  disabled={!isComplete()}
                  style={{
                    paddingVertical: sizes(12),
                    marginTop: sizes(30),
                    marginBottom: sizes(10),
                    borderRadius: sizes(15),
                    backgroundColor: isComplete()
                      ? colors?.greenDark
                      : colors?.grey,

                    alignItems: "center",
                  }}
                >
                  <TextCustom
                    value={"Lanjutkan"}
                    // width={sizes(130)}
                    fontSize={sizes(16)}
                    color={colors?.white}
                    fontFamily={FONTS?.fontsMedium}
                  />
                </Pressable>
              </View>
            );
          }}
        </Formik>
        {/* </ScrollView> */}
        {/* <CustomButton
            onPress={() => {
              console.log("asdsad");
            }}
          /> */}
        {loading ? <LoadingComp /> : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddBank;

const styles = StyleSheet.create({});
