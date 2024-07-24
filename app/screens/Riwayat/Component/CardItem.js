import {useTheme} from "@react-navigation/native";
import Gap from "components/Gap/Gap";
import TextCustom from "components/Text/TextCustom";
import {sizes} from "constants/sized";
import {COLORS, FONTS, IMAGES} from "constants/theme";
import {Pressable} from "react-native";
import {Image, View} from "react-native";
import {formatDate, formatToRupiah} from "services/Helper";

const CardItem = ({data, type, onPress}) => {
  const {colors} = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "white",
        padding: sizes(20),
        borderRadius: sizes(15),
        marginTop: sizes(10),
        elevation: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextCustom
          width={sizes(187)}
          numberOfLines={1}
          fontFamily={FONTS.fontsSemiBold}
          value={
            data?.transaction_details === "top_up_savings_parent"
              ? "TopUp Orang Tua"
              : data?.transaction_details ?? "Pengeluaran"
          }
          fontSize={sizes(16)}
          color={colors.green}
        />
        <TextCustom
          numberOfLines={1}
          fontFamily={FONTS.fontsSemiBold}
          value=""
          fontSize={sizes(12)}
          color={colors.gray}
        />
      </View>

      <TextCustom
        numberOfLines={1}
        fontFamily={FONTS.fontsMedium}
        value={formatDate(data?.created_at ?? 0)}
        fontSize={sizes(10)}
        color={colors.gray}
      />

      {type === "jajan" && (
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Image style={{width: 20, height: 20}} source={IMAGES.shop} />
          <Gap width={sizes(4)} />
          <TextCustom
            color={colors.gray}
            value={`Kantin ${data?.users_transaction_histories_receiver_idTousers?.fullname}`}
          />
        </View>
      )}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: sizes(0),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextCustom
            numberOfLines={1}
            fontFamily={FONTS.fontsMedium}
            value="Metode"
            fontSize={sizes(12)}
            color={colors.grey}
          />
          <Gap width={sizes(8)} />
          <TextCustom
            numberOfLines={1}
            fontFamily={FONTS.fontsSemiBold}
            value={data?.transaction_type ?? ""}
            fontSize={sizes(12)}
            color={colors.green}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextCustom
            numberOfLines={1}
            fontFamily={FONTS.fontsMedium}
            value="Jumlah"
            fontSize={sizes(12)}
            color={colors.gray1}
          />
          <Gap width={sizes(8)} />
          <TextCustom
            numberOfLines={1}
            fontFamily={FONTS.fontsSemiBold}
            value={formatToRupiah(data?.total_amount ?? 0)}
            fontSize={sizes(12)}
            color={
              type === "pengeluaran"
                ? colors.red
                : type === "pemasukan"
                  ? colors.green
                  : type === "jajan"
                    ? colors.red
                    : ""
            }
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CardItem;
