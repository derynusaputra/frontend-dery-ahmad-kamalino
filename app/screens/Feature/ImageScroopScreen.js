import Button from "components/button/Button";
import ButtonOutline from "components/button/ButtonOutline";
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

const {View} = require("react-native");

NfcManager.start();

const NFCScreen = () => {
    async function readNdef() {
        try {
          // register for the NFC tag with NDEF in it
          await NfcManager.requestTechnology(NfcTech.Ndef);
          // the resolved tag object will contain `ndefMessage` property
          const tag = await NfcManager.getTag();
          console.warn('Tag found', tag);
        } catch (ex) {
          console.warn('Oops!', ex);
        } finally {
          // stop the nfc scanning
          NfcManager.cancelTechnologyRequest();
        }
      }

  return (
    <View>
      <ButtonOutline onPress={readNdef} title={"Test NFC"} />
    </View>
  );
};

export default NFCScreen;
