import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, {useEffect, useState} from "react";
import {useTheme} from "@react-navigation/native";
import Headers from "../../layout/Headers";
import {MaterialTabBar, Tabs} from "react-native-collapsible-tab-view";
import {sizes} from "../../constants/sized";
import Pengeluaran from "./TabScreen/Pengeluaran";
import Pemasukan from "./TabScreen/Pemasukan";
import Jajan from "./TabScreen/Jajan";
import {Satellite} from "services/satellite";
import {useSelector} from "react-redux";

const Riwayat = ({navigation}) => {
  const {colors} = useTheme();
  const JWT = useSelector((state) => state.account.token);

  const [dataRiwayat, setDataRiwayat] = useState(null);
  const [isloading, setIsloading] = useState(false);

  const getRiwayat = async () => {
    setIsloading(true);
    try {
      const {data} = await Satellite(JWT).get(
        `/api/transactions/history?filter=all&sort_by=id&sort_type=desc&limit=100&page=1&client_type=portal_santri`,
      );
      setDataRiwayat(data?.result);
      // dispatch(setProfileData(data?.result));
    } catch (error) {
      console.log("getRiwayat", error);
    }
    setIsloading(false);
  };
  useEffect(() => {
    getRiwayat();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Riwayat"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        <View style={{flex: 1, zIndex: -1}}>
          <Tabs.Container
            onIndexChange={(index) => {
              if (index === 0) {
                // getOrderStatusPending();
                // getRiwayat({param: "toPup"});
              }
              if (index === 1) {
                // getOtherStatus("packed");
              }
              if (index === 2) {
                // getOtherStatus("shipped");
              }
            }}
            renderTabBar={(props) => {
              return (
                <MaterialTabBar
                  {...props}
                  tabStyle={{
                    elevation: 0,
                    backgroundColor: colors?.white,
                  }}
                  // scrollEnabled
                  activeColor={colors?.blue}
                  inactiveColor={colors?.green}
                  indicatorStyle={{
                    //   height: sizes(3),
                    //   width: sizes(5),

                    backgroundColor: colors?.blue,
                  }}
                  labelStyle={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: sizes(12),
                  }}
                />
              );
            }}
          >
            <Tabs.Tab name="Pengeluaran" label={"Pengeluaran"}>
              <Pengeluaran
                isLoading={isloading}
                data={dataRiwayat?.history ?? []}
                navigation={navigation}
              />
            </Tabs.Tab>
            <Tabs.Tab name="Pemasukan" label={"Pemasukan"}>
              <Pemasukan
                isLoading={isloading}
                data={dataRiwayat?.history ?? []}
                navigation={navigation}
              />
            </Tabs.Tab>

            <Tabs.Tab name="Jajan" label={"Jajan"}>
              <Jajan
                isLoading={isloading}
                data={dataRiwayat?.history ?? []}
                navigation={navigation}
              />
            </Tabs.Tab>
          </Tabs.Container>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Riwayat;

const styles = StyleSheet.create({});
