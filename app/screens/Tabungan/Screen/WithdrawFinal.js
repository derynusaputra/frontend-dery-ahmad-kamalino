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
import React, {useCallback, useEffect, useMemo, useState} from "react";
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
import {IconButton, Snackbar} from "react-native-paper";
import {formatToRupiah} from "services/Helper";
import {formatNumber} from "services/Helper";
import LoadingComp from "components/Loading/LoadingComp";

const WithdrawFinal = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const JWT = useSelector((state) => state.account.token);
  const profile = useSelector((state) => state.account.profileData);
  console.log(profile?.balance_users?.total_balance);

  const [checked, setChecked] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [shoMinimum, setShoMinimum] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [amount, setAmount] = useState(0);

  const handleChangeText = (text) => {
    // Hapus karakter non-digit dari input
    // if (text != coinPrice && checked) {
    //   setChecked(false);
    // }
    const cleanText = text.replace(/\D/g, "");
    // Konversi string menjadi angka
    const number = parseInt(cleanText);

    console.log({number});
    if (number) {
      setAmount(formatNumber(number));
    } else {
      setAmount(0);
    }
  };

  const handleSendTransfer = async () => {
    setLoading(true);

    const cleanText = amount.replace(/\D/g, "");

    console.log({cleanText});

    try {
      const {data} = await Satellite(JWT).post(`/api/withdraw/request`, {
        user_id: profile?.id,
        total_amount_withdraw: Number(cleanText),
      });

      console.log({data});
      // navigation?.pop();
      navigation?.navigate("PembayaranSukses");

      //   dispatch(onLoginSucces("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaXMiOjEyMzQ1LCJpZCI6IjIiLCJpYXQiOjE3MTg4MjU4MzAsImV4cCI6MTc0OTkyOTgzMH0.n7OhGOmVFOE62GmKGVymq3BegQ8TgkG34Rjtt2beVeQ"));
    } catch (error) {
      //   setShowSnackbar(true);
      setErrMsg("Withdraw failed");
      setVisible(true);
      console.log("handleSendTransfer", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (amount === formatNumber(profile?.balance_users?.total_balance)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    if (amount) {
      const cleanText = amount.replace(/\D/g, "");
      // Konversi string menjadi angka
      const number = parseInt(cleanText);
      if (number > profile?.balance_users?.total_balance) {
        setShoMinimum(true);
        setShowButton(false);
      } else {
        setShoMinimum(false);
        if (number >= 1000) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    }
  }, [amount]);

  // useCallback(() => {
  //   // const data = amount >= 1000 && amount <= profile?.myCoins;
  //   // const data = amount >= 1000 && amount;

  //   // return data;
  //   if (amount === formatNumber(profile?.balance_users?.total_balance)) {
  //     console.log("benar");
  //   } else {
  //     console.log("salah");
  //   }
  // }, [amount]);

  // const showButton = useMemo(() => {
  //   // const data = amount >= 1000 && amount <= profile?.myCoins;
  //   if (amount) {

  //      const cleanText = amount.replace(/\D/g, "");
  //      const number = parseInt(cleanText);

  //     const data = number > profile?.balance_users?.total_balance;
  //   }

  //   return data;
  // }, [amount]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors?.white}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Withdraw"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        <ScrollView style={{}}>
          <Formik
            initialValues={{
              amount: 0,
              bankId: null,
            }}
            onSubmit={(values) => {
              // console.log({values});
              // const payload = {
              //   coins: amount,
              //   bankId: route?.params?.itemBank?.id,
              // };
              //   handleSendTransfer(payload);
              handleSendTransfer();
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
              // const isComplete = () => {
              //   return (
              //     values.bankAccountNumber !== "" &&
              //     values.bankName !== "" &&
              //     values.ownerName !== "" &&
              //     values.bankId !== ""
              //   );
              // };

              return (
                <View
                  style={{
                    // height: ScreenHeight,

                    paddingVertical: sizes(10),
                    backgroundColor: colors?.greyShopee,
                  }}
                >
                  <View
                    style={{
                      // marginVertical: sizes(10),
                      paddingVertical: sizes(5),
                      paddingHorizontal: sizes(15),
                      backgroundColor: colors?.white,

                      // flexDirection: "row",
                      // alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextCustom
                      value={"Withdraw ke Bank"}
                      // width={sizes(130)}
                      fontSize={sizes(12)}
                      color={colors?.green}
                      fontFamily={FONTS?.fontsRegular}
                    />
                    <View
                      style={{
                        marginVertical: sizes(10),
                        flexDirection: "row",
                        alignItems: "flex-start",
                      }}
                    >
                      <Icon
                        type={"material-community"}
                        name={"credit-card-multiple"}
                        size={sizes(25)}
                        color={colors?.black}
                      />

                      <View style={{marginLeft: sizes(10)}}>
                        <TextCustom
                          value={"Dery Ahmad Kamalino"}
                          // width={sizes(130)}
                          fontSize={sizes(10)}
                          color={colors?.black}
                          fontFamily={FONTS?.fontsRegular}
                        />
                        <TextCustom
                          value={"Withdraw ke Bank"}
                          // width={sizes(130)}
                          fontSize={sizes(9)}
                          color={colors?.grey}
                          fontFamily={FONTS?.fontsRegular}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      marginVertical: sizes(10),
                      paddingVertical: sizes(5),
                      paddingHorizontal: sizes(15),

                      backgroundColor: colors?.white,
                      // flexDirection: "row",
                      // alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextCustom
                      value={"Jumlah Withdraw"}
                      // width={sizes(130)}
                      fontSize={sizes(12)}
                      color={colors?.green}
                      fontFamily={FONTS?.fontsRegular}
                    />
                    <View
                      style={{
                        //   height: sizes(36),
                        flexDirection: "row",
                        backgroundColor: colors?.greenOpacity,
                        //   borderWidth: sizes(1),
                        //   borderColor: AppearanceColors.grayBorder,
                        justifyContent: "space-between",
                        borderRadius: sizes(8),
                        marginTop: sizes(7),
                      }}
                    >
                      <View
                        style={{
                          // backgroundColor: "red",
                          justifyContent: "center",
                        }}
                      >
                        <TextCustom
                          value={"Rp"}
                          // width={sizes(130)}
                          fontSize={sizes(12)}
                          color={colors?.black}
                          // textAlign="center"
                          fontFamily={FONTS?.fontsRegular}
                        />
                      </View>
                      <TextInput
                        //  value={values?.ownerName}
                        //  onChangeText={(val) => handleChange("ownerName")(val)}
                        placeholder={"0"}
                        keyboardType="numeric"
                        maxLength={15}
                        onChangeText={handleChangeText}
                        value={`${amount}`}
                        style={{
                          width: sizes(285),
                          // backgroundColor: "red",
                          fontSize: sizes(25),
                          // lineHeight: sizes(16),
                          color: colors?.black,
                        }}
                        placeholderTextColor={colors?.grey}
                      />
                      <IconButton
                        icon={"close-circle"}
                        iconColor={colors?.grey}
                        rippleColor={"rgba(0,0,0,0.05)"}
                        size={sizes(20)}
                        onPress={() => {
                          setAmount(0);
                          if (checked) {
                            setChecked(false);
                          }
                        }}
                        style={{margin: sizes(0), padding: sizes(0)}}
                      />
                    </View>
                    {amount !== 0 ? (
                      <TextCustom
                        value={
                          shoMinimum
                            ? "Saldomu tidak cukup"
                            : "Minimum withdraw Rp1.000"
                        }
                        // width={sizes(130)}
                        fontSize={sizes(9)}
                        color={colors?.red}
                        fontFamily={FONTS?.fontsRegular}
                      />
                    ) : null}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        icon={
                          checked ? "checkbox-marked" : "checkbox-blank-outline"
                        }
                        iconColor={colors?.black}
                        rippleColor={"rgba(0,0,0,0.05)"}
                        size={sizes(20)}
                        onPress={() => {
                          console.log("tai");
                          if (checked) {
                            setAmount(0);
                            setChecked(false);
                          } else {
                            // console.log(coinPrice);
                            setAmount(
                              formatNumber(
                                profile?.balance_users?.total_balance,
                              ),
                            );
                            setChecked(true);
                          }
                          // setChecked(!checked);
                        }}
                        style={{margin: sizes(0), padding: sizes(0)}}
                      />

                      <TextCustom
                        value={`Saldo yang Dapat Diwithdraw:${formatToRupiah(profile?.balance_users?.total_balance ?? 0)}`}
                        // width={sizes(130)}
                        fontSize={sizes(10)}
                        color={colors?.grey}
                        //   fontFamily={FONTS?.fonts}
                      />
                    </View>
                  </View>
                  <Pressable
                    onPress={handleSubmit}
                    disabled={!showButton}
                    style={{
                      // marginHorizontal: sizes(15),
                      paddingVertical: sizes(14),
                      backgroundColor: showButton
                        ? colors?.green
                        : colors?.grey,
                      // borderRadius: sizes(10),
                      alignItems: "center",
                    }}
                  >
                    <TextCustom
                      value={"Lanjutkan"}
                      fontWeight="400"
                      style={{
                        fontSize: sizes(12),
                        color: colors?.white,
                      }}
                    />
                  </Pressable>
                </View>
              );
            }}
          </Formik>
        </ScrollView>
        {/* <CustomButton
                onPress={() => {
                  console.log("asdsad");
                }}
              /> */}

        <Snackbar
          visible={visible}
          onDismiss={() => setVisible(false)}
          action={{
            label: "Ok",
            onPress: () => {
              // Do something
            },
          }}
        >
          {errMsg}
        </Snackbar>
        {loading ? <LoadingComp /> : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WithdrawFinal;

const styles = StyleSheet.create({});
