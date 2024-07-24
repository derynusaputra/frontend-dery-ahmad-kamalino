import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, {useState} from "react";
import {useTheme} from "@react-navigation/native";
import Headers from "../../../layout/Headers";
import {MaterialTabBar, Tabs} from "react-native-collapsible-tab-view";
import {sizes} from "../../../constants/sized";
import DetailScreen from "../Component/DetailScreen";
import PembayaranScreen from "../Component/PembayaranScreen";
import {Modal} from "react-native-paper";
import ModalConfirm from "../Component/ModalConfirm";
import {useSelector} from "react-redux";
import {Satellite} from "services/satellite";
import ScreenRiwayat from "../Component/ScreenRiwayat";

const DetailPembayaran = ({navigation, route}) => {
  const theme = useTheme();
  const {colors} = theme;
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valRiwayat, setValRiwayat] = useState(null);

  const JWT = useSelector((state) => state.account.token);

  console.log(route?.params?.data?.name);

  const datas = route?.params?.data;

  const virtualAccount = "1056242957";

  const numberPhone = "0858-6034-7851";

  const getRiwayatPembayaran = async () => {
    setLoading(true);

    try {
      const {data} = await Satellite(JWT).get(
        `/api/payments/histories?sort_by=id&sort_type=desc&limit=100&page=1&payments_id=${route?.params?.data?.id ?? 0}`,
      );

      setValRiwayat(data?.result);
      // setDatas(data?.result?.history);
    } catch (error) {
      // setErrMessage("error");
      console.log("getRiwayatPembayaran", error);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Detail Pembayaran"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        <View style={{flex: 1, zIndex: -1}}>
          <Tabs.Container
            onIndexChange={(index) => {
              if (index === 1) {
                // getOtherStatus("packed");
                getRiwayatPembayaran();
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
            {/* <Tabs.Tab name="Detail" label={"Detail"}>
              <View style={{paddingTop: sizes(50)}}>
                <DetailScreen />
              </View>
            </Tabs.Tab> */}
            <Tabs.Tab name="Pembayaran" label={"Pembayaran"}>
              <PembayaranScreen
                typeBayar={route?.params?.data?.name}
                paymentsId={route?.params?.data?.id}
                onPress={() => setIsModal(!isModal)}
              />
            </Tabs.Tab>
            <Tabs.Tab name="Riwayat" label={"Riwayat"}>
              <ScreenRiwayat
                isLoading={loading}
                data={valRiwayat?.data ?? []}
                navigation={navigation}
              />
            </Tabs.Tab>
          </Tabs.Container>
        </View>
      </KeyboardAvoidingView>
      <ModalConfirm
        isModal={isModal}
        setIsModal={setIsModal}
        onPressConfirm={() => {
          navigation?.navigate("PembayaranSukses");
        }}
      />
    </SafeAreaView>
  );
};

export default DetailPembayaran;

const styles = StyleSheet.create({});
