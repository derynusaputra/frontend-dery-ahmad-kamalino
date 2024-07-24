import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {COLORS, FONTS, IMAGES} from "../../constants/theme";
import {useFocusEffect, useIsFocused, useTheme} from "@react-navigation/native";
import {GlobalStyleSheet} from "../../constants/styleSheet";
import Button from "../../components/button/Button";
import LoadingComp from "../../components/Loading/LoadingComp";
import Gap from "../../components/Gap/Gap";
import {sizes} from "../../constants/sized";
import {useDispatch, useSelector} from "react-redux";
import {Satellite} from "../../services/satellite";
import {onLoginSucces} from "../../store/auth/Account";
import {Snackbar} from "react-native-paper";
import HomeScreens from "../home/HomeScreens";

const Login = ({navigation}) => {
  const JWT = useSelector((state) => state.account.token);
  // const loadAccount = useSelector((state) => state.account.loadAccount);

  const isFocused = useIsFocused();

  const [valUser, setValUser] = useState("");
  const [valPass, setValPass] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const dispatch = useDispatch();
  const theme = useTheme();
  const {colors} = theme;

  const [show, setshow] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const [inputFocus, setFocus] = React.useState({
    onFocus1: false,
    onFocus2: false,
  });

  const postData = async (url = "", data = {}) => {
    try {
      const response = await fetch(url, {
        method: "POST", // Metode HTTP
        headers: {
          "Content-Type": "application/json", // Header untuk JSON
        },
        body: JSON.stringify(data), // Data yang dikirim dalam bentuk JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const responseData = await response.json();
      console.log("POST response data:", responseData);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const LoginButton = async () => {
    setLoading(true);
    try {
      const {data} = await Satellite().post(`/api/auth/login`, {
        nis: Number(valUser),
        password: valPass,
      });

      dispatch(onLoginSucces(data?.result));
    } catch (error) {
      setShowSnackbar(true);
      // setErrMessage("error");
      console.log("LoginButton", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (JWT) {
      setValUser("");
      setValPass("");
    }
  }, [JWT]);

  if (JWT) {
    return <HomeScreens navigation={navigation} />;
  }

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === "ios" ? "padding" : ""}
        >
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{backgroundColor: colors?.green, flex: 1}}>
              <View style={{alignItems: "center"}}>
                <View
                  style={{
                    paddingTop: 40,
                    paddingBottom: 20,
                  }}
                >
                  <Image style={{width: 80, height: 80}} source={IMAGES.logo} />
                </View>
                <Text style={GlobalStyleSheet.formtitle}>Login Akun</Text>
                <Text style={GlobalStyleSheet.forndescription}>
                  Pondok Pesantren Modern Al-Musyarrofah
                </Text>
              </View>
              <View
                style={[
                  GlobalStyleSheet.loginarea,
                  {backgroundColor: colors.card},
                ]}
              >
                <Text
                  style={[GlobalStyleSheet.inputlable, {color: colors.black}]}
                >
                  Kode Santri
                </Text>
                <View
                  style={[
                    GlobalStyleSheet.inputBox,
                    {
                      backgroundColor: colors.greenOpacity,
                    },
                    inputFocus.onFocus1 && {
                      borderColor: colors.green,
                    },
                  ]}
                >
                  <Image
                    style={[
                      GlobalStyleSheet.inputimage,
                      {
                        tintColor: colors.black,
                      },
                    ]}
                    source={IMAGES.email}
                  />

                  <TextInput
                    style={[GlobalStyleSheet.input, {color: colors.black}]}
                    placeholder="Masukkan Kode Santri"
                    placeholderTextColor={colors.grey}
                    onFocus={() => setFocus({...inputFocus, onFocus1: true})}
                    onBlur={() => setFocus({...inputFocus, onFocus1: false})}
                    keyboardType="number-pad"
                    onChangeText={(val) => {
                      setValUser(val);
                    }}
                  />
                </View>

                <Text
                  style={[GlobalStyleSheet.inputlable, {color: colors.grey}]}
                >
                  Kata Sandi
                </Text>
                <View
                  style={[
                    GlobalStyleSheet.inputBox,
                    {
                      backgroundColor: colors.greenOpacity,
                    },
                    inputFocus.onFocus2 && {
                      borderColor: colors.green,
                    },
                  ]}
                >
                  <Image
                    style={[
                      GlobalStyleSheet.inputimage,
                      {
                        tintColor: colors?.black,
                      },
                    ]}
                    source={IMAGES.lock}
                  />

                  <TextInput
                    style={[GlobalStyleSheet.input, {color: colors.black}]}
                    placeholder="Masukkan Kata Sandi"
                    placeholderTextColor={colors.grey}
                    secureTextEntry={show}
                    onFocus={() => setFocus({...inputFocus, onFocus2: true})}
                    onBlur={() => setFocus({...inputFocus, onFocus2: false})}
                    onChangeText={(val) => {
                      setValPass(val);
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      position: "absolute",
                      right: 15,
                    }}
                    onPress={() => {
                      setshow(!show);
                    }}
                  >
                    <Image
                      style={[
                        GlobalStyleSheet.inputSecureIcon,
                        {
                          tintColor: colors.black,
                        },
                      ]}
                      source={show ? IMAGES.eyeclose : IMAGES.eyeopen}
                    />
                  </TouchableOpacity>
                </View>
                <Gap height={sizes(10)} />
                <Button title="Login" onPress={LoginButton} />
                <Gap height={sizes(50)} />

                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: sizes(12),
                    color: colors?.grey,
                    textAlign: "center",
                  }}
                >
                  By signing up you agree to our{" "}
                  {
                    <Text
                      onPress={() => {
                        navigation?.navigate("PrivacyPolicy");
                      }}
                      style={{
                        fontFamily: "Poppins-Medium",
                        fontSize: sizes(12),
                        color: colors?.blue,
                        textAlign: "center",
                      }}
                    >
                      Privacy Policy
                    </Text>
                  }
                  {" and "}
                  <Text
                    onPress={() => {
                      navigation?.navigate("Terms");
                    }}
                    style={{
                      fontFamily: "Poppins-Medium",
                      fontSize: sizes(12),
                      color: colors?.blue,
                      textAlign: "center",
                    }}
                  >
                    Terms & Conditions
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
      {loading ? <LoadingComp /> : null}
      <Snackbar
        visible={showSnackbar}
        onDismiss={() => setShowSnackbar(false)}
        onIconPress={() => setShowSnackbar(false)}
        duration={3000}
      >
        Login failed!!!
      </Snackbar>
    </>
  );
};

export default Login;
