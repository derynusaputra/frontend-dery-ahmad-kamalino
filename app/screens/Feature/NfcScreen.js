import Gap from "components/Gap/Gap";
import TextCustom from "components/Text/TextCustom";
import Button from "components/button/Button";
import ButtonOutline from "components/button/ButtonOutline";
import {sizes} from "constants/sized";
import {FONTS} from "constants/theme";
import {useEffect, useState} from "react";
import NfcManager, {NfcTech} from "react-native-nfc-manager";

const {View} = require("react-native");

// NfcManager.start();

const NFCScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      setResult(tag);
    } catch (ex) {
      console.warn("Oops!", ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  useEffect(() => {
    readNdef();
  }, [navigation]);

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: sizes(15),
      }}
    >
      <TextCustom
        value="Aktifkan NFC dan tempelkan kartu"
        style={{
          textAlign: "center",
        }}
        fontSize={sizes(16)}
        fontFamily={FONTS.fontsSemiBold}
      />
      <Gap height={sizes(24)} />
      {result && (
        <View
          style={{
            paddingHorizontal: sizes(15),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextCustom
            value={"ID"}
            fontSize={sizes(16)}
            fontFamily={FONTS.fontsSemiBold}
          />
          <TextCustom
            value={result?.id}
            fontSize={sizes(16)}
            fontFamily={FONTS.fontsSemiBold}
          />
        </View>
      )}
    </View>
  );
};

export default NFCScreen;
