import Gap from "components/Gap/Gap";
import TextCustom from "components/Text/TextCustom";
import {sizes} from "constants/sized";
import {COLORS, FONTS, IMAGES} from "constants/theme";
import Headers from "layout/Headers";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from "react-native";
import {Divider} from "react-native-paper";
import {formatToRupiah} from "services/Helper";

const RiwayatDetailScreen = ({route}) => {
  const type = route?.params?.type;
  const data = route?.params?.data;
  // console.log(route?.params?.data);

  const formatDateTime = () => {
    const date = new Date(Number(data?.created_at ?? 0) * 1000);

    // Ambil jam dan menit
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format jam dan menit menjadi HH:mm
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  const tanggal = () => {
    const moment = require("moment");
    require("moment/locale/id"); // Menggunakan locale Indonesia

    // Timestamp dalam detik (perlu dikali 1000 untuk mendapatkan milidetik)
    const timestamp = Number(data?.created_at ?? 0) * 1000;

    // Format tanggal
    const formattedDate = moment(timestamp).locale("id").format("DD MMMM YYYY");

    return formattedDate;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={"Riwayat"}
          backgroundColor={COLORS?.white}
          icColor={COLORS?.green}
        />
        <View
          style={{
            padding: sizes(24),
            marginHorizontal: sizes(15),
            marginTop: sizes(15),
            backgroundColor: COLORS?.white,
            borderRadius: sizes(12),
            shadowColor: "#000",
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <TextCustom
            color={COLORS.green}
            fontSize={sizes(16)}
            fontFamily={FONTS.fontsSemiBold}
            value={data?.transaction_details ?? ""}
          />

          {data?.transaction_type === "buying" && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: sizes(10),
              }}
            >
              <Image style={{width: 20, height: 20}} source={IMAGES.shop} />
              <Gap width={sizes(4)} />
              <TextCustom
                color={COLORS.gray}
                value={`Kantin ${data?.users_transaction_histories_receiver_idTousers?.fullname}`}
              />
            </View>
          )}

          <Gap height={sizes(24)} />
          <View>
            <TextField value={data?.transaction_type ?? ""} label={"Metode"} />
            <Gap height={sizes(24)} />
            <TextField value={`${formatDateTime()} WIB`} label={"Waktu"} />
            <Gap height={sizes(24)} />
            <TextField value={`${tanggal()}`} label={"Tanggal"} />
            <Gap height={sizes(24)} />
            <TextField
              value={data?.transaction_id ?? ""}
              label={"ID Transaksi"}
            />
            <Gap height={sizes(24)} />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                borderStyle: "dashed",
              }}
            />
            <Gap height={sizes(24)} />
            <TextField
              value={formatToRupiah(data?.total_amount ?? 0)}
              label={"Jumlah"}
              width={sizes(145)}
            />
            <Gap height={sizes(24)} />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.gray,
                borderStyle: "dashed",
              }}
            />
            <Gap height={sizes(24)} />
            <TextField
              value={formatToRupiah(data?.total_amount ?? 0)}
              fontSize={sizes(16)}
              width={sizes(145)}
              label={"Total"}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RiwayatDetailScreen;

const TextField = ({label, value, fontSize}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <TextCustom
      color={COLORS.gray}
      fontSize={fontSize ?? sizes(12)}
      fontFamily={FONTS.fontsSemiBold}
      value={label}
    />
    <TextCustom
      textAlign={"right"}
      color={COLORS.green}
      fontSize={fontSize ?? sizes(12)}
      fontFamily={FONTS.fontsSemiBold}
      width={sizes(145)}
      value={value}
    />
  </View>
);
