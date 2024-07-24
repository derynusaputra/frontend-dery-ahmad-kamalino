import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useTheme} from "@react-navigation/native";
import {ScreenHeight} from "@rneui/base";
import {Tabs} from "react-native-collapsible-tab-view";
import {sizes} from "constants/sized";
import CardItems from "./CardItems";

const ScreenRiwayat = ({data = [], isLoading, navigation}) => {
  const {colors} = useTheme();

  // /api/payments/histories?sort_by=id&sort_type=desc&limit=100&page=1&payments_id=1

  return isLoading ? (
    <View style={{justifyContent: "center", height: ScreenHeight - 100}}>
      <ActivityIndicator
        animating={true}
        color={colors.lahtube}
        size={"large"}
      />
    </View>
  ) : (
    <Tabs.FlatList
      data={data}
      keyExtractor={(item, index) => `key_pengeleran${index}`}
      style={{
        paddingHorizontal: sizes(20),
      }}
      renderItem={({item, index}) => {
        return (
          <CardItems
            type={"pengeluaran"}
            data={item}
            onPress={() => {
              //   navigation?.navigate("RiwayatDetailScreen", {data: item})
            }}
          />
        );
      }}
    />
  );
};

export default ScreenRiwayat;

const styles = StyleSheet.create({});
