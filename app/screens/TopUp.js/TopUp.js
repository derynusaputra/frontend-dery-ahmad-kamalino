import {
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
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import Headers from "../../layout/Headers";
import { Icon } from "@rneui/base";
import Gap from "../../components/Gap/Gap";
import { sizes } from "../../constants/sized";

const TopUpScreen = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;

  const [active, setActive] = useState(true);

  const CardChoose = ({ icName, title, onPress }) => {
    return (
      <Pressable onPress={onPress}>
        <View
          style={{
            width: sizes(128),
            height: sizes(98),
            backgroundColor: colors?.greenMuda,
            borderRadius: sizes(16),
            padding: sizes(10),
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Icon
            name={icName}
            type="material-community"
            size={sizes(35)}
            color={colors?.green}
          />
          <Gap height={sizes(8)} />
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: sizes(14),
              color: colors?.green,
            }}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Top Up"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: colors?.white,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: sizes(32),
            }}
          >
            <CardChoose
              onPress={() => {
                navigation?.navigate("TopUpTransaksi", { type: "saldo" });
              }}
              icName={"account"}
              title={"Saldo Anak"}
            />
            <Gap width={sizes(20)} />
            <CardChoose
              onPress={() => {
                navigation?.navigate("TopUpTransaksi", { type: "tabungan" });
              }}
              icName={"wallet"}
              title={"Tabungan"}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TopUpScreen;

const styles = StyleSheet.create({});
