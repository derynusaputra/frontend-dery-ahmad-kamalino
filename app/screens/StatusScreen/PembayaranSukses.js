import {
  BackHandler,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, {useCallback} from "react";
import {useFocusEffect, useTheme} from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import Gap from "../../components/Gap/Gap";
import {IMAGES} from "../../constants/theme";
import {sizes} from "../../constants/sized";

const PembayaranSukses = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // navigation.navigate("HNavHome");

        navigation.reset({
          index: 0,
          routes: [{name: "Login"}],
        });
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, []),
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors?.white}}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: sizes(24),
        }}
      >
        <FastImage
          style={{
            height: sizes(230),
            width: sizes(230),
          }}
          resizeMode="cover"
          source={IMAGES?.gbrBayarSukses}
        />
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: sizes(16),
            color: colors?.green,
          }}
        >
          Transaksi Sukses!
        </Text>
        <Gap height={sizes(5)} />
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: sizes(12),
            color: colors?.grey,
            textAlign: "center",
          }}
        >
          Transaksi Anda berhasil! Terima kasih telah bertransaksi dengan kami.
        </Text>
        <Gap height={sizes(20)} />

        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: "Login"}],
            });
          }}
          style={{
            width: sizes(250),
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
            Selesai
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PembayaranSukses;

const styles = StyleSheet.create({});
