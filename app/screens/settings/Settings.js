import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {COLORS, IMAGES} from "../../constants/theme";
import Header from "../../layout/Header";
import {GlobalStyleSheet} from "../../constants/styleSheet";
import {useTheme} from "@react-navigation/native";
import Headers from "../../layout/Headers";
import {useDispatch} from "react-redux";
import {onLoginSucces} from "../../store/auth/Account";

const SettingData = [
  //   {
  //     id: "1",
  //     image: IMAGES.bell,
  //     text: "Notification",
  //     navigate: "SettingNotification",
  //   },
  //   {
  //     id: "2",
  //     image: IMAGES.verified,
  //     text: "Security",
  //     navigate: "Security",
  //   },
  //   {
  //     id: "3",
  //     image: IMAGES.usename,
  //     text: "Account",
  //     navigate: "Account",
  //   },
  {
    id: "4",
    image: IMAGES.about,
    text: "About",
    navigate: "About",
  },
  //   {
  //     id: "5",
  //     image: IMAGES.save,
  //     text: "Save",
  //     navigate: "Save",
  //   },
  // {
  //   id: "6",
  //   image: IMAGES.theme,
  //   text: "Theme",
  //   navigate: "Theme",
  // },
  {
    id: "7",
    image: IMAGES.logout,
    text: "Log out",
    navigate: "Login",
  },
];

const Settings = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{backgroundColor: colors.card, flex: 1}}>
      <Headers
        title={"Setting"}
        backgroundColor={colors?.white}
        icColor={colors?.green}
      />
      <View style={[GlobalStyleSheet.container, {marginTop: 10}]}>
        {SettingData.map((data, index) => {
          return (
            <View key={index} style={{marginHorizontal: -15}}>
              <TouchableOpacity
                onPress={() => {
                  if (data.navigate === "Login") {
                    dispatch(onLoginSucces(null));
                    navigation.reset({
                      index: 0,
                      routes: [{name: "Login"}],
                    });
                  } else {
                    navigation.navigate(data.navigate);
                  }
                }}
                style={[
                  GlobalStyleSheet.flexalingjust,
                  {
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    marginHorizontal: 15,
                  },
                ]}
              >
                <View style={GlobalStyleSheet.flexaling}>
                  <Image
                    style={[
                      GlobalStyleSheet.image2,
                      {
                        height: 20,
                        width: 20,
                        resizeMode: "contain",
                        tintColor: colors.black,
                      },
                    ]}
                    source={data.image}
                  />
                  <Text
                    style={[
                      GlobalStyleSheet.textfont,
                      {fontSize: 15, marginLeft: 10, color: colors.black},
                    ]}
                  >
                    {data.text}
                  </Text>
                </View>
                <Image
                  style={[
                    GlobalStyleSheet.image2,
                    {
                      height: 15,
                      width: 15,
                      resizeMode: "contain",
                      tintColor: colors.black,
                    },
                  ]}
                  source={IMAGES.rigtharrow}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Settings;
