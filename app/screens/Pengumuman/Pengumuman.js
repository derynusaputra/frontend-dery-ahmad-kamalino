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
import Headers from "../../layout/Headers";
import CardPengumuman from "./Component/CardPengumuman";
import {IMAGES} from "../../constants/theme";
import {useDispatch, useSelector} from "react-redux";
import {Satellite} from "../../services/satellite";
import {getAnnouncement} from "../../store/auth/actionAsync/announct";
import {sizes} from "../../constants/sized";
import EmptyCustom from "components/Empty/EmptyCustom";

const Pengumuman = ({navigation}) => {
  const JWT = useSelector((state) => state.account.token);

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const theme = useTheme();
  const {colors} = theme;
  const [loading, setLoading] = useState(false);

  const getAnnounch = async () => {
    setLoading(true);
    try {
      const {data} = await Satellite(JWT).get(`api/announcements/all`);
      setData(data?.result);
      // setDatas(data?.result?.history);
    } catch (error) {
      // setErrMessage("error");
      console.log("getHistory", error);
    }
    setLoading(false);
  };

  // console.log({ getAnnounch });
  useEffect(() => {
    getAnnounch();
  }, []);

  const renderItem = ({index, item}) => {
    return (
      <CardPengumuman
        onPress={() => {
          // navigation?.navigate("PembayaranBerulangScreen");
        }}
        title={item?.title ?? ""}
        subtitle={item?.description}
        image={
          item?.announce_types === "cashless"
            ? IMAGES.gbrAnnCashless
            : IMAGES.gbrAnnScholl
        }
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
          title={"Pengumuman"}
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />

        {loading ? (
          <ActivityIndicator style={{flex: 1}} color={colors?.black} />
        ) : (
          <FlatList
            data={data ?? []}
            renderItem={renderItem}
            contentContainerStyle={{
              // flex: 1,
              backgroundColor: colors?.white,
              // paddingHorizontal: sizes(15),
            }}
            ListEmptyComponent={() => {
              return <EmptyCustom />;
            }}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Pengumuman;

const styles = StyleSheet.create({});
