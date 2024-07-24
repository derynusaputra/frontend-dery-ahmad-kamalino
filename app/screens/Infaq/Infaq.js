import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {useTheme} from "@react-navigation/native";
import Headers from "../../layout/Headers";
import {Formik} from "formik";
import TextCustom from "../../components/Text/TextCustom";
import {FONTS} from "../../constants/theme";
import {sizes} from "../../constants/sized";
import CustomInputDropdown from "../../components/Input/CustomInputDropdown";
import TextInputCustom from "../DataPribadi/Component/TextInputCustom";
import Gap from "../../components/Gap/Gap";
import CustomInputs from "../../components/Input/CustomInputs";
import {Satellite} from "../../services/satellite";
import {useSelector} from "react-redux";
import ModalConfirms from "../../components/Modal/ModalConfirms";
import {formatNumber, formatToRupiah} from "services/Helper";
import {Snackbar} from "react-native-paper";

const Infaq = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const JWT = useSelector((state) => state.account.token);

  const formikRef = useRef(null);
  const [isModal, setIsModal] = useState(false);

  const [valListInfaq, setValListInfaq] = useState([]);
  const [valNominal, setValNominal] = useState("");

  const [visible, setVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const data = [
    {label: "Saldo Anak", value: "1"},
    {label: "Tabungan", value: "2"},
  ];

  const handleChanges = (text) => {
    // Remove non-digit characters
    const numericText = text.replace(/\D/g, "");
    // Format the number
    const formattedText = formatNumber(numericText);
    // Set the formatted text as the input value
    setValNominal(formattedText);
  };

  const getDataInfaq = async () => {
    try {
      const {data} = await Satellite(JWT).get(`/api/infaq`);

      const newDataArray = data?.result.map((item) => ({
        label: item.name,
        value: item.id,
      }));

      setValListInfaq(newDataArray);
    } catch (error) {
      console.log("getDataInfaq", error);
    }
  };

  const handlePostInpaq = async (value) => {
    const numberWithoutDots = valNominal.replace(/\./g, "");
    console.log("am=", {value, numberWithoutDots});

    try {
      const {data} = await Satellite(JWT).post(`/api/transactions/infaq/send`, {
        infaq_type_id: value?.kategory,
        amount: Number(numberWithoutDots),
      });

      console.log({data});
      navigation?.navigate("PembayaranSukses");
    } catch (error) {
      setErrMsg(error?.response?.data?.msg);
      setVisible(true);
      console.log("handlePostInpaq", error);
    }

    if (formikRef.current) {
      formikRef.current.resetForm();
      setValNominal("");
    }
  };

  useEffect(() => {
    getDataInfaq();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Formik
        innerRef={formikRef}
        initialValues={{
          // pembayaran: "",
          kategory: "",
        }}
        onSubmit={(values) => {
          handlePostInpaq(values);
          // Confirm(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
          isValid,
        }) => {
          const isComplete = () => {
            return (
              // values.pembayaran !== "" &&
              values.kategory !== "" && valNominal !== ""
            );
          };

          return (
            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === "ios" ? "padding" : ""}
            >
              <Headers
                title={"Infaq"}
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
                    width: sizes(346),
                    //   height: sizes(453),
                    paddingBottom: sizes(10),
                    paddingTop: sizes(20),
                    paddingHorizontal: sizes(15),
                    borderWidth: sizes(1),
                    borderColor: colors?.greyLight,
                    marginHorizontal: sizes(15),
                    borderBottomRightRadius: sizes(10),
                    borderBottomLeftRadius: sizes(10),
                  }}
                >
                  {/* <CustomInputDropdown
                    title={"Pembayaran"}
                    values={values?.pembayaran}
                    placeholder="Pilih Pembayaran"
                    data={data}
                    hideSearch={true}
                    onChangeText={(val) =>
                      handleChange("pembayaran")(val?.label)
                    }
                  /> */}
                  <CustomInputDropdown
                    title="Kategori Infaq"
                    values={values?.kategory}
                    placeholder={"Pilih Kategori Infaq"}
                    data={valListInfaq}
                    valueLabel="value"
                    onChangeText={(val) => handleChange("kategory")(val?.value)}
                  />

                  <Gap height={sizes(5)} />
                  <CustomInputs
                    name={"Pilih atau Ketik Nominal"}
                    placeholder={"0"}
                    typeKeyboard="numeric"
                    isShow={true}
                    // defaultValue={noRek}
                    value={valNominal}
                    onChangeText={handleChanges}
                  />

                  <Pressable
                    onPress={() => {
                      setIsModal(true);
                    }}
                    //   disabled={!isComplete()}
                    style={{
                      paddingVertical: sizes(12),
                      marginTop: sizes(30),
                      marginBottom: sizes(10),
                      borderRadius: sizes(15),
                      backgroundColor: isComplete()
                        ? colors?.greenDark
                        : colors?.grey,

                      alignItems: "center",
                    }}
                  >
                    <TextCustom
                      value={"Lanjutkan"}
                      // width={sizes(130)}
                      fontSize={sizes(16)}
                      color={colors?.white}
                      fontFamily={FONTS?.fontsMedium}
                    />
                  </Pressable>
                </View>
              </ScrollView>
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
              <ModalConfirms
                isModal={isModal}
                title={`Pembayaran Infaq Masjid akan dipotong dari saldo tabungan Anda senilai ${formatToRupiah(
                  Number(valNominal.replace(/\./g, "")),
                )}.`}
                setIsModal={setIsModal}
                onPressConfirm={handleSubmit}
                // valPass={valPass}
                // setValPass={setValPass}
                // isActive={valPass !== ""}
              />
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default Infaq;

const styles = StyleSheet.create({});
