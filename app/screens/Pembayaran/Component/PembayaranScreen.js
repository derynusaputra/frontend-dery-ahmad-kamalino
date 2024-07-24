import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {sizes} from "../../../constants/sized";
import {useNavigation, useTheme} from "@react-navigation/native";
import {Icon} from "@rneui/base";
import Gap from "../../../components/Gap/Gap";
import FastImage from "react-native-fast-image";
import SectionTransfer from "./SectionTransfer";
import {ScrollView} from "react-native-gesture-handler";
import LoadingComp from "components/Loading/LoadingComp";
import {Snackbar} from "react-native-paper";
import {useSelector} from "react-redux";
import {Satellite} from "services/satellite";

const PembayaranScreen = ({onPress, paymentsId, typeBayar}) => {
  const theme = useTheme();
  const {colors} = theme;
  const JWT = useSelector((state) => state.account.token);
  const navigation = useNavigation();

  const [valNominal, setValNominal] = useState("");
  const [uriPhoto, setUriPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [active, setActive] = useState(true);

  const CardChoose = ({icName, title, onPress, isActive}) => {
    return (
      <Pressable onPress={onPress}>
        <View
          style={{
            width: isActive ? sizes(128) : sizes(107),
            height: isActive ? sizes(98) : sizes(82),
            backgroundColor: isActive ? colors?.green : colors?.greyLight,
            borderRadius: sizes(16),
            padding: sizes(10),
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Icon
            name={icName}
            type="material"
            size={isActive ? sizes(35) : sizes(27)}
            color={isActive ? colors?.white : colors?.greyMedium}
          />
          <Gap height={sizes(8)} />
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: isActive ? sizes(14) : sizes(12),
              color: isActive ? colors?.white : colors?.greyMedium,
            }}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    );
  };

  const CardSection = () => {
    return (
      <View
        style={{
          padding: sizes(15),
          marginHorizontal: sizes(15),
          marginVertical: sizes(20),
          backgroundColor: colors?.white,
          borderRadius: sizes(12),
          shadowColor: "#000",
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        {/* section profile */}
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <FastImage
            style={{
              height: sizes(42),
              width: sizes(42),
              borderRadius: sizes(300),
              backgroundColor: colors?.greyLight,
            }}
            resizeMode="cover"
            source={{
              uri: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              headers: {Authorization: "someAuthToken"},
              priority: FastImage.priority.high,
            }}
          />
          <Gap width={sizes(10)} />
          <View>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: sizes(14),
                color: colors?.green,
              }}
            >
              Aditya Rachman’s Wallet
            </Text>

            <View style={{flexDirection: "row"}}>
              <Icon
                name="wallet"
                type="entypo"
                size={sizes(16)}
                style={{marginTop: sizes(2)}}
                color={colors?.green}
              />
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: sizes(14),
                  color: colors?.green,
                }}
              >
                Rp10.000.000
              </Text>
            </View>
          </View>
        </View>
        {/* section input */}
        <View style={{paddingBottom: sizes(10), marginTop: sizes(10)}}>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: sizes(12),
              color: colors?.grey,
              marginTop: sizes(12),
              marginBottom: sizes(5),
            }}
          >
            Nominal Pembayaran
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: colors?.greyMedium,
              borderRadius: sizes(15),
              padding: sizes(12),
              fontFamily: "Poppins-Medium",
              fontSize: sizes(14),
              color: colors?.grey,
            }}
            // value={""}
            placeholder="Rp"
          />
        </View>
      </View>
    );
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const numberWithoutDots = valNominal.replace(/\./g, "");

    const formdata = new FormData();
    if (uriPhoto) {
      formdata.append("photo", {
        name: uriPhoto?.fileName,
        type: uriPhoto?.type,
        uri: uriPhoto?.uri,
      });
    }
    formdata.append("amount", numberWithoutDots);
    formdata.append("payments_id", paymentsId);

    try {
      const {data} = await Satellite(JWT).post(`/api/payments/pay`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigation?.navigate("PembayaranSukses");
    } catch (error) {
      //   setShowSnackbar(true);
      setErrMsg(error?.response?.data?.msg);
      setVisible(true);
      console.log("handleSubmit", error);
    }
    setIsLoading(false);
  };

  const isFull = uriPhoto !== "" && valNominal !== "";
  return (
    <>
      <View
        style={{
          height: sizes(700),
          // backgroundColor: "red",
        }}
      >
        <ScrollView contentContainerStyle={{paddingTop: sizes(50)}}>
          {/* <View
          style={{
            //   flexDirection: "row",
            marginTop: sizes(20),
            marginBottom: sizes(12),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: sizes(16),
              color: colors?.green,
            }}
          >
            SPP 2024
          </Text>
          <Gap height={sizes(7)} />
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: sizes(12),
              color: colors?.green,
            }}
          >
            Pilih Pembayaran
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardChoose
            onPress={() => {
              setActive(!active);
            }}
            isActive={active}
            icName={"person"}
            title={"Saldo Anak"}
          />
          <Gap width={sizes(20)} />
          <CardChoose
            onPress={() => {
              setActive(!active);
            }}
            isActive={!active}
            icName={"credit-card"}
            title={"Tabungan"}
          />
        </View>
        {active ? <CardSection /> :
        
        } */}
          <SectionTransfer
            typeBayar={typeBayar}
            setUriPhoto={setUriPhoto}
            setValNominal={setValNominal}
            uriPhoto={uriPhoto}
            valNominal={valNominal}
          />
        </ScrollView>
        {/* button */}
        <View style={{marginHorizontal: sizes(40), marginBottom: sizes(40)}}>
          <Pressable
            disabled={isFull ? false : true}
            onPress={handleSubmit}
            style={{
              backgroundColor: isFull ? colors?.green : colors?.grey,
              paddingVertical: sizes(10),
              alignItems: "center",
              borderRadius: sizes(15),
              width: sizes(300),
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
      </View>

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
      {isLoading ? <LoadingComp /> : null}
    </>
  );
};

export default PembayaranScreen;

const styles = StyleSheet.create({});
