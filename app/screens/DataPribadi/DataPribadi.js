import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import {useTheme} from "@react-navigation/native";
import {screenWidth, sizes} from "../../constants/sized";
import {GlobalStyleSheet} from "../../constants/styleSheet";
import {Icon, Input} from "@rneui/themed";
import Header from "../../layout/Header";
import Headers from "../../layout/Headers";
import FastImage from "react-native-fast-image";
import Gap from "../../components/Gap/Gap";
import TextInputCustom from "./Component/TextInputCustom";
import {useSelector} from "react-redux";
import {capitalizeWords} from "../../services/Helper";
import {IMAGES} from "constants/theme";

const DataPribadi = () => {
  const profile = useSelector((state) => state.account.profileData);

  const theme = useTheme();
  const {colors} = theme;
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: colors?.green,
          }}
        >
          <View
            style={{
              // backgroundColor: "red",
              flex: 1,
              height: sizes(900),
              width: "100%",

              // padding: sizes(15),
            }}
          >
            {/* stack pertma */}
            <View
              style={{
                backgroundColor: colors.white,
                marginTop: sizes(90),
                flex: 1,
                padding: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingTop: 35,
              }}
            ></View>
            {/* stack kedua */}
            <View
              style={{
                // height: sizes(50),
                // width: sizes(50),
                width: "100%",
                flex: 1,
                // backgroundColor: "red",
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Gap height={sizes(29)} />
              <FastImage
                style={{
                  height: sizes(120),
                  width: sizes(120),
                  borderRadius: sizes(300),
                  backgroundColor: colors?.greyLight,
                }}
                resizeMode="cover"
                // source={{
                //   uri: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                //   headers: {Authorization: "someAuthToken"},

                //   priority: FastImage.priority.high,
                // }}
                source={IMAGES?.gbrDefaultProfile}
              />
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: sizes(16),
                  color: colors?.green,
                  marginTop: sizes(12),
                  marginBottom: sizes(18),
                }}
              >
                {capitalizeWords(profile?.fullname ?? "")}
              </Text>

              <View
                style={{
                  flex: 1,
                  width: sizes(344),
                  backgroundColor: colors?.white,
                  borderRadius: sizes(24),
                  paddingVertical: sizes(20),
                  shadowColor: "#000",
                  elevation: 2,
                }}
              >
                <TextInputCustom
                  editable={true}
                  title={"Nama Lengkap"}
                  value={capitalizeWords(profile?.fullname ?? "")}
                />

                <TextInputCustom
                  editable={true}
                  title={"Kode Santri"}
                  value={`${profile?.nis}`}
                />
                <TextInputCustom
                  editable={true}
                  title={"Kelas"}
                  value={`${profile?.class}`}
                />

                <TextInputCustom
                  editable={true}
                  title={"Tempat, Tanggal Lahir"}
                  value={`${capitalizeWords(profile?.place_of_birth)}, ${
                    profile?.date_of_birth
                  }`}
                />

                <TextInputCustom
                  editable={true}
                  title={"Nomer Telepon"}
                  value={`${profile?.phone_number}`}
                />

                <TextInputCustom
                  editable={true}
                  title={"Alamat"}
                  value={"Jl. Ganesa No.10, Lb. Siliwangi"}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DataPribadi;

const styles = StyleSheet.create({});
