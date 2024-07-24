import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useEffect, useState} from "react";
import {useFocusEffect, useIsFocused, useTheme} from "@react-navigation/native";
import {sizes} from "../../../constants/sized";
import Headers from "../../../layout/Headers";
import FastImage from "react-native-fast-image";
import {FONTS, IMAGES} from "../../../constants/theme";
import TextCustom from "../../../components/Text/TextCustom";
import CustomButton from "../../../components/button/CustomButton";
import {Icon} from "@rneui/base";
import {useSelector} from "react-redux";
import {Satellite} from "../../../services/satellite";

const WithdrawScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const JWT = useSelector((state) => state.account.token);

  const [data, setData] = useState([]);

  const theme = useTheme();
  const {colors} = theme;

  const getDataBank = async () => {
    try {
      const {data} = await Satellite(JWT).get(`/api/banks`);
      setData(data?.result);

      //   dispatch(onLoginSucces("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaXMiOjEyMzQ1LCJpZCI6IjIiLCJpYXQiOjE3MTg4MjU4MzAsImV4cCI6MTc0OTkyOTgzMH0.n7OhGOmVFOE62GmKGVymq3BegQ8TgkG34Rjtt2beVeQ"));
    } catch (error) {
      //   setShowSnackbar(true);
      console.log("getDataBank", error);
    }
  };

  const deletDataBank = async (id) => {
    console.log({id});

    try {
      const {data} = await Satellite(JWT).delete(`/api/banks/${id}`);
      getDataBank();
      //   dispatch(onLoginSucces("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaXMiOjEyMzQ1LCJpZCI6IjIiLCJpYXQiOjE3MTg4MjU4MzAsImV4cCI6MTc0OTkyOTgzMH0.n7OhGOmVFOE62GmKGVymq3BegQ8TgkG34Rjtt2beVeQ"));
    } catch (error) {
      //   setShowSnackbar(true);
      console.log("getDataBank", error);
    }
  };

  useEffect(() => {
    getDataBank();
  }, [isFocused]);

  const renderHeader = () => {
    return (
      <View>
        <Pressable
          onPress={() => {
            console.log("ti");
            navigation.navigate("AddBank");
          }}
          style={(args) => {
            const btnStyles = [
              {
                marginVertical: sizes(10),
                paddingVertical: sizes(5),
                paddingHorizontal: sizes(15),
                backgroundColor: colors?.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
            ];
            if (args.pressed) {
              return [btnStyles, {opacity: 0.9}];
            }
            return btnStyles;
          }}
        >
          <View
            style={{
              paddingVertical: sizes(10),
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              type={"material-community"}
              name={"bank-outline"}
              size={sizes(25)}
              color={colors?.black}
            />
            <TextCustom
              value={"Tambahkan Rekening Bank"}
              // width={sizes(130)}
              fontSize={sizes(12)}
              textAlign={"center"}
              color={colors?.black}
              fontFamily={FONTS?.fontsMedium}
            />
          </View>
          <Icon
            type={"material-community"}
            name={"chevron-right"}
            size={sizes(25)}
            color={colors?.black}
          />
        </Pressable>
        <View
          style={{
            paddingVertical: sizes(5),
            paddingHorizontal: sizes(15),
            backgroundColor: colors?.white,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: sizes(1),
            borderBottomColor: colors?.greyShopee,
          }}
        >
          <View
            style={{
              paddingVertical: sizes(7),
              // backgroundColor: "red",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextCustom
              value={"Daftar Rekening Bank"}
              // width={sizes(130)}
              fontSize={sizes(12)}
              textAlign={"center"}
              color={colors?.black}
              fontFamily={FONTS?.fontsMedium}
            />
          </View>
        </View>
      </View>
    );
  };
  const renderItem = ({item, active = false}) => {
    console.log({item});
    return (
      <Pressable
        onPress={() => {
          if (!active) {
            navigation?.navigate("WithdrawFinal");
          } else {
            navigation?.navigate("VerifikasiBank");
          }
        }}
        style={{
          paddingVertical: sizes(10),
          borderBottomWidth: 1,
          borderBottomColor: colors?.greyLight,
          marginHorizontal: sizes(16),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{flexDirection: "row"}}>
          <Icon
            type={"material-community"}
            name={active ? "credit-card-multiple" : "credit-card-clock-outline"}
            size={sizes(25)}
            color={colors?.black}
          />
          <View style={{marginLeft: sizes(7)}}>
            <TextCustom
              value={item?.bank_account_name ?? "Name"}
              // width={sizes(130)}
              fontSize={sizes(12)}
              color={colors?.black}
              fontFamily={FONTS?.fontsSemiBold}
            />
            <TextCustom
              value={item?.bank_name ?? "Bank Name"}
              // width={sizes(130)}
              fontSize={sizes(10)}
              color={colors?.grey}
              fontFamily={FONTS?.fontsMedium}
            />
            <TextCustom
              value={item?.bank_account_number ?? ""}
              // width={sizes(130)}
              fontSize={sizes(10)}
              color={colors?.grey}
              fontFamily={FONTS?.fontsMedium}
            />
            {/* <TextCustom
            value={active ? "Terverifikasi" : "Belum Terverifikasi"}
            // width={sizes(130)}
            fontSize={sizes(9)}
            color={active ? colors?.green : colors?.red}
            fontFamily={FONTS?.fontsRegular}
          /> */}
          </View>
        </View>

        <Icon
          onPress={() => {
            console.log("tai", item?.id);

            deletDataBank(item?.id);
          }}
          type={"material-community"}
          name={"delete"}
          size={sizes(25)}
          style={{padding: sizes(5)}}
          color={colors?.black}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Pilih E wallet"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        <FlatList
          data={data ?? []}
          ListHeaderComponent={renderHeader}
          ListHeaderComponentStyle={{backgroundColor: colors?.greyShopee}}
          renderItem={renderItem}
          ListEmptyComponent={() => {
            return (
              <View style={{marginTop: sizes(150)}}>
                <FastImage
                  style={{width: sizes(340), height: sizes(230)}}
                  source={IMAGES.gbrEmptyWallet}
                />
                <TextCustom
                  value={"Belum ada E walllet yang terdaftar"}
                  // width={sizes(130)}
                  fontSize={sizes(12)}
                  textAlign={"center"}
                  color={colors?.greenDark}
                  fontFamily={FONTS?.fontsSemiBold}
                />
              </View>
            );
          }}
          contentContainerStyle={{
            flex: 1,
            // paddingHorizontal: sizes(15),
            backgroundColor: colors?.white,
            // justifyContent: "center",
          }}
        />
        {/* <CustomButton
          onPress={() => {
            console.log("asdsad");
          }}
        /> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({});
