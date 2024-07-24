import Gap from "components/Gap/Gap";
import TextCustom from "components/Text/TextCustom";
import Button from "components/button/Button";
import {sizes} from "constants/sized";
import {View} from "react-native";

const FeatureTestScreen = ({navigation}) => {
  return (
    <View
      style={{
        padding: sizes(10),
      }}
    >
      <Button
        title={"Notif"}
        onPress={() => navigation?.navigate("FcmScreens")}
      />
      <Gap height={sizes(10)} />
      <Button
        title={"NFC TEST"}
        onPress={() => navigation.navigate("NFCScreen")}
      />
      <Gap height={sizes(10)} />
      <Button
        title={"Image Slider"}
        onPress={() => navigation.navigate("SliderScreen")}
      />
    </View>
  );
};

export default FeatureTestScreen;
