import {
  ActivityIndicator,
  FlatList,
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
import Headers from "../../../layout/Headers";
import CardPembayaran from "../Component/CardPembayaran";
import {useSelector} from "react-redux";
import {Satellite} from "services/satellite";
import {sizes} from "constants/sized";
import {ScreenHeight, ScreenWidth} from "@rneui/base";
import EmptyCustom from "components/Empty/EmptyCustom";

const PembayaranBerulangScreen = ({navigation, route}) => {
  console.log(route?.params?.datType);
  const {colors} = useTheme();
  const JWT = useSelector((state) => state.account.token);
  const profile = useSelector((state) => state.account.profileData);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPembayaran = async (value) => {
    setLoading(true);
    try {
      const {data} = await Satellite(JWT).get(
        `/api/payments?sort_by=id&sort_type=desc&limit=100&page=1&user_id=${profile?.id}&date_type=${route?.params?.datType}`,
      );

      // setErrMessage("");
      setData(data?.result);
      // setIsModal(false);
      // onPressConfirm?.();
    } catch (error) {
      //   setShowSnackbar(true);
      // setErrMessage("Password Salah");
      console.log("getPembayaran", error);
    }
    // setValPass("");
    setLoading(false);
  };

  const renderItem = ({item}) => {
    return (
      <CardPembayaran
        onPress={() => {
          //   navigation?.navigate("PembayaranBerulangScreen");
          navigation?.navigate("DetailPembayaran");
        }}
        data={item}
        title={"SPP 2024"}
        status={item?.status}
      />
    );
  };

  useEffect(() => {
    getPembayaran();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors?.white}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={`Pembayaran ${route?.params?.datType === "year" ? "Tahunan" : "Bulanan"}`}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />

        {loading ? (
          <ActivityIndicator style={{flex: 1}} color={colors?.black} />
        ) : (
          <FlatList
            data={data?.data ?? []}
            // ListHeaderComponent={() => {
            //   return (
            //     <View>
            //       <SectionWallet
            //         saldo={formatToRupiah(
            //           profile?.user_savings[0]?.total_savings,
            //         )}
            //         onPressTopUp={() => {
            //           navigation?.navigate("Withdraw");
            //         }}
            //       />
            //       <SectionPemasukan cash={valCashFlow} />
            //     </View>
            //   );
            // }}
            // ListEmptyComponent={() => {
            //   return (
            //     <View
            //       style={{
            //         width: ScreenWidth,
            //         height: sizes(500),
            //         justifyContent: "center",
            //         alignItems: "center",
            //       }}
            //     >
            //       <Text>Tidak ada pembayaran</Text>
            //     </View>
            //   );
            // }}
            ListEmptyComponent={() => {
              return <EmptyCustom />;
            }}
            renderItem={renderItem}
            contentContainerStyle={{
              // flex: 1,
              paddingBottom: sizes(15),
            }}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PembayaranBerulangScreen;

const styles = StyleSheet.create({});
