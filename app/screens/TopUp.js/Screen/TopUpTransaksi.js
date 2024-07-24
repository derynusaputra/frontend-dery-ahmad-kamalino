import {
  Image,
  KeyboardAvoidingView,
  Linking,
  PermissionsAndroid,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, {useCallback, useState} from "react";
import {useTheme} from "@react-navigation/native";
import {Icon} from "@rneui/base";
import {sizes} from "../../../constants/sized";
import Headers from "../../../layout/Headers";
import Gap from "../../../components/Gap/Gap";
import {IMAGES} from "../../../constants/theme";
import {launchCamera, launchImageLibrary} from "react-native-image-picker";
import FastImage from "react-native-fast-image";
import {Satellite} from "services/satellite";
import {useSelector} from "react-redux";
import CustomInputs from "components/Input/CustomInputs";
import {formatNumber} from "services/Helper";
import Clipboard from "@react-native-community/clipboard";
import LoadingComp from "components/Loading/LoadingComp";
import {Snackbar} from "react-native-paper";

const TopUpTransaksi = ({navigation, route}) => {
  const {colors} = useTheme();
  //   console.log(route?.params?.type);
  const JWT = useSelector((state) => state.account.token);
  const profile = useSelector((state) => state.account.profileData);

  const [imageFileUpload, setImageFileUpload] = useState("");
  const [uriPhoto, setUriPhoto] = useState("");
  const [disable, setDisable] = useState(false);
  const [valNominal, setValNominal] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  console.log(profile?.fullname);
  console.log(profile?.nis);

  const virtualAccount = "1056242957";

  const numberPhone = "0858-6034-7851";

  const copyToClipboard = () => {
    Clipboard.setString(virtualAccount);
    alert("Text copied to clipboard!");
  };

  const handleWhatsAppPress = () => {
    const whatsappUrl = `https://wa.me/6285860347851?text=Assalamualaikum,\n\nMohon periksa proses TouUp dengan data berikut: \n\nNama Siswa:*${profile?.fullname}*+Nama NIS:*${profile?.nis}*\nType Pembayaran:${
      route?.params?.type === "tabungan"
        ? "*TopUp Tabungan*"
        : "*TopUp Saldo Anak*"
    } \n\nTerimakasih.`;

    Linking.canOpenURL(whatsappUrl)
      .then((supported) => {
        if (!supported) {
          return Linking.openURL(whatsappUrl);
        } else {
          console.log("WhatsApp is not installed.");
          return Linking.openURL(whatsappUrl);
        }
      })
      .catch((error) => console.error("Error opening WhatsApp:", error));
  };
  const isFull = uriPhoto && valNominal;

  const handleSubmit = async () => {
    // console.log({valNominal});

    const cleanText = valNominal.replace(/\D/g, "");

    setLoading(true);
    const formdata = new FormData();
    if (uriPhoto) {
      formdata.append("image_transaction", {
        name: uriPhoto?.fileName,
        type: uriPhoto?.type,
        uri: uriPhoto?.uri,
      });
    }
    formdata.append(
      "transfer_type",
      `${route?.params?.type === "tabungan" ? "" : "topup"}`,
    );
    formdata.append("transfer_method", "transfer_bank");
    formdata.append("transaction_details", "top_up_savings_parent");
    formdata.append("user_id", profile?.id);
    formdata.append("total_amount", cleanText);

    try {
      const {data} = await Satellite(JWT).post(
        `/api/topup/topupBalance`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log({data});
      // setErrMessage("");

      // setIsModal(false);
      // onPressConfirm?.();
      navigation?.navigate("PembayaranSukses");
    } catch (error) {
      setErrMsg(error?.response?.data?.msg);
      setVisible(true);
      console.log("LoginButton", error);
    }
    // setValPass("");
    setLoading(false);
  };

  const handleChanges = (text) => {
    // Remove non-digit characters
    const numericText = text.replace(/\D/g, "");
    // Format the number
    const formattedText = formatNumber(numericText);
    // Set the formatted text as the input value
    setValNominal(formattedText);
  };

  const handleUploudPhoto = async (types) => {
    // console.log({ types });
    setDisable(true);
    const optionCamera = {
      mediaType: "photo",
      maxWidth: 400,
      maxHeight: 400,
    };
    if (Platform.OS !== "ios") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera");
        } else {
          return console.log("Camera permission denied");
        }
      } catch (err) {
        return console.warn(err);
      }
    }
    const optionGallery = {
      mediaType: "photo",
    };
    try {
      const imageResult = types
        ? await launchCamera(optionCamera)
        : await launchImageLibrary(optionGallery);
      console.log({imageResult});
      if (imageResult) {
        const imagePick = imageResult?.assets[0];
        console.log("imagePick", {imagePick});
        setImageFileUpload(imagePick.uri);
        setUriPhoto(imagePick);
        // setModalPhoto(false);
        // dispatch(EditProfileStore({ token, image: imagePick, type: updateFor }));
      }
    } catch (error) {
      console.log({error});
    }
    setDisable(false);
  };
  const TextStep = ({no, title, isWA = false}) => {
    return (
      <View style={{flexDirection: "row", marginTop: sizes(4)}}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: sizes(12),
            color: colors?.green,
            paddingLeft: sizes(5),
          }}
        >
          {no}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: sizes(12),
            color: colors?.green,
            paddingLeft: sizes(5),
          }}
        >
          {title}
        </Text>
        {isWA ? (
          <Icon
            name="wallet"
            type="entypo"
            size={sizes(16)}
            style={{marginTop: sizes(2)}}
            color={colors?.green}
          />
        ) : null}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors?.white}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <Headers
          title={
            route?.params?.type === "tabungan"
              ? "TopUp Tabungan"
              : "TopUp Saldo Anak"
          }
          backgroundColor={colors?.white}
          icColor={colors?.green}
        />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: colors?.white,
          }}
        >
          <View
            style={{
              //   flexDirection: "row",
              //   alignItems: "center",
              paddingHorizontal: sizes(15),
              //   justifyContent: "center",
              marginTop: sizes(22),
              //   backgroundColor: "red",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: sizes(12),
                color: colors?.green,
              }}
            >
              Cara Top Up:
            </Text>
            <TextStep
              no={"1."}
              title={"Buka mobile banking yang Anda pilih."}
            />
            <TextStep no={"2."} title={"Pilih atau Ketik Nominal."} />
            <CustomInputs
              name={""}
              placeholder={"0"}
              typeKeyboard="numeric"
              isShow={true}
              // defaultValue={noRek}
              value={valNominal}
              onChangeText={handleChanges}
            />
            <TextStep
              no={"2."}
              title={"Salin kode virtual account di bawah ini."}
            />

            <View
              style={{
                paddingHorizontal: sizes(15),
                paddingVertical: sizes(12),
                borderRadius: sizes(15),
                borderWidth: 1,
                marginHorizontal: sizes(19),
                marginVertical: sizes(5),
                borderColor: colors?.greyLight,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: sizes(12),
                  color: colors?.greyMedium,
                }}
              >
                Virtual Account
              </Text>
              <Gap height={sizes(10)} />

              <Pressable
                onPress={copyToClipboard}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: sizes(16),
                    color: colors?.green,
                  }}
                >
                  {virtualAccount}
                </Text>
                <View
                  style={{
                    paddingHorizontal: sizes(7),
                    paddingVertical: sizes(3),
                    borderRadius: sizes(7),
                    borderWidth: 1,
                    borderColor: colors?.greenMuda,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Medium",
                      fontSize: sizes(10),
                      color: colors?.green,
                    }}
                  >
                    Copy
                  </Text>
                </View>
              </Pressable>
            </View>
            <TextStep
              no={"3."}
              title={`Maka akan muncul Virtual Account atas nama "Pondok Pesantren Al Musyarrofah".`}
            />
            <TextStep no={"4."} title={`Screenshoot  bukti pembayaran.`} />
            <TextStep
              no={"5."}
              title={`Jika ada kendala, hubungi kami disini.`}
            />
            <View
              style={{
                paddingHorizontal: sizes(15),
                paddingVertical: sizes(12),
                borderRadius: sizes(15),
                borderWidth: 1,
                marginHorizontal: sizes(19),
                marginVertical: sizes(5),
                borderColor: colors?.greyLight,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: sizes(12),
                  color: colors?.greyMedium,
                }}
              >
                Klik disini
              </Text>

              <Pressable
                onPress={handleWhatsAppPress}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: sizes(16),
                    color: colors?.green,
                  }}
                >
                  {numberPhone}
                </Text>
                <View
                  style={{
                    paddingHorizontal: sizes(7),
                    paddingVertical: sizes(3),
                    borderRadius: sizes(7),
                    borderWidth: 1,
                    borderColor: colors?.greenMuda,
                  }}
                >
                  <Icon
                    name="whatsapp"
                    type="material-community"
                    size={sizes(16)}
                    // style={{marginTop: sizes(2)}}
                    color={colors?.green}
                  />
                </View>
              </Pressable>
            </View>
            <TextStep
              no={"6."}
              title={`Kirimkan bukti pembayaran di bawah ini dengan format jpg, png atau pdf.`}
            />

            {console.log(uriPhoto?.uri)}
            {uriPhoto ? (
              <Pressable
                disabled={disable}
                onPress={() => {
                  handleUploudPhoto(false);
                }}
                style={{justifyContent: "center"}}
              >
                <FastImage
                  style={{
                    marginHorizontal: sizes(19),
                    marginVertical: sizes(10),

                    height: sizes(300),
                    // width: sizes(120),
                    // borderRadius: sizes(300),
                    backgroundColor: colors?.greyLight,
                  }}
                  resizeMode="contain"
                  source={{
                    uri: uriPhoto?.uri,
                    headers: {Authorization: "someAuthToken"},

                    priority: FastImage.priority.high,
                  }}
                />
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: sizes(20),
                    height: sizes(300),
                    width: sizes(304),
                    backgroundColor: "rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <Image
                    style={{
                      // left: 15,
                      height: sizes(40),
                      width: sizes(40),
                      // resizeMode: "contain",
                      // backgroundColor: "red",
                      // alignItems: "center",
                      // position: "absolute",
                      // left: sizes(150),
                    }}
                    source={IMAGES.icUpload}
                  />
                </View>
              </Pressable>
            ) : (
              <Pressable
                disabled={disable}
                onPress={() => {
                  handleUploudPhoto(false);
                }}
                style={{
                  paddingHorizontal: sizes(20),
                  paddingVertical: sizes(20),
                  borderRadius: sizes(15),
                  borderWidth: 1,
                  marginHorizontal: sizes(19),
                  marginVertical: sizes(10),
                  borderColor: colors?.greyLight,
                  backgroundColor: colors?.greenOpacity,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    // left: 15,
                    height: sizes(40),
                    width: sizes(40),
                    // resizeMode: "contain",
                    alignItems: "center",
                  }}
                  source={IMAGES.icUpload}
                />
                <Gap height={sizes(15)} />
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: sizes(10),
                    color: colors?.green,
                  }}
                >
                  Click to Upload{" "}
                  <Text
                    style={{
                      fontFamily: "Poppins-Medium",
                      fontSize: sizes(10),
                      color: colors?.grey,
                    }}
                  >
                    or drag and drop
                  </Text>
                </Text>
                <Gap height={sizes(2)} />

                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: sizes(8),
                    color: colors?.greyMedium,
                  }}
                >
                  Upload file dengan format JPG, PNG, PDF
                </Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
        <View style={{marginHorizontal: sizes(30), marginBottom: sizes(30)}}>
          <Pressable
            onPress={handleSubmit}
            disabled={!isFull}
            style={{
              backgroundColor: isFull ? colors?.green : colors?.grey,
              paddingVertical: sizes(10),
              alignItems: "center",
              borderRadius: sizes(15),
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: sizes(12),
                color: colors?.white,
              }}
            >
              Kirim
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: "Ok",
          onPress: () => {
            // Do something
          },
        }}
      >
        {errMsg}
      </Snackbar>
      {loading ? <LoadingComp /> : null}
    </SafeAreaView>
  );
};

export default TopUpTransaksi;

const styles = StyleSheet.create({});
