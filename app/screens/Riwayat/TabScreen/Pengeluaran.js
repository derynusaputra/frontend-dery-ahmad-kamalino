import Gap from "components/Gap/Gap";
import TextCustom from "components/Text/TextCustom";
import {sizes} from "constants/sized";
import {COLORS, FONTS} from "constants/theme";
import {ActivityIndicator, View} from "react-native";
import {Tabs} from "react-native-collapsible-tab-view";
import CardItem from "../Component/CardItem";
import {ScreenHeight} from "@rneui/base";
import {useTheme} from "@react-navigation/native";
import moment from "moment";
import EmptyCustom from "components/Empty/EmptyCustom";

const Pengeluaran = ({data = [], isLoading, navigation}) => {
  const {colors} = useTheme();

  // Format tanggal
  // console.log("tai", data?.transaction_type);

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
      ListEmptyComponent={EmptyCustom}
      renderItem={({item, index}) => {
        if (
          item?.transaction_type === "infaq" ||
          item?.transaction_type === "transfer" ||
          item?.transaction_type === "withdrawal_student"
        ) {
          return (
            <CardItem
              type={"pengeluaran"}
              data={item}
              onPress={() =>
                navigation?.navigate("RiwayatDetailScreen", {data: item})
              }
            />
          );
        }
      }}
    />
  );
};

export default Pengeluaran;
