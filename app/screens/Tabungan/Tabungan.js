import {
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
import Headers from "../../layout/Headers";
import SectionWallet from "./Componen/SectionWallet";
import {sizes} from "../../constants/sized";
import SectionPemasukan from "./Componen/SectionPemasukan";
import SectionHistory from "./Componen/SectionHistory";
import {useSelector} from "react-redux";
import {formatToRupiah, getDateAgo} from "../../services/Helper";
import {Satellite} from "../../services/satellite";
import {ActivityIndicator} from "react-native";
import EmptyCustom from "components/Empty/EmptyCustom";

const Tabungan = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const profile = useSelector((state) => state.account.profileData);
  const JWT = useSelector((state) => state.account.token);
  const [data, setData] = useState(null);
  const [datas, setDatas] = useState([]);
  const [valCashFlow, setValCashFlow] = useState(null);

  const [loading, setLoading] = useState(false);

  const getHistory = async () => {
    setLoading(true);

    try {
      const {data} = await Satellite(JWT).get(
        `api/transactions/history?filter=topup&sort_by=id&sort_type=asc&limit=10&page=1`,
      );

      setData(data?.result);
      setDatas(data?.result?.history);
    } catch (error) {
      // setErrMessage("error");
      console.log("getHistory", error);
    }
    setLoading(false);
  };

  const getCashFlow = async () => {
    setLoading(true);

    try {
      const {data} = await Satellite(JWT).get(
        `/api/transactions/history/summary-ammount`,
      );
      setValCashFlow(data?.result);
      // setDatas(data?.result?.history);
    } catch (error) {
      // setErrMessage("error");
      console.log("getHistory", error);
    }
    setLoading(false);
  };

  // /api/transactions/history/summary-ammount
  useEffect(() => {
    getHistory();
    getCashFlow();
  }, []);
  const renderItem = ({item}) => {
    return (
      // <View>
      //   <Text>halo</Text>
      // </View>
      <SectionHistory
        isOut={item?.transaction_method === "increase" ? false : true}
        title={`${item?.transaction_type ?? ""}`}
        // value={`${formatToRupiah(item?.total_amount ?? 0)}`}
        time={item?.created_at ?? 0}
        // title={`asd`}
        value={item?.total_amount ?? 0}
        // time={`asd`}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors?.white}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Tabungan"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        {loading ? (
          <ActivityIndicator style={{flex: 1}} color={colors?.black} />
        ) : (
          <FlatList
            data={datas ?? []}
            ListEmptyComponent={EmptyCustom}
            ListHeaderComponent={() => {
              return (
                <View>
                  <SectionWallet
                    saldo={formatToRupiah(
                      profile?.user_savings[0]?.total_savings,
                    )}
                    onPressTopUp={() => {
                      navigation?.navigate("Withdraw");
                    }}
                  />
                  <SectionPemasukan cash={valCashFlow} />
                </View>
              );
            }}
            renderItem={renderItem}
            contentContainerStyle={{
              // flex: 1,
              paddingHorizontal: sizes(15),
            }}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Tabungan;

const styles = StyleSheet.create({});
