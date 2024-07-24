// import { Text, View } from "react-native";
import {useTheme} from "@react-navigation/native";
import {Icon} from "@rneui/base";
import Gap from "components/Gap/Gap";
import {sizes} from "constants/sized";
import React from "react";
// import { Icon } from "@rneui/themed";
// import { useColorsSystem } from "@/Hooks/useColors";
// import { AppearanceColors } from "@/Theme/Variables";
// import { Gap } from "@/Components";

import {Text, View} from "react-native";

const EmptyCustom = ({
  icName = "database-off",
  title = "Data not found",
  description = "Sorry, your data is not available",
}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: sizes(500),
      }}
    >
      <Icon
        name={icName}
        type="material-community"
        size={sizes(50)}
        color={colors?.grey}
      />
      <Gap height={sizes(30)} />
      <View>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: sizes(16),
            color: colors?.black,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: sizes(12),
            color: colors?.grey,
            textAlign: "center",
            marginHorizontal: 30,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default EmptyCustom;
