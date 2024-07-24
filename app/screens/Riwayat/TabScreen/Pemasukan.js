import {screenHeight, sizes} from "constants/sized";
import {Tabs} from "react-native-collapsible-tab-view";
import CardItem from "../Component/CardItem";
import {useTheme} from "@react-navigation/native";
import {ActivityIndicator, View} from "react-native";
import EmptyCustom from "components/Empty/EmptyCustom";

const Pemasukan = ({data = [], isLoading, navigation}) => {
  const {colors} = useTheme();

  // Format tanggal
  // console.log("tai", data?.transaction_type);

  return isLoading ? (
    <View style={{justifyContent: "center", height: screenHeight - 100}}>
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
      ListEmptyComponent={EmptyCustom}
      renderItem={({item, index}) => {
        if (item?.transaction_type === "topup") {
          return (
            <CardItem
              type={"pemasukan"}
              data={item}
              onPress={() => {
                navigation?.navigate("RiwayatDetailScreen", {data: item});
              }}
            />
          );
        }
      }}
    />
  );
};

export default Pemasukan;
