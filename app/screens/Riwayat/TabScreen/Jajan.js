import Gap from "components/Gap/Gap";
import TextCustom from "components/Text/TextCustom";
import {sizes} from "constants/sized";
import {COLORS, FONTS} from "constants/theme";
import {ActivityIndicator, View} from "react-native";
import {Tabs} from "react-native-collapsible-tab-view";
import CardItem from "../Component/CardItem";
import {useTheme} from "@react-navigation/native";
import {ScreenHeight} from "@rneui/base";
import EmptyCustom from "components/Empty/EmptyCustom";

const Jajan = ({data = [], isLoading, navigation}) => {
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
        if (item?.transaction_type === "buying") {
          return (
            <CardItem
              type={"jajan"}
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

export default Jajan;
